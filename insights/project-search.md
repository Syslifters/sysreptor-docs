---
url: https://docs.sysreptor.com/insights/project-search.md
---
# Searching encrypted project data

SysReptor stores sensitive pentest report content (e.g. findings, sections) encrypted in the database.
This is a security measure: even a compromised database should not expose sensitive pentest data.
But database encryption creates challenges: the database cannot run queries against ciphertext, so any operation on encrypted content (e.g. search) requires special handling.

This page explains how SysReptor implements full-text search over encrypted project data using a blind trigram index.

## The problem with encrypted fields

Most tools search content by running `LIKE '%keyword%'` or full-text search queries directly in the database.
This works because the database can read the stored values in plaintext.

SysReptor encrypts sensitive project data at the application layer before it reaches the database.
The database only ever sees ciphertext (i.e. opaque byte blobs).
The encryption key is held by the application server, not the database.

The following options to resolve this problem turned out to be infeasible:

* **Decrypt everything in Python and filter**: The application has to fetch and decrypt every finding in every project on every search request. With thousands of projects this is slow and resource-intensive.
* **Disable encryption for project data**: This defeats the purpose of encryption.
* **Store a plaintext search index separately**: Storing plaintext alongside ciphertext eliminates the security benefits of encryption. An attacker with database access would be able to read the index and reconstruct plaintext data.

The solution has to let the database do the filtering without ever seeing the plaintext content.

## Blind trigram index

SysReptor uses a *blind trigram index*: the database stores a set of opaque tokens per project, derived from the project's text contents. A search term is converted to tokens the same way, and the database matches projects by comparing token sets. The database stores only encrypted data and the blind index but never plaintext data.

### Trigrams

A trigram is a set of three consecutive characters.
The word `"pentest"` produces the trigrams `pen`, `ent`, `nte`, `tes`, `est`.

PostgreSQL's `pg_trgm` extension uses the same idea: if a search term occurs in a document, every trigram of that search term must also occur in the document. Containment over the set of trigrams is an efficient way to filter matches.

### HMAC-based blinding

Each trigram is *blinded* by passing it through HMAC-SHA256, keyed with the application's encryption key:

```
token = HMAC-SHA256(key, "sysreptor|blind_trigram|v1|" + trigram_bytes)[:16]
```

Only those 16-byte tokens are stored, not the trigrams themselves.

* Tokens are deterministic. The same trigram always produces the same token under the same key, so equality lookups work.
* Without the key, tokens are indistinguishable from random bytes. A read-only attacker on the database cannot reverse a token back to its trigram.
* 128 bits is enough that token collisions between distinct trigrams are negligible.

The HMAC is keyed with the **same application secret** that encrypts the stored field blobs. That is a deliberate design choice, not an accident: anyone who can derive meaningful probes from the tokens already holds the key needed to decrypt the ciphertext directly, so the blind index does not introduce a weaker path than “the encryption key is compromised.”

## Indexing

An asynchronous background task runs regularly and rebuilds the blind trigram index for any project whose content has changed since the last run.

For each project, the process is:

1. **Collect text**: Every string field in every finding and section is extracted.
2. **Normalize**: Strings are Unicode-normalized, case-folded, and whitespace-collapsed, which makes search case- and accent-insensitive.
3. **Compute trigrams**: Normalized text is encoded as UTF-8 and split into sliding 3-byte windows. Trigrams are deduplicated across the project.
4. **Blind**: Each unique trigram becomes a 16-byte token via the HMAC above.
5. **Store**: All tokens are stored in the `BlindTrigramToken` table, one row per unique token, replacing any previous tokens for that project.

## Search

A search term goes through the same normalization and trigram split as during indexing. Each trigram is HMAC'd, and a project is considered a content match if its token set contains every token derived from the term. This is the same containment check `pg_trgm` performs over plaintext.

Search terms shorter than three characters skip the trigram lookup entirely. A 3-character term produces exactly one trigram; anything shorter has none.

## Key rotation

The HMAC key follows the application's `DEFAULT_ENCRYPTION_KEY_ID`. SysReptor allows multiple encryption keys to be configured at once, so older data can still be decrypted while new data is written under a fresh key.

At search time, the term is hashed under every currently configured key, and rows matching any of them count as hits. A project that was indexed under an old key therefore remains searchable; the background task picks it up and rebuilds the index under the new key on its next pass.

## Security properties and limitations

**What it protects against**: The blind index protects against read-only attackers with database access. They see 128-bit tokens that look random; without the HMAC key, recovering the underlying trigrams (or plaintext) is not feasible.

**Frequency analysis**: The HMAC key is shared across all projects, so the same trigram always hashes to the same token. An attacker with database access can identify projects that share tokens. They do not recover any plaintext, but they do learn which projects have content in common.

**Dictionary attacks**: With the application encryption key, an attacker can derive tokens for guessed terms (e.g. a CVE id) and query the index for matches. The HMAC uses that same key as the ciphertext, so the capability is not separate from key compromise: whoever can run this probe can decrypt field data directly. A read-only database attacker without the key cannot.

**False positives**: A project that contains every trigram of a search term scattered across different words, but not the term itself, will still match. The effect is small for longer terms and is the same trade-off `pg_trgm` makes.

**Index lag**: The index is rebuilt asynchronously, so a project that was just edited may not be findable under its new content for a few minutes.

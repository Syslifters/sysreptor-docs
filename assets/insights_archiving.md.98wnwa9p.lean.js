import{$ as e,At as t,H as n,_t as r,at as i,it as a,nt as o,rt as s,xt as c}from"./chunks/framework.B6hMYkVh.js";import"./chunks/assets.C264fkKD.js";var l=JSON.parse(`{"title":"Archiving","description":"","frontmatter":{},"headers":[],"relativePath":"insights/archiving.md","filePath":"insights/archiving.md","lastUpdated":1781869590000}`),u={name:`insights/archiving.md`};function d(n,l,u,d,f,p){let m=c(`BadgePro`),h=c(`PluginTabsTab`),g=c(`PluginTabs`);return r(),o(`div`,null,[l[2]||=e(`div`,{style:{display:`none`},hidden:`true`,"aria-hidden":`true`,"data-nosnippet":``},`Are you an LLM? You can read better optimized documentation at /insights/archiving.md for this page in Markdown format`,-1),l[3]||=e(`h1`,{id:`archiving`,tabindex:`-1`},[a(`Archiving `),e(`a`,{class:`header-anchor`,href:`#archiving`,"aria-label":`Permalink to “Archiving”`},`​`)],-1),i(m),l[4]||=s("",22),i(g,null,{default:t(()=>[i(h,{label:`Generate private keys with GPG`},{default:t(()=>[...l[0]||=[e(`p`,null,[a(`Use following commands to generate an elliptic curve encryption key with `),e(`code`,null,`gpg`),a(`. Be sure to protect the key with a strong password and make backups. If you lose all your private keys, you can no longer restore archives.`)],-1),e(`div`,{class:`language- line-numbers-mode`},[e(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),e(`span`,{class:`lang`}),e(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[e(`code`,null,[e(`span`,{class:`line`},[e(`span`,null,`cat << EOF > config.txt`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Key-Type: ECDSA`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Key-Curve: nistp521`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Subkey-Type: ECDH`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Subkey-Curve: nistp521`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Subkey-Usage: encrypt`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Expire-Date: 0`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Name-Comment: SysReptor Archiving`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Name-Real: <your name>`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Name-Email: <your email>`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`EOF`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`gpg --batch --generate-key config.txt`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`gpg --list-secret-keys --keyid-format=long`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`gpg --armor --export <key-id>`)])])]),e(`div`,{class:`line-numbers-wrapper`,"aria-hidden":`true`},[e(`span`,{class:`line-number`},`1`),e(`br`),e(`span`,{class:`line-number`},`2`),e(`br`),e(`span`,{class:`line-number`},`3`),e(`br`),e(`span`,{class:`line-number`},`4`),e(`br`),e(`span`,{class:`line-number`},`5`),e(`br`),e(`span`,{class:`line-number`},`6`),e(`br`),e(`span`,{class:`line-number`},`7`),e(`br`),e(`span`,{class:`line-number`},`8`),e(`br`),e(`span`,{class:`line-number`},`9`),e(`br`),e(`span`,{class:`line-number`},`10`),e(`br`),e(`span`,{class:`line-number`},`11`),e(`br`),e(`span`,{class:`line-number`},`12`),e(`br`),e(`span`,{class:`line-number`},`13`),e(`br`),e(`span`,{class:`line-number`},`14`),e(`br`),e(`span`,{class:`line-number`},`15`),e(`br`)])],-1)]]),_:1}),i(h,{label:`Generate private keys on YubiKey 5`},{default:t(()=>[...l[1]||=[e(`p`,null,`Use the following command to generate a new Elliptic Curve key pair on a YubiKey 5. The private key is generated on the YubiKey and never leaves the device. Beware that you cannot backup the key. We recommend that you add a second key as a fallback in case you lose your YubiKey.`,-1),e(`div`,{class:`language- line-numbers-mode`},[e(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),e(`span`,{class:`lang`}),e(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[e(`code`,null,[e(`span`,{class:`line`},[e(`span`,null,`gpg --card-edit`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`                        `)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Reader ...........: Yubico YubiKey FIDO CCID 00 00`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Application ID ...: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Application type .: OpenPGP`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Version ..........: 3.4`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Manufacturer .....: Yubico`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Serial number ....: 19763721`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Name of cardholder: [not set]`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Language prefs ...: [not set]`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Salutation .......:`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`URL of public key : [not set]`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Login data .......: [not set]`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Signature PIN ....: not forced`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Key attributes ...: rsa2048 rsa2048 rsa2048`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Max. PIN lengths .: 127 127 127`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`PIN retry counter : 3 0 3`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Signature counter : 0`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`KDF setting ......: off`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`UIF setting ......: Sign=off Decrypt=off Auth=off`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Signature key ....: [none]`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Encryption key....: [none]`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Authentication key: [none]`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`General key info..: [none]`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`gpg/card> admin`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Admin commands are allowed`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`# Change Yubikey Pin (optional)`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`# Hint: default pin is 123456, default admin pin is 12345678`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`gpg/card> passwd`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`gpg: OpenPGP card no. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX detected`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`1 - change PIN`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`2 - unblock PIN`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`3 - change Admin PIN`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`4 - set the Reset Code`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Q - quit`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Your selection? 3`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`PIN changed.`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`1 - change PIN`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`2 - unblock PIN`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`3 - change Admin PIN`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`4 - set the Reset Code`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Q - quit`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Your selection? 1`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`PIN changed.`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`1 - change PIN`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`2 - unblock PIN`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`3 - change Admin PIN`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`4 - set the Reset Code`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Q - quit`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Your selection? Q`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`gpg/card> name`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Cardholder's surname: <your name>`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Cardholder's given name: <your name>`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`# Change key type to elliptic curve (optional)`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`gpg/card> key-attr`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Changing card key attribute for: Signature key`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Please select what kind of key you want:`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0(1) RSA`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0(2) ECC`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Your selection? 2`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Please select which elliptic curve you want:`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0(1) Curve 25519 *default*`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0(4) NIST P-384`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Your selection? 1`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`The card will now be re-configured to generate a key of type: ed25519`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Note: There is no guarantee that the card supports the requested`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0\xA0\xA0\xA0key type or size.  If the key generation does not succeed,`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0\xA0\xA0\xA0please check the documentation of your card to see which`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0\xA0\xA0\xA0key types and sizes are supported.`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Changing card key attribute for: Encryption key`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Please select what kind of key you want:`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0(1) RSA`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0(2) ECC`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Your selection? 2`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Please select which elliptic curve you want:`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0(1) Curve 25519 *default*`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0(4) NIST P-384`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Your selection? 1`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`The card will now be re-configured to generate a key of type: cv25519`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Changing card key attribute for: Authentication key`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Please select what kind of key you want:`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0(1) RSA`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0(2) ECC`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Your selection? 2`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Please select which elliptic curve you want:`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0(1) Curve 25519 *default*`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0(4) NIST P-384`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Your selection? 1`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`The card will now be re-configured to generate a key of type: ed25519`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`# Generate key pair`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`gpg/card> generate`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Make off-card backup of encryption key? (Y/n) n`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Please specify how long the key should be valid.`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`0 = key does not expire`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0\xA0<n>  = key expires in n days`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0<n>w = key expires in n weeks`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0<n>m = key expires in n months`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`\xA0\xA0\xA0<n>y = key expires in n years`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Key is valid for? (0) 0`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Key does not expire at all`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Is this correct? (y/N) y`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`GnuPG needs to construct a user ID to identify your key.`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Real name: <your name>`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Email address: <your email>`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Comment: SysReptor Archiving Key`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`You selected this USER-ID:`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`"<your name> (SysReptor Archiving Key) <your email>"`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`public and secret key created and signed.`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`gpg/card> quit`)]),a(`
`),e(`span`,{class:`line`},[e(`span`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`gpg --list-secret-keys --keyid-format=long`)]),a(`
`),e(`span`,{class:`line`},[e(`span`,null,`gpg --armor --export <key-id>`)])])]),e(`div`,{class:`line-numbers-wrapper`,"aria-hidden":`true`},[e(`span`,{class:`line-number`},`1`),e(`br`),e(`span`,{class:`line-number`},`2`),e(`br`),e(`span`,{class:`line-number`},`3`),e(`br`),e(`span`,{class:`line-number`},`4`),e(`br`),e(`span`,{class:`line-number`},`5`),e(`br`),e(`span`,{class:`line-number`},`6`),e(`br`),e(`span`,{class:`line-number`},`7`),e(`br`),e(`span`,{class:`line-number`},`8`),e(`br`),e(`span`,{class:`line-number`},`9`),e(`br`),e(`span`,{class:`line-number`},`10`),e(`br`),e(`span`,{class:`line-number`},`11`),e(`br`),e(`span`,{class:`line-number`},`12`),e(`br`),e(`span`,{class:`line-number`},`13`),e(`br`),e(`span`,{class:`line-number`},`14`),e(`br`),e(`span`,{class:`line-number`},`15`),e(`br`),e(`span`,{class:`line-number`},`16`),e(`br`),e(`span`,{class:`line-number`},`17`),e(`br`),e(`span`,{class:`line-number`},`18`),e(`br`),e(`span`,{class:`line-number`},`19`),e(`br`),e(`span`,{class:`line-number`},`20`),e(`br`),e(`span`,{class:`line-number`},`21`),e(`br`),e(`span`,{class:`line-number`},`22`),e(`br`),e(`span`,{class:`line-number`},`23`),e(`br`),e(`span`,{class:`line-number`},`24`),e(`br`),e(`span`,{class:`line-number`},`25`),e(`br`),e(`span`,{class:`line-number`},`26`),e(`br`),e(`span`,{class:`line-number`},`27`),e(`br`),e(`span`,{class:`line-number`},`28`),e(`br`),e(`span`,{class:`line-number`},`29`),e(`br`),e(`span`,{class:`line-number`},`30`),e(`br`),e(`span`,{class:`line-number`},`31`),e(`br`),e(`span`,{class:`line-number`},`32`),e(`br`),e(`span`,{class:`line-number`},`33`),e(`br`),e(`span`,{class:`line-number`},`34`),e(`br`),e(`span`,{class:`line-number`},`35`),e(`br`),e(`span`,{class:`line-number`},`36`),e(`br`),e(`span`,{class:`line-number`},`37`),e(`br`),e(`span`,{class:`line-number`},`38`),e(`br`),e(`span`,{class:`line-number`},`39`),e(`br`),e(`span`,{class:`line-number`},`40`),e(`br`),e(`span`,{class:`line-number`},`41`),e(`br`),e(`span`,{class:`line-number`},`42`),e(`br`),e(`span`,{class:`line-number`},`43`),e(`br`),e(`span`,{class:`line-number`},`44`),e(`br`),e(`span`,{class:`line-number`},`45`),e(`br`),e(`span`,{class:`line-number`},`46`),e(`br`),e(`span`,{class:`line-number`},`47`),e(`br`),e(`span`,{class:`line-number`},`48`),e(`br`),e(`span`,{class:`line-number`},`49`),e(`br`),e(`span`,{class:`line-number`},`50`),e(`br`),e(`span`,{class:`line-number`},`51`),e(`br`),e(`span`,{class:`line-number`},`52`),e(`br`),e(`span`,{class:`line-number`},`53`),e(`br`),e(`span`,{class:`line-number`},`54`),e(`br`),e(`span`,{class:`line-number`},`55`),e(`br`),e(`span`,{class:`line-number`},`56`),e(`br`),e(`span`,{class:`line-number`},`57`),e(`br`),e(`span`,{class:`line-number`},`58`),e(`br`),e(`span`,{class:`line-number`},`59`),e(`br`),e(`span`,{class:`line-number`},`60`),e(`br`),e(`span`,{class:`line-number`},`61`),e(`br`),e(`span`,{class:`line-number`},`62`),e(`br`),e(`span`,{class:`line-number`},`63`),e(`br`),e(`span`,{class:`line-number`},`64`),e(`br`),e(`span`,{class:`line-number`},`65`),e(`br`),e(`span`,{class:`line-number`},`66`),e(`br`),e(`span`,{class:`line-number`},`67`),e(`br`),e(`span`,{class:`line-number`},`68`),e(`br`),e(`span`,{class:`line-number`},`69`),e(`br`),e(`span`,{class:`line-number`},`70`),e(`br`),e(`span`,{class:`line-number`},`71`),e(`br`),e(`span`,{class:`line-number`},`72`),e(`br`),e(`span`,{class:`line-number`},`73`),e(`br`),e(`span`,{class:`line-number`},`74`),e(`br`),e(`span`,{class:`line-number`},`75`),e(`br`),e(`span`,{class:`line-number`},`76`),e(`br`),e(`span`,{class:`line-number`},`77`),e(`br`),e(`span`,{class:`line-number`},`78`),e(`br`),e(`span`,{class:`line-number`},`79`),e(`br`),e(`span`,{class:`line-number`},`80`),e(`br`),e(`span`,{class:`line-number`},`81`),e(`br`),e(`span`,{class:`line-number`},`82`),e(`br`),e(`span`,{class:`line-number`},`83`),e(`br`),e(`span`,{class:`line-number`},`84`),e(`br`),e(`span`,{class:`line-number`},`85`),e(`br`),e(`span`,{class:`line-number`},`86`),e(`br`),e(`span`,{class:`line-number`},`87`),e(`br`),e(`span`,{class:`line-number`},`88`),e(`br`),e(`span`,{class:`line-number`},`89`),e(`br`),e(`span`,{class:`line-number`},`90`),e(`br`),e(`span`,{class:`line-number`},`91`),e(`br`),e(`span`,{class:`line-number`},`92`),e(`br`),e(`span`,{class:`line-number`},`93`),e(`br`),e(`span`,{class:`line-number`},`94`),e(`br`),e(`span`,{class:`line-number`},`95`),e(`br`),e(`span`,{class:`line-number`},`96`),e(`br`),e(`span`,{class:`line-number`},`97`),e(`br`),e(`span`,{class:`line-number`},`98`),e(`br`),e(`span`,{class:`line-number`},`99`),e(`br`),e(`span`,{class:`line-number`},`100`),e(`br`),e(`span`,{class:`line-number`},`101`),e(`br`),e(`span`,{class:`line-number`},`102`),e(`br`),e(`span`,{class:`line-number`},`103`),e(`br`),e(`span`,{class:`line-number`},`104`),e(`br`),e(`span`,{class:`line-number`},`105`),e(`br`),e(`span`,{class:`line-number`},`106`),e(`br`),e(`span`,{class:`line-number`},`107`),e(`br`),e(`span`,{class:`line-number`},`108`),e(`br`),e(`span`,{class:`line-number`},`109`),e(`br`),e(`span`,{class:`line-number`},`110`),e(`br`),e(`span`,{class:`line-number`},`111`),e(`br`),e(`span`,{class:`line-number`},`112`),e(`br`),e(`span`,{class:`line-number`},`113`),e(`br`),e(`span`,{class:`line-number`},`114`),e(`br`),e(`span`,{class:`line-number`},`115`),e(`br`),e(`span`,{class:`line-number`},`116`),e(`br`),e(`span`,{class:`line-number`},`117`),e(`br`),e(`span`,{class:`line-number`},`118`),e(`br`),e(`span`,{class:`line-number`},`119`),e(`br`),e(`span`,{class:`line-number`},`120`),e(`br`),e(`span`,{class:`line-number`},`121`),e(`br`),e(`span`,{class:`line-number`},`122`),e(`br`),e(`span`,{class:`line-number`},`123`),e(`br`),e(`span`,{class:`line-number`},`124`),e(`br`),e(`span`,{class:`line-number`},`125`),e(`br`),e(`span`,{class:`line-number`},`126`),e(`br`),e(`span`,{class:`line-number`},`127`),e(`br`),e(`span`,{class:`line-number`},`128`),e(`br`)])],-1)]]),_:1})]),_:1}),l[5]||=s("",17)])}var f=n(u,[[`render`,d]]);export{l as __pageData,f as default};
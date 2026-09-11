import{H as e,Q as t,bt as n,gt as r,it as i,kt as a,nt as o,rt as s,tt as c}from"./chunks/framework.sms2Rnvf.js";import"./chunks/assets.CKUgKlCM.js";var l=JSON.parse(`{"title":"Archiving","description":"","frontmatter":{},"headers":[],"relativePath":"insights/archiving.md","filePath":"insights/archiving.md","lastUpdated":1781102819000}`),u={name:`insights/archiving.md`};function d(e,l,u,d,f,p){let m=n(`BadgePro`),h=n(`PluginTabsTab`),g=n(`PluginTabs`);return r(),c(`div`,null,[l[2]||=t(`div`,{style:{display:`none`},hidden:`true`,"aria-hidden":`true`,"data-nosnippet":``},`Are you an LLM? You can read better optimized documentation at /insights/archiving.md for this page in Markdown format`,-1),l[3]||=t(`h1`,{id:`archiving`,tabindex:`-1`},[s(`Archiving `),t(`a`,{class:`header-anchor`,href:`#archiving`,"aria-label":`Permalink to “Archiving”`},`​`)],-1),i(m),l[4]||=o("",22),i(g,null,{default:a(()=>[i(h,{label:`Generate private keys with GPG`},{default:a(()=>[...l[0]||=[t(`p`,null,[s(`Use following commands to generate an elliptic curve encryption key with `),t(`code`,null,`gpg`),s(`. Be sure to protect the key with a strong password and make backups. If you lose all your private keys, you can no longer restore archives.`)],-1),t(`div`,{class:`language- line-numbers-mode`},[t(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),t(`span`,{class:`lang`}),t(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[t(`code`,null,[t(`span`,{class:`line`},[t(`span`,null,`cat << EOF > config.txt`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Key-Type: ECDSA`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Key-Curve: nistp521`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Subkey-Type: ECDH`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Subkey-Curve: nistp521`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Subkey-Usage: encrypt`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Expire-Date: 0`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Name-Comment: SysReptor Archiving`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Name-Real: <your name>`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Name-Email: <your email>`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`EOF`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`gpg --batch --generate-key config.txt`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`gpg --list-secret-keys --keyid-format=long`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`gpg --armor --export <key-id>`)])])]),t(`div`,{class:`line-numbers-wrapper`,"aria-hidden":`true`},[t(`span`,{class:`line-number`},`1`),t(`br`),t(`span`,{class:`line-number`},`2`),t(`br`),t(`span`,{class:`line-number`},`3`),t(`br`),t(`span`,{class:`line-number`},`4`),t(`br`),t(`span`,{class:`line-number`},`5`),t(`br`),t(`span`,{class:`line-number`},`6`),t(`br`),t(`span`,{class:`line-number`},`7`),t(`br`),t(`span`,{class:`line-number`},`8`),t(`br`),t(`span`,{class:`line-number`},`9`),t(`br`),t(`span`,{class:`line-number`},`10`),t(`br`),t(`span`,{class:`line-number`},`11`),t(`br`),t(`span`,{class:`line-number`},`12`),t(`br`),t(`span`,{class:`line-number`},`13`),t(`br`),t(`span`,{class:`line-number`},`14`),t(`br`),t(`span`,{class:`line-number`},`15`),t(`br`)])],-1)]]),_:1}),i(h,{label:`Generate private keys on YubiKey 5`},{default:a(()=>[...l[1]||=[t(`p`,null,`Use the following command to generate a new Elliptic Curve key pair on a YubiKey 5. The private key is generated on the YubiKey and never leaves the device. Beware that you cannot backup the key. We recommend that you add a second key as a fallback in case you lose your YubiKey.`,-1),t(`div`,{class:`language- line-numbers-mode`},[t(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),t(`span`,{class:`lang`}),t(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[t(`code`,null,[t(`span`,{class:`line`},[t(`span`,null,`gpg --card-edit`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`                        `)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Reader ...........: Yubico YubiKey FIDO CCID 00 00`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Application ID ...: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Application type .: OpenPGP`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Version ..........: 3.4`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Manufacturer .....: Yubico`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Serial number ....: 19763721`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Name of cardholder: [not set]`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Language prefs ...: [not set]`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Salutation .......:`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`URL of public key : [not set]`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Login data .......: [not set]`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Signature PIN ....: not forced`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Key attributes ...: rsa2048 rsa2048 rsa2048`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Max. PIN lengths .: 127 127 127`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`PIN retry counter : 3 0 3`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Signature counter : 0`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`KDF setting ......: off`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`UIF setting ......: Sign=off Decrypt=off Auth=off`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Signature key ....: [none]`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Encryption key....: [none]`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Authentication key: [none]`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`General key info..: [none]`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`gpg/card> admin`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Admin commands are allowed`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`# Change Yubikey Pin (optional)`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`# Hint: default pin is 123456, default admin pin is 12345678`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`gpg/card> passwd`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`gpg: OpenPGP card no. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX detected`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`1 - change PIN`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`2 - unblock PIN`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`3 - change Admin PIN`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`4 - set the Reset Code`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Q - quit`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Your selection? 3`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`PIN changed.`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`1 - change PIN`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`2 - unblock PIN`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`3 - change Admin PIN`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`4 - set the Reset Code`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Q - quit`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Your selection? 1`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`PIN changed.`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`1 - change PIN`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`2 - unblock PIN`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`3 - change Admin PIN`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`4 - set the Reset Code`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Q - quit`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Your selection? Q`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`gpg/card> name`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Cardholder's surname: <your name>`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Cardholder's given name: <your name>`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`# Change key type to elliptic curve (optional)`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`gpg/card> key-attr`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Changing card key attribute for: Signature key`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Please select what kind of key you want:`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0(1) RSA`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0(2) ECC`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Your selection? 2`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Please select which elliptic curve you want:`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0(1) Curve 25519 *default*`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0(4) NIST P-384`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Your selection? 1`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`The card will now be re-configured to generate a key of type: ed25519`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Note: There is no guarantee that the card supports the requested`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0\xA0\xA0\xA0key type or size.  If the key generation does not succeed,`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0\xA0\xA0\xA0please check the documentation of your card to see which`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0\xA0\xA0\xA0key types and sizes are supported.`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Changing card key attribute for: Encryption key`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Please select what kind of key you want:`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0(1) RSA`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0(2) ECC`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Your selection? 2`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Please select which elliptic curve you want:`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0(1) Curve 25519 *default*`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0(4) NIST P-384`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Your selection? 1`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`The card will now be re-configured to generate a key of type: cv25519`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Changing card key attribute for: Authentication key`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Please select what kind of key you want:`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0(1) RSA`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0(2) ECC`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Your selection? 2`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Please select which elliptic curve you want:`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0(1) Curve 25519 *default*`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0(4) NIST P-384`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Your selection? 1`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`The card will now be re-configured to generate a key of type: ed25519`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`# Generate key pair`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`gpg/card> generate`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Make off-card backup of encryption key? (Y/n) n`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Please specify how long the key should be valid.`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`0 = key does not expire`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0\xA0<n>  = key expires in n days`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0<n>w = key expires in n weeks`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0<n>m = key expires in n months`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`\xA0\xA0\xA0<n>y = key expires in n years`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Key is valid for? (0) 0`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Key does not expire at all`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Is this correct? (y/N) y`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`GnuPG needs to construct a user ID to identify your key.`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Real name: <your name>`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Email address: <your email>`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Comment: SysReptor Archiving Key`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`You selected this USER-ID:`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`"<your name> (SysReptor Archiving Key) <your email>"`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`public and secret key created and signed.`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`gpg/card> quit`)]),s(`
`),t(`span`,{class:`line`},[t(`span`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`gpg --list-secret-keys --keyid-format=long`)]),s(`
`),t(`span`,{class:`line`},[t(`span`,null,`gpg --armor --export <key-id>`)])])]),t(`div`,{class:`line-numbers-wrapper`,"aria-hidden":`true`},[t(`span`,{class:`line-number`},`1`),t(`br`),t(`span`,{class:`line-number`},`2`),t(`br`),t(`span`,{class:`line-number`},`3`),t(`br`),t(`span`,{class:`line-number`},`4`),t(`br`),t(`span`,{class:`line-number`},`5`),t(`br`),t(`span`,{class:`line-number`},`6`),t(`br`),t(`span`,{class:`line-number`},`7`),t(`br`),t(`span`,{class:`line-number`},`8`),t(`br`),t(`span`,{class:`line-number`},`9`),t(`br`),t(`span`,{class:`line-number`},`10`),t(`br`),t(`span`,{class:`line-number`},`11`),t(`br`),t(`span`,{class:`line-number`},`12`),t(`br`),t(`span`,{class:`line-number`},`13`),t(`br`),t(`span`,{class:`line-number`},`14`),t(`br`),t(`span`,{class:`line-number`},`15`),t(`br`),t(`span`,{class:`line-number`},`16`),t(`br`),t(`span`,{class:`line-number`},`17`),t(`br`),t(`span`,{class:`line-number`},`18`),t(`br`),t(`span`,{class:`line-number`},`19`),t(`br`),t(`span`,{class:`line-number`},`20`),t(`br`),t(`span`,{class:`line-number`},`21`),t(`br`),t(`span`,{class:`line-number`},`22`),t(`br`),t(`span`,{class:`line-number`},`23`),t(`br`),t(`span`,{class:`line-number`},`24`),t(`br`),t(`span`,{class:`line-number`},`25`),t(`br`),t(`span`,{class:`line-number`},`26`),t(`br`),t(`span`,{class:`line-number`},`27`),t(`br`),t(`span`,{class:`line-number`},`28`),t(`br`),t(`span`,{class:`line-number`},`29`),t(`br`),t(`span`,{class:`line-number`},`30`),t(`br`),t(`span`,{class:`line-number`},`31`),t(`br`),t(`span`,{class:`line-number`},`32`),t(`br`),t(`span`,{class:`line-number`},`33`),t(`br`),t(`span`,{class:`line-number`},`34`),t(`br`),t(`span`,{class:`line-number`},`35`),t(`br`),t(`span`,{class:`line-number`},`36`),t(`br`),t(`span`,{class:`line-number`},`37`),t(`br`),t(`span`,{class:`line-number`},`38`),t(`br`),t(`span`,{class:`line-number`},`39`),t(`br`),t(`span`,{class:`line-number`},`40`),t(`br`),t(`span`,{class:`line-number`},`41`),t(`br`),t(`span`,{class:`line-number`},`42`),t(`br`),t(`span`,{class:`line-number`},`43`),t(`br`),t(`span`,{class:`line-number`},`44`),t(`br`),t(`span`,{class:`line-number`},`45`),t(`br`),t(`span`,{class:`line-number`},`46`),t(`br`),t(`span`,{class:`line-number`},`47`),t(`br`),t(`span`,{class:`line-number`},`48`),t(`br`),t(`span`,{class:`line-number`},`49`),t(`br`),t(`span`,{class:`line-number`},`50`),t(`br`),t(`span`,{class:`line-number`},`51`),t(`br`),t(`span`,{class:`line-number`},`52`),t(`br`),t(`span`,{class:`line-number`},`53`),t(`br`),t(`span`,{class:`line-number`},`54`),t(`br`),t(`span`,{class:`line-number`},`55`),t(`br`),t(`span`,{class:`line-number`},`56`),t(`br`),t(`span`,{class:`line-number`},`57`),t(`br`),t(`span`,{class:`line-number`},`58`),t(`br`),t(`span`,{class:`line-number`},`59`),t(`br`),t(`span`,{class:`line-number`},`60`),t(`br`),t(`span`,{class:`line-number`},`61`),t(`br`),t(`span`,{class:`line-number`},`62`),t(`br`),t(`span`,{class:`line-number`},`63`),t(`br`),t(`span`,{class:`line-number`},`64`),t(`br`),t(`span`,{class:`line-number`},`65`),t(`br`),t(`span`,{class:`line-number`},`66`),t(`br`),t(`span`,{class:`line-number`},`67`),t(`br`),t(`span`,{class:`line-number`},`68`),t(`br`),t(`span`,{class:`line-number`},`69`),t(`br`),t(`span`,{class:`line-number`},`70`),t(`br`),t(`span`,{class:`line-number`},`71`),t(`br`),t(`span`,{class:`line-number`},`72`),t(`br`),t(`span`,{class:`line-number`},`73`),t(`br`),t(`span`,{class:`line-number`},`74`),t(`br`),t(`span`,{class:`line-number`},`75`),t(`br`),t(`span`,{class:`line-number`},`76`),t(`br`),t(`span`,{class:`line-number`},`77`),t(`br`),t(`span`,{class:`line-number`},`78`),t(`br`),t(`span`,{class:`line-number`},`79`),t(`br`),t(`span`,{class:`line-number`},`80`),t(`br`),t(`span`,{class:`line-number`},`81`),t(`br`),t(`span`,{class:`line-number`},`82`),t(`br`),t(`span`,{class:`line-number`},`83`),t(`br`),t(`span`,{class:`line-number`},`84`),t(`br`),t(`span`,{class:`line-number`},`85`),t(`br`),t(`span`,{class:`line-number`},`86`),t(`br`),t(`span`,{class:`line-number`},`87`),t(`br`),t(`span`,{class:`line-number`},`88`),t(`br`),t(`span`,{class:`line-number`},`89`),t(`br`),t(`span`,{class:`line-number`},`90`),t(`br`),t(`span`,{class:`line-number`},`91`),t(`br`),t(`span`,{class:`line-number`},`92`),t(`br`),t(`span`,{class:`line-number`},`93`),t(`br`),t(`span`,{class:`line-number`},`94`),t(`br`),t(`span`,{class:`line-number`},`95`),t(`br`),t(`span`,{class:`line-number`},`96`),t(`br`),t(`span`,{class:`line-number`},`97`),t(`br`),t(`span`,{class:`line-number`},`98`),t(`br`),t(`span`,{class:`line-number`},`99`),t(`br`),t(`span`,{class:`line-number`},`100`),t(`br`),t(`span`,{class:`line-number`},`101`),t(`br`),t(`span`,{class:`line-number`},`102`),t(`br`),t(`span`,{class:`line-number`},`103`),t(`br`),t(`span`,{class:`line-number`},`104`),t(`br`),t(`span`,{class:`line-number`},`105`),t(`br`),t(`span`,{class:`line-number`},`106`),t(`br`),t(`span`,{class:`line-number`},`107`),t(`br`),t(`span`,{class:`line-number`},`108`),t(`br`),t(`span`,{class:`line-number`},`109`),t(`br`),t(`span`,{class:`line-number`},`110`),t(`br`),t(`span`,{class:`line-number`},`111`),t(`br`),t(`span`,{class:`line-number`},`112`),t(`br`),t(`span`,{class:`line-number`},`113`),t(`br`),t(`span`,{class:`line-number`},`114`),t(`br`),t(`span`,{class:`line-number`},`115`),t(`br`),t(`span`,{class:`line-number`},`116`),t(`br`),t(`span`,{class:`line-number`},`117`),t(`br`),t(`span`,{class:`line-number`},`118`),t(`br`),t(`span`,{class:`line-number`},`119`),t(`br`),t(`span`,{class:`line-number`},`120`),t(`br`),t(`span`,{class:`line-number`},`121`),t(`br`),t(`span`,{class:`line-number`},`122`),t(`br`),t(`span`,{class:`line-number`},`123`),t(`br`),t(`span`,{class:`line-number`},`124`),t(`br`),t(`span`,{class:`line-number`},`125`),t(`br`),t(`span`,{class:`line-number`},`126`),t(`br`),t(`span`,{class:`line-number`},`127`),t(`br`),t(`span`,{class:`line-number`},`128`),t(`br`)])],-1)]]),_:1})]),_:1}),l[5]||=o("",17)])}var f=e(u,[[`render`,d]]);export{l as __pageData,f as default};
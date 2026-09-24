import{At as e,St as t,at as n,et as r,it as i,n as a,ot as o,rt as s,vt as c}from"./chunks/framework.CoUqiBXn.js";import"./chunks/assets.D9KQ0sN9.js";var l=JSON.parse(`{"title":"Archiving","description":"","frontmatter":{},"headers":[],"relativePath":"insights/archiving.md","filePath":"insights/archiving.md","lastUpdated":1782829006000}`),u={name:`insights/archiving.md`};function d(a,l,u,d,f,p){let m=t(`BadgePro`),h=t(`PluginTabsTab`),g=t(`PluginTabs`);return c(),s(`div`,null,[l[2]||=r(`h1`,{id:`archiving`,tabindex:`-1`},[n(`Archiving `),r(`a`,{class:`header-anchor`,href:`#archiving`,"aria-label":`Permalink to “Archiving”`},`​`)],-1),o(m),l[3]||=i("",22),o(g,null,{default:e(()=>[o(h,{label:`Generate private keys with GPG`},{default:e(()=>[...l[0]||=[r(`p`,null,[n(`Use following commands to generate an elliptic curve encryption key with `),r(`code`,null,`gpg`),n(`. Be sure to protect the key with a strong password and make backups. If you lose all your private keys, you can no longer restore archives.`)],-1),r(`div`,{class:`language- line-numbers-mode`},[r(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[r(`code`,null,[r(`span`,{class:`line`},[r(`span`,null,`cat << EOF > config.txt`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Key-Type: ECDSA`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Key-Curve: nistp521`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Subkey-Type: ECDH`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Subkey-Curve: nistp521`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Subkey-Usage: encrypt`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Expire-Date: 0`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Name-Comment: SysReptor Archiving`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Name-Real: <your name>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Name-Email: <your email>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`EOF`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`gpg --batch --generate-key config.txt`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`gpg --list-secret-keys --keyid-format=long`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`gpg --armor --export <key-id>`)])])]),r(`div`,{class:`line-numbers-wrapper`,"aria-hidden":`true`},[r(`span`,{class:`line-number`},`1`),r(`br`),r(`span`,{class:`line-number`},`2`),r(`br`),r(`span`,{class:`line-number`},`3`),r(`br`),r(`span`,{class:`line-number`},`4`),r(`br`),r(`span`,{class:`line-number`},`5`),r(`br`),r(`span`,{class:`line-number`},`6`),r(`br`),r(`span`,{class:`line-number`},`7`),r(`br`),r(`span`,{class:`line-number`},`8`),r(`br`),r(`span`,{class:`line-number`},`9`),r(`br`),r(`span`,{class:`line-number`},`10`),r(`br`),r(`span`,{class:`line-number`},`11`),r(`br`),r(`span`,{class:`line-number`},`12`),r(`br`),r(`span`,{class:`line-number`},`13`),r(`br`),r(`span`,{class:`line-number`},`14`),r(`br`),r(`span`,{class:`line-number`},`15`),r(`br`)])],-1)]]),_:1}),o(h,{label:`Generate private keys on YubiKey 5`},{default:e(()=>[...l[1]||=[r(`p`,null,`Use the following command to generate a new Elliptic Curve key pair on a YubiKey 5. The private key is generated on the YubiKey and never leaves the device. Beware that you cannot backup the key. We recommend that you add a second key as a fallback in case you lose your YubiKey.`,-1),r(`div`,{class:`language- line-numbers-mode`},[r(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),r(`span`,{class:`lang`}),r(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[r(`code`,null,[r(`span`,{class:`line`},[r(`span`,null,`gpg --card-edit`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`                        `)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Reader ...........: Yubico YubiKey FIDO CCID 00 00`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Application ID ...: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Application type .: OpenPGP`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Version ..........: 3.4`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Manufacturer .....: Yubico`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Serial number ....: 19763721`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Name of cardholder: [not set]`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Language prefs ...: [not set]`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Salutation .......:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`URL of public key : [not set]`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Login data .......: [not set]`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Signature PIN ....: not forced`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Key attributes ...: rsa2048 rsa2048 rsa2048`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Max. PIN lengths .: 127 127 127`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`PIN retry counter : 3 0 3`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Signature counter : 0`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`KDF setting ......: off`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`UIF setting ......: Sign=off Decrypt=off Auth=off`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Signature key ....: [none]`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Encryption key....: [none]`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Authentication key: [none]`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`General key info..: [none]`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`gpg/card> admin`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Admin commands are allowed`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`# Change Yubikey Pin (optional)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`# Hint: default pin is 123456, default admin pin is 12345678`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`gpg/card> passwd`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`gpg: OpenPGP card no. XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX detected`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`1 - change PIN`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`2 - unblock PIN`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`3 - change Admin PIN`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`4 - set the Reset Code`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Q - quit`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Your selection? 3`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`PIN changed.`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`1 - change PIN`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`2 - unblock PIN`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`3 - change Admin PIN`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`4 - set the Reset Code`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Q - quit`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Your selection? 1`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`PIN changed.`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`1 - change PIN`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`2 - unblock PIN`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`3 - change Admin PIN`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`4 - set the Reset Code`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Q - quit`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Your selection? Q`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`gpg/card> name`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Cardholder's surname: <your name>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Cardholder's given name: <your name>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`# Change key type to elliptic curve (optional)`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`gpg/card> key-attr`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Changing card key attribute for: Signature key`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Please select what kind of key you want:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0(1) RSA`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0(2) ECC`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Your selection? 2`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Please select which elliptic curve you want:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0(1) Curve 25519 *default*`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0(4) NIST P-384`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Your selection? 1`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`The card will now be re-configured to generate a key of type: ed25519`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Note: There is no guarantee that the card supports the requested`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0\xA0\xA0\xA0key type or size.  If the key generation does not succeed,`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0\xA0\xA0\xA0please check the documentation of your card to see which`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0\xA0\xA0\xA0key types and sizes are supported.`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Changing card key attribute for: Encryption key`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Please select what kind of key you want:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0(1) RSA`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0(2) ECC`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Your selection? 2`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Please select which elliptic curve you want:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0(1) Curve 25519 *default*`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0(4) NIST P-384`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Your selection? 1`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`The card will now be re-configured to generate a key of type: cv25519`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Changing card key attribute for: Authentication key`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Please select what kind of key you want:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0(1) RSA`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0(2) ECC`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Your selection? 2`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Please select which elliptic curve you want:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0(1) Curve 25519 *default*`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0(4) NIST P-384`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Your selection? 1`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`The card will now be re-configured to generate a key of type: ed25519`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`# Generate key pair`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`gpg/card> generate`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Make off-card backup of encryption key? (Y/n) n`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Please specify how long the key should be valid.`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`0 = key does not expire`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0\xA0<n>  = key expires in n days`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0<n>w = key expires in n weeks`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0<n>m = key expires in n months`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`\xA0\xA0\xA0<n>y = key expires in n years`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Key is valid for? (0) 0`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Key does not expire at all`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Is this correct? (y/N) y`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`GnuPG needs to construct a user ID to identify your key.`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Real name: <your name>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Email address: <your email>`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Comment: SysReptor Archiving Key`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`You selected this USER-ID:`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`"<your name> (SysReptor Archiving Key) <your email>"`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`public and secret key created and signed.`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`gpg/card> quit`)]),n(`
`),r(`span`,{class:`line`},[r(`span`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`gpg --list-secret-keys --keyid-format=long`)]),n(`
`),r(`span`,{class:`line`},[r(`span`,null,`gpg --armor --export <key-id>`)])])]),r(`div`,{class:`line-numbers-wrapper`,"aria-hidden":`true`},[r(`span`,{class:`line-number`},`1`),r(`br`),r(`span`,{class:`line-number`},`2`),r(`br`),r(`span`,{class:`line-number`},`3`),r(`br`),r(`span`,{class:`line-number`},`4`),r(`br`),r(`span`,{class:`line-number`},`5`),r(`br`),r(`span`,{class:`line-number`},`6`),r(`br`),r(`span`,{class:`line-number`},`7`),r(`br`),r(`span`,{class:`line-number`},`8`),r(`br`),r(`span`,{class:`line-number`},`9`),r(`br`),r(`span`,{class:`line-number`},`10`),r(`br`),r(`span`,{class:`line-number`},`11`),r(`br`),r(`span`,{class:`line-number`},`12`),r(`br`),r(`span`,{class:`line-number`},`13`),r(`br`),r(`span`,{class:`line-number`},`14`),r(`br`),r(`span`,{class:`line-number`},`15`),r(`br`),r(`span`,{class:`line-number`},`16`),r(`br`),r(`span`,{class:`line-number`},`17`),r(`br`),r(`span`,{class:`line-number`},`18`),r(`br`),r(`span`,{class:`line-number`},`19`),r(`br`),r(`span`,{class:`line-number`},`20`),r(`br`),r(`span`,{class:`line-number`},`21`),r(`br`),r(`span`,{class:`line-number`},`22`),r(`br`),r(`span`,{class:`line-number`},`23`),r(`br`),r(`span`,{class:`line-number`},`24`),r(`br`),r(`span`,{class:`line-number`},`25`),r(`br`),r(`span`,{class:`line-number`},`26`),r(`br`),r(`span`,{class:`line-number`},`27`),r(`br`),r(`span`,{class:`line-number`},`28`),r(`br`),r(`span`,{class:`line-number`},`29`),r(`br`),r(`span`,{class:`line-number`},`30`),r(`br`),r(`span`,{class:`line-number`},`31`),r(`br`),r(`span`,{class:`line-number`},`32`),r(`br`),r(`span`,{class:`line-number`},`33`),r(`br`),r(`span`,{class:`line-number`},`34`),r(`br`),r(`span`,{class:`line-number`},`35`),r(`br`),r(`span`,{class:`line-number`},`36`),r(`br`),r(`span`,{class:`line-number`},`37`),r(`br`),r(`span`,{class:`line-number`},`38`),r(`br`),r(`span`,{class:`line-number`},`39`),r(`br`),r(`span`,{class:`line-number`},`40`),r(`br`),r(`span`,{class:`line-number`},`41`),r(`br`),r(`span`,{class:`line-number`},`42`),r(`br`),r(`span`,{class:`line-number`},`43`),r(`br`),r(`span`,{class:`line-number`},`44`),r(`br`),r(`span`,{class:`line-number`},`45`),r(`br`),r(`span`,{class:`line-number`},`46`),r(`br`),r(`span`,{class:`line-number`},`47`),r(`br`),r(`span`,{class:`line-number`},`48`),r(`br`),r(`span`,{class:`line-number`},`49`),r(`br`),r(`span`,{class:`line-number`},`50`),r(`br`),r(`span`,{class:`line-number`},`51`),r(`br`),r(`span`,{class:`line-number`},`52`),r(`br`),r(`span`,{class:`line-number`},`53`),r(`br`),r(`span`,{class:`line-number`},`54`),r(`br`),r(`span`,{class:`line-number`},`55`),r(`br`),r(`span`,{class:`line-number`},`56`),r(`br`),r(`span`,{class:`line-number`},`57`),r(`br`),r(`span`,{class:`line-number`},`58`),r(`br`),r(`span`,{class:`line-number`},`59`),r(`br`),r(`span`,{class:`line-number`},`60`),r(`br`),r(`span`,{class:`line-number`},`61`),r(`br`),r(`span`,{class:`line-number`},`62`),r(`br`),r(`span`,{class:`line-number`},`63`),r(`br`),r(`span`,{class:`line-number`},`64`),r(`br`),r(`span`,{class:`line-number`},`65`),r(`br`),r(`span`,{class:`line-number`},`66`),r(`br`),r(`span`,{class:`line-number`},`67`),r(`br`),r(`span`,{class:`line-number`},`68`),r(`br`),r(`span`,{class:`line-number`},`69`),r(`br`),r(`span`,{class:`line-number`},`70`),r(`br`),r(`span`,{class:`line-number`},`71`),r(`br`),r(`span`,{class:`line-number`},`72`),r(`br`),r(`span`,{class:`line-number`},`73`),r(`br`),r(`span`,{class:`line-number`},`74`),r(`br`),r(`span`,{class:`line-number`},`75`),r(`br`),r(`span`,{class:`line-number`},`76`),r(`br`),r(`span`,{class:`line-number`},`77`),r(`br`),r(`span`,{class:`line-number`},`78`),r(`br`),r(`span`,{class:`line-number`},`79`),r(`br`),r(`span`,{class:`line-number`},`80`),r(`br`),r(`span`,{class:`line-number`},`81`),r(`br`),r(`span`,{class:`line-number`},`82`),r(`br`),r(`span`,{class:`line-number`},`83`),r(`br`),r(`span`,{class:`line-number`},`84`),r(`br`),r(`span`,{class:`line-number`},`85`),r(`br`),r(`span`,{class:`line-number`},`86`),r(`br`),r(`span`,{class:`line-number`},`87`),r(`br`),r(`span`,{class:`line-number`},`88`),r(`br`),r(`span`,{class:`line-number`},`89`),r(`br`),r(`span`,{class:`line-number`},`90`),r(`br`),r(`span`,{class:`line-number`},`91`),r(`br`),r(`span`,{class:`line-number`},`92`),r(`br`),r(`span`,{class:`line-number`},`93`),r(`br`),r(`span`,{class:`line-number`},`94`),r(`br`),r(`span`,{class:`line-number`},`95`),r(`br`),r(`span`,{class:`line-number`},`96`),r(`br`),r(`span`,{class:`line-number`},`97`),r(`br`),r(`span`,{class:`line-number`},`98`),r(`br`),r(`span`,{class:`line-number`},`99`),r(`br`),r(`span`,{class:`line-number`},`100`),r(`br`),r(`span`,{class:`line-number`},`101`),r(`br`),r(`span`,{class:`line-number`},`102`),r(`br`),r(`span`,{class:`line-number`},`103`),r(`br`),r(`span`,{class:`line-number`},`104`),r(`br`),r(`span`,{class:`line-number`},`105`),r(`br`),r(`span`,{class:`line-number`},`106`),r(`br`),r(`span`,{class:`line-number`},`107`),r(`br`),r(`span`,{class:`line-number`},`108`),r(`br`),r(`span`,{class:`line-number`},`109`),r(`br`),r(`span`,{class:`line-number`},`110`),r(`br`),r(`span`,{class:`line-number`},`111`),r(`br`),r(`span`,{class:`line-number`},`112`),r(`br`),r(`span`,{class:`line-number`},`113`),r(`br`),r(`span`,{class:`line-number`},`114`),r(`br`),r(`span`,{class:`line-number`},`115`),r(`br`),r(`span`,{class:`line-number`},`116`),r(`br`),r(`span`,{class:`line-number`},`117`),r(`br`),r(`span`,{class:`line-number`},`118`),r(`br`),r(`span`,{class:`line-number`},`119`),r(`br`),r(`span`,{class:`line-number`},`120`),r(`br`),r(`span`,{class:`line-number`},`121`),r(`br`),r(`span`,{class:`line-number`},`122`),r(`br`),r(`span`,{class:`line-number`},`123`),r(`br`),r(`span`,{class:`line-number`},`124`),r(`br`),r(`span`,{class:`line-number`},`125`),r(`br`),r(`span`,{class:`line-number`},`126`),r(`br`),r(`span`,{class:`line-number`},`127`),r(`br`),r(`span`,{class:`line-number`},`128`),r(`br`)])],-1)]]),_:1})]),_:1}),l[4]||=i("",17)])}var f=a(u,[[`render`,d]]);export{l as __pageData,f as default};
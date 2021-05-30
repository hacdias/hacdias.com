---
title: Security Setup
date: 2021-05-28T21:47:57.89135882Z
lastmod: 2021-05-30T08:21:53.173802831Z
---

## Yubikey Setup

1. Check [yubico.com/genuine](https://www.yubico.com/genuine/)
2. Reset all modules and set PINs and PUKs
4. ~~Change OTP to long slot~~
5. Setup GPG
	1. Guide: [github.com/drduh/YubiKey-Guide](https://github.com/drduh/YubiKey-Guide)
	2. Use temporary directory `export GNUPGHOME=$(mktemp -d)`
7. Enable touch to use GPG
8. Publish GPG keys
	1. GitHub
	2. Keybase: `keybase pgp update`
10. Setup SSH
	1. Current: use GPG. See guide above.
 	2. Future: non resident, no passphrase, FIDO?
11. Add as 2FA

## Revoke (remove) old email

Private key must be present.

```shell
gpg --edit-key $KEYID
uid 1 		# select correct index
revuid 		# confirm
save
gpg --armor --export $KEYID > pubkey.txt
```

Do not forget to publish changes.

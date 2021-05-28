---
title: GPG
date: 2021-05-28T21:47:57.89135882Z
lastmod: 2021-05-28T21:51:27.203428066Z
---

## Toolkit

https://github.com/drduh/YubiKey-Guide 

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

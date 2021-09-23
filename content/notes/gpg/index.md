---
title: YubiKey and GPG Setup
date: 2021-05-28T21:47:57.89135882Z
lastmod: 2021-09-23T21:46:54.065307802Z
growth: budding
---

<div class="box green">

🌱 This post is a seedling. If it gets more mature, it may become a full article.

</div>

## ✅ Pre-flight Checks

The first thing to do after getting a new YubiKey is to make you to **install** the [YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/). This application will be key - no pun intented - to the rest of the setup.

After installing the app, it is important to **check** if the YubiKey is **genuine** as there are many fakes out there. To do so, just go to [yubico.com/genuine](https://www.yubico.com/genuine/) and touch the device. As simple as that. If it's not genuine, you should file a complaint to whatever place you bought it from.

Now, open the YubiKey Manager and **reset** all modules, as well as set **new PINs and PUKs** for all applications. Make sure to store them in a safe place and not lose them. In case you do, the only thing you can do is to reset the YubiKey.

Optionally, change OTP to the long slot so you don't get random character without wanting them.

## 🔑 GPG

Even though I have mixed feelings about the need of GPG, I still make sure to enable it and configure it correctly.

The process is quite harduous so I usually follow this guide [github.com/drduh/YubiKey-Guide](https://github.com/drduh/YubiKey-Guide). During the entire execution of the guide, I use a temporary directory:

```
export GNUPGHOME=$(mktemp -d)
```

It is also important to enable touch to use the GPG functionality. This ensures that we always give some human feedback to the device every time we need to sign/authenticate/encrypt something.

Last, but not least, I **publish** my GPG public keys to:

1. GitHub
2. Keybase via `keybase pgp update`
3. Default keyserver via `gpg --send-keys $KEYID`

## 💻 SSH

1. Setup SSH
	1. Current: use GPG. See guide above.
 	2. Future: non resident, no passphrase, FIDO?
2. Add as 2FA

## 📃 Useful Commands

### Remove Old E-mail

Life changes and e-mail addresses too. Sometimes we need to remove (revoke) an old e-mail address from a GPG key we have. To do so, the private key must be present in the keychain.

```shell
gpg --edit-key $KEYID
uid 1    # select correct index
revuid   # confirm
save
gpg --armor --export $KEYID > pubkey.txt
```

Do not forget to publish changes.

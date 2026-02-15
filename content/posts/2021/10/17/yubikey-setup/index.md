---
title: YubiKey Setup for GPG, SSH and 2FA
date: 2021-10-17T15:13:25.51356269Z
lastmod: 2022-06-04T12:48:59.992786835+02:00
categories:
  - writings
tags:
  - git
  - security
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3iilrjf7deuct
---

YubiKeys are hardware authentication devices that can be used with many applications, such as GPG, SSH and for 2 factor authentication. I have owned quite a few over the past years and recently I decided to upgrade them to the NFC version so I can use them with my mobile devices.

<!--more-->

As usual, there is quite a bit of setup after purchasing a new YubiKey and I always struggle to find the correct guide that I use. Thus, I decided to make this simple compilation of steps and guides so next time it'll be easy to find! Hope it can be useful for you too!

## ✅ Pre-flight Checks {#checks}

The first thing to do after getting a new YubiKey is to make you to **install** the [YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/). This application will be key - no pun intented - to the rest of the setup.

After installing the app, it is important to **check** if the YubiKey is **genuine** as there are many fakes out there. To do so, just go to [yubico.com/genuine](https://www.yubico.com/genuine/) and touch the device. As simple as that. If it's not genuine, you should file a complaint to whatever place you bought it from.

Now, open the YubiKey Manager and **reset** all modules, as well as set **new PINs and PUKs** for all applications. Make sure to store them in a safe place and not lose them. In case you do, the only thing you can do is to reset the YubiKey.

Optionally, change OTP to the long slot so you don't get random character without wanting them.

## 🔑 GPG {#gpg}

Even though I have mixed feelings about the need of GPG, I still make sure to enable and configure it correctly. The process is quite arduous and thus I usually follow the fantastic  [@drduh's YubiKey Guide](https://github.com/drduh/YubiKey-Guide). 

It is also important to enable touch to use the GPG functionality. This ensures that we always give some human feedback to the device every time we need to sign/authenticate/encrypt something.

Last, but not least, I **publish** my GPG public keys to:

1. GitHub
2. Keybase via `keybase pgp update`
3. Default keyserver via `gpg --send-keys $KEYID`

## 💻 SSH {#ssh}

Since 4th of July of 2022, I stopped using SSH via GPG. Now, I use non-resident, FIDO2 keys.
{.box}

Currently, I use SSH via GPG. To achieve this, I follow the guide mentioned [above](#gpg). In the future, however, I am planning to change my setup to non-resident, FIDO2 keys. As of the date of this post, not enough places support them yet to make me change.

## 🔥 2FA {#2fa}

There is not much to say in this section for now. Simply add the 2FA keys to the accounts you use. In case you're replacing an old, broken, YubiKey, don't forget to remove those!

## 📃 Useful Commands {#useful-commands}

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

### Renew

Check guide above.

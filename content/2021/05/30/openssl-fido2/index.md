---
date: 2021-05-30T10:43:44.185474883Z
tags:
- security
categories:
- micro
---

A few days ago I saw a blog post by GitHub announcing their support for [security keys in SSH operations](https://github.blog/2021-05-10-security-keys-supported-ssh-git-operations/). After a bit of search, I discovered that OpenSSL 8.2, released last year, lets us use our FIDO2 devices (such as Yubikeys) to "unlock" our SSH private keys. This way, we don't need the cumbersome GPG <-> SSH relation.

I tried it, and it was nice. I don't know if I'm going to start using it right away because not every place uses OpenSSL 8.2+ yet, but soon, very soon.

Some links:

- https://xosc.org/u2fandssh.html
- https://buttondown.email/cryptography-dispatches/archive/cryptography-dispatches-openssh-82-just-works/

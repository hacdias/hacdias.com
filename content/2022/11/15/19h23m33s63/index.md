---
date: 2022-11-15T19:23:33+01:00
tags:
- cryptography
- security
categories:
- micro
---

<abbr title="Today I learned">TIL</abbr> that the name of the PEM block of encoded public keys matters. I had a key that was using a block name `PUBLIC KEY`, where it should've been `RSA PUBLIC KEY`. Therefore, the client was rejecting the key as it was decoding it using the incorrect format. Here's [a very nice post](https://jpassing.com/2021/11/30/using-pem-to-encode-public-keys/) about this.

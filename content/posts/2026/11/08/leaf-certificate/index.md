---
title: You Can't Trust a Leaf Certificate
date: 2026-11-08T09:00:00+01:00
lastmod: 2026-11-09T15:00:00+01:00
categories:
  - writings
tags:
  - work
  - security
  - standards
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3mzrwxqa222ke
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3mzrwxqa222ke
  - https://fosstodon.org/@hacdias/117579763614223840
---

The past year I've been working a lot with certificates and trust management, which can, sometimes, yield its own fun stories and learnings. Here's one: say you're given a leaf certificate and its intermediate, but not the root. Which one do you trust? Trusting the leaf may look reasonable, since that is the certificate they sign with, but it defeats the whole purpose of a trust anchor.

<!--more-->

**Update**: I got asked on Mastodon what do I mean by "you can't trust the leaf certificate" if when you trust the root, you inherently trust the leaf. I thought I had been clear, but probably not enough. When I say "trust" in this post, I almost always mean "trust as _anchor_". So yes, you can and should trust a leaf certificate, but a leaf certificate shouldn't the the trust anchor.

For those who've worked with [X.509](https://en.wikipedia.org/wiki/X.509) certificate management, you know what the problem is, and feel free to skip the whole post. However, I wanted to write a short post on why you can't just trust a leaf certificate. X.509 works with certificate chains.

A certificate chain is a... chain of certificates where each certificate is signed by its issuer, the certificate above it. Usually, a <abbr title="Certificate Authority">CA</abbr> has a root certificate, and issues intermediate CA certificates, which in turn issue leaf certificates from there on. You trust the CA, and therefore, trust all the certificates under it.

The first problem with trusting a leaf certificate is that you can never check for its revocation. A leaf's revocation status is in a <abbr title="Certificate Revocation List">CRL</abbr> (or <abbr title="Online Certificate Status Protocol">OCSP</abbr> response) which is signed by its issuer, which can either be the root, or an intermediate. If you trust the leaf but not its issuer, you can't trust the CRL either, so you can never find out whether the leaf is revoked or not.

The second problem with trusting a leaf certificate is that leaves are made to be rotated fast. At least, fast in comparison to the root certificates. A root certificate usually lives for 10 to 25 years. A leaf certificate, on the other hand, can be much shorter, just a few months, for example. Trust would break on every single renewal, and you'd need to once again go update the trust anchors.

I think both of those reasons are strong enough to not just go about trusting a leaf certificate. One is for security reasons, the other is for practicality.

And what about the intermediate? If the intermediate is your trust anchor, both problems get better. You can check the leaf's revocation, since its CRL is signed by the intermediate, which you now trust. And intermediates usually live for years, so trust doesn't break with every leaf renewal. But the intermediate can still be revoked, and you can't check it: its revocation status is in the root's CRL, which you can't verify. If you trusted the root, you could have checked it automatically.

You can't check the root's revocation either. If it's distrusted, you have to remove it from your trust list yourself. But a root being distrusted is a much bigger deal, and it really shouldn't happen often. If it happens, [you will know](https://www.csoonline.com/article/4239634/emudhra-quits-global-tls-certificate-market-after-compromise-of-ca-signing-keys-2.html). An intermediate being revoked is also a big deal, but it's exactly the kind of thing a CRL is for. And a leaf is the key that's online and signing all the time, so it's the one most likely to be revoked, and the one you'd never hear about.

I think the bottom line is to trust the highest certificate on the chain you can. Leaf certificates are the furthest from that. If you can, get the root. If you can't, trusting the intermediate might be logical, and [the standard](https://datatracker.ietf.org/doc/html/rfc5280#section-6.1) explicitly allows it, but it's not always a good idea. Just know that you're now the one responsible for noticing when it's revoked.

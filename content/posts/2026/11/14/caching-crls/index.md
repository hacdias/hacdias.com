---
title: Caching CRLs in TypeScript
date: 2026-11-14T09:00:00+01:00
categories:
  - writings
tags:
  - security
  - programming
  - identity
  - open source
  - javascript
  - work
---

Some time ago, I had to implement revocation checks for X.509 certificates. A problem that wasn't really clear at the beginning was how heavy parsing <abbr title="Certificate Revocation Lists">CRLs</abbr> can be. This started showing when I was trying to parse some CRLs from the EU that were larger than 10MB, in TypeScript.

<!--more-->

While TypeScript may not be the ideal language to parse raw byte data and do operations on it, it was the language we were using for the whole platform and the libraries, so that's what we had to use. For the parsing itself we used Peculiar Ventures' X.509 [library](https://github.com/PeculiarVentures/x509), which has been serving us well for quite some time. The checks live in the library, [Credo](https://github.com/openwallet-foundation/credo-ts), not the product, so every Credo user gets correct checks.

Either way, every time you need to check if a certificate is revoked, you need to check its CRL, which you need to fetch. Fortunately, CRLs are not updated very often, so you can leverage that and cache them. But caching the CRL is not enough. You need to cache the right information to make the right decisions.

Before caching anything, you need to check if the CRL is actually [the right one](https://github.com/openwallet-foundation/credo-ts/blob/4b5545769576d0c9b6cc1cf2e92ef4b5c3539464/packages/core/src/modules/x509/X509RevocationService.ts#L463-L523) for the certificate: check the delta CRLs, the issuing distribution point, and that the issuer is actually allowed to sign the CRLs. For example, we don't process delta CRLs (yet), so a certificate not being in one doesn't mean it's not revoked:

```ts
if (crl.deltaCrlIndicator !== undefined) {
  return {
    usable: false,
    reason: 'CRL is a delta CRL, which is not supported for revocation checking'
  }
}
```

When caching, and considering that the parsing was the expensive part, I went for caching a verified summary of the CRL, not the raw data of the CRL. This verified summary stays cached until the CRL's `NextUpdate`. After a shorter freshness window, which you can configure (one hour by default), it is considered stale. The summary includes which serials are revoked and some other information about the CRL, which is enough to use.

This cached item should be bound to the issuer certificate's name and key. A summary is of course only reused if the issuer certificate has the same name and key it was verified against. This check is very important; otherwise you have a way around signature verification.

The name, by itself, is not enough: anyone can issue a certificate with the same subject name, but a different key. And the key, by itself, is also not enough: when verifying the CRL we also check that its issuer name matches the issuer certificate, so a summary verified for one name shouldn't be reused for another. If any of these doesn't match, the summary is ignored and the CRL is fetched, parsed and [verified again](https://github.com/openwallet-foundation/credo-ts/blob/4b5545769576d0c9b6cc1cf2e92ef4b5c3539464/packages/core/src/modules/x509/X509RevocationService.ts#L581-L636):

```ts
if (
  summary &&
  summary.issuerNameSha256 === computeIssuerNameSha256(issuerCertificate) &&
  summary.issuerPublicJwkThumbprint === computeIssuerPublicJwkThumbprint(issuerCertificate) &&
  // ... plus the cRLSign and validity window checks
) {
```

When the cache is [stale](https://github.com/openwallet-foundation/credo-ts/blob/4b5545769576d0c9b6cc1cf2e92ef4b5c3539464/packages/core/src/modules/x509/X509RevocationService.ts#L638-L722), the CRL is fetched again. If the hash of the bytes is the same, we don't parse it or verify it again. That has already been done. We only update the freshness for refetching. A same-hash refetch is cheap, since most of the work lies in the parsing.

```ts
if (staleSummary && computeCrlSha256(crlData) === staleSummary.crlSha256) {
  const refreshed: X509CrlSummary = { ...staleSummary, staleAt }
  // ... cache it again and return
}
```

At the beginning, I was just using the built-in caching module, and hadn't noticed how it was scoped: the Redis cache was per tenant, while the in-memory cache was shared by all tenants. Yes, you want to have some scoped cache per tenant for specific things. But this is global data. So I made some updates in [#2871](https://github.com/openwallet-foundation/credo-ts/pull/2871): caches are now per tenant by default, with a global scope only for public data. CRL summaries use the global scope:

```ts
await cache.get(
  agentContext,
  crlSummaryCacheKey(url),
  { scope: 'global' }
)
```

This is expensive public data, so it can safely be globally cached. A summary is still only reused for the same issuer name and key, and each tenant still chooses which issuers it trusts.

Another hiccup I hit was the question: what happens when you can't fetch the CRL? Say there's a network error, or the server is down for a moment. For this we built in three revocation check modes: `Disabled`, `SoftFail`, or `Require`. With `Require`, a server being down will fail verification, so one issuer's CRL server going down would block every verification of their credentials. With `SoftFail`, the default, an unreachable CRL is tolerated. But if we did fetch the CRL and something is wrong with it, like a bad signature or it doesn't apply to the certificate, verification fails in both modes. This is similar to how browsers have historically handled OCSP for TLS certificates, although that's changing: Chrome doesn't do online revocation checks by default and uses CRLSets instead, and Firefox has replaced most of its OCSP checks with CRLite.

This solution can be generalized to many other aspects of PKI, like public key fetching and caching. It's the same problem as verifying JWTs from issuers you don't control: cache their keys, but bind the cache to the issuer, and decide what happens when you can't reach them. In general, if it's public information that you need very often, cache it. If its parsing is expensive, then cache the parsed version, and make sure to only update it if the underlying bytes change.

---
title: Moving Away From Cloudflare
date: 2026-02-20T07:45:22.688577873+01:00
location:
  latitude: 51.44582
  longitude: 5.46157
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
  countryCode: NL
categories:
  - writings
tags:
  - dns
  - infrastructure
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3mfbj3yzlm3xn
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3mfbj3yzlm3xn
---

A few weeks ago, after going to FOSDEM, I finally decided to [move away](/2026/02/04/fosdem/) from Cloudflare. That’s something that has been on my mind for quite a while, but I guess the law of inertia was keeping me from doing it. Today I want to show how simple it can be.

<!--more-->

First things first: what did I use Cloudflare for? Not for much, actually. I had one domain registered there - not by choice -, and used it only as DNS for all other domains I have. For registering other domains, I've been using PorkBun for quite some time, so that's where I moved the only domain to.

For the DNS registry, I decided on Bunny. I have been using Bunny CDN for the media on this website for quite a while, and I knew they had a DNS service, but hadn't looked at it yet. After looking at the docs, and the interface, all looked good. They’re also European, which is also a nice added bonus in times like this.

But before all of that, I had to move the only domain registered at Cloudflare to PorkBun. That process took quite a few days, but did not take that much effort. I've always found the process of transferring domains between registrars quite... interesting. I can't put my finger on it.

For managing the DNS of my domains, I’ve been using DNSControl for quite some time. It allows me to have all the DNS configurations in a single file, and with a command, everything gets updated in all domain registrars and also in the different nameservers.

A neat feature of DNSControl is that it allows “pushing” DNS records to multiple nameservers for the same domain, creating a [shadow nameserver](https://docs.dnscontrol.org/advanced-features/nameservers?q=cl#shadow-nameservers). I started by doing this for all domains, to get a copy of all the records at Bunny:

```js
var REG_PORKBUN = NewRegistrar("porkbun")
var CLOUDFLARE = NewDnsProvider('cloudflare')
var BUNNY_DNS = NewDnsProvider("bunny_dns")

D('example.com', REG_PORKBUN, DnsProvider(CLOUDFLARE), DnsProvider(BUNNY_DNS, 0),
  A('@', '127.0.0.1', CF_PROXY_ON),
  A('www', '127.0.0.1', CF_PROXY_ON),
  // ...
)
```

A few days after, I just swapped the order of the nameservers and put Bunny first for a few domains and Cloudflare second. That meant the nameservers in the registrar for those domains would get updated to Bunny and I would indeed be using bunny. 

It went well, until I started getting some SSL errors. I had forgotten to update Caddy’s automatic SSL configuration to know I use Bunny instead of Cloudflare. After updating that, it all went well. In the meanwhile, I’ve updated a few other domains without issues. 

In the meanwhile, all the domains have been updated. A nice bonus with al of this is Bunny's interface: it is incredibly simple and easy to navigate. Cloudflare's interface is an authentic maze and I will never understand how that happened.

In the meanwhile, Cloudflare has started automatically deleting my old domains from their dashboard. I actually didn't know that was a thing, but I guess I'm fine with it. Maybe the next step is to try an European alternative to Let's Encrypt, which I recently [learned](https://janlukas.blog/micro/2026/02/2026-02-19-jniml) exists!

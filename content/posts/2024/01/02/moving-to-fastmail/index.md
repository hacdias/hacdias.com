---
title: Moving to Fastmail
date: 2024-01-02T17:54:54.613633361+01:00
categories:
  - writings
tags:
  - e mail
  - infrastructure
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3khz7ht76635c
---

Some months ago, I dabbled with the idea of changing from [Migadu](https://migadu.com/) to a more generic e-mail solution that includes official support for CalDAV and CardDAV. After quite some time procrastinating, I have finally settled on trying out [Fastmail](https://www.fastmail.com/).

<!--more-->

In the beginning, I planned on only trying out the first month of trial from Fastmail before making a full decision. Somehow, I ended up paying for a full year in advance by mistake. So here we are (I don’t regret it though).

Moving to Fastmail was quite easy. I just created an account with my domain, and then replaced my old DNS records by the following [dnscontrol](https://github.com/StackExchange/dnscontrol) configuration (replacing `your.domain` with `hacdias.com`):

```javascript
MX('@', 10, 'in1-smtp.messagingengine.com.'),
MX('@', 20, 'in2-smtp.messagingengine.com.'),
SRV('_submission._tcp', 0, 1, 587, 'smtp.fastmail.com.'),
SRV('_imap._tcp', 0, 0, 0, '.'),
SRV('_imaps._tcp', 0, 1, 993, 'imap.fastmail.com.'),
SRV('_pop3._tcp', 0, 0, 0, '.'),
SRV('_pop3s._tcp', 10, 1, 995, 'pop.fastmail.com.'),
SRV('_jmap._tcp', 1, 1, 443, 'api.fastmail.com.'),
SRV('_carddav._tcp', 0, 0, 0, '.'),
SRV('_carddavs._tcp', 0, 1, 443, 'carddav.fastmail.com.'),
SRV('_caldav._tcp', 0, 0, 0, '.'),
SRV('_caldavs._tcp', 0, 1, 443, 'caldav.fastmail.com.'),
CNAME('fm1._domainkey', 'fm1.your.domain.dkim.fmhosted.com.'),
CNAME('fm2._domainkey', 'fm2.your.domain.dkim.fmhosted.com.'),
CNAME('fm3._domainkey', 'fm3.your.domain.dkim.fmhosted.com.'),
TXT('@', 'v=spf1 include:spf.messagingengine.com ?all')
```

Fastmail provides also tools to import my e-mail from any arbitrary IMAP server, as well as other CalDAV and CardDAV servers. I just imported my Google Calendar, as well as my Google Contacts. Then, I did quite a dramatic cleanup of my contacts, reducing them to almost half.

I'm happy to say I no longer use Google Contacts, yey 🎉! This has been on my list for quite some time. Same for the calendar. I still haven't moved all the accounts to my domain's e-mail. That takes quite some time, and I'll just do it step by step.

The calendar works quite well. Collaboration-wise, it's not as simple as the big companies: Google, Apple and Microsoft. That is unfortunate, but it works nevertheless. It's not as if I have a lot of events in my personal calendar that are shared with others anyways.

There's also the masked e-mails functionality, that Tom has [written about](https://macwright.com/2023/09/24/masked-email). Personally, I am not using it yet. However, I am curious to see what kind of uses I can find for it, as it directly connects to my password manager. That's nice.

Anyways, this was just a little update. It's been a few weeks now and everything seems to be fine. Very happy I moved my calendar and contacts out of Google. Hopefully, I will manage to move all accounts to e-mail addresses at my own domain.

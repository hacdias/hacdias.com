---
title: Trying Out OVPay With Hermes and HTM
date: 2022-11-04T21:10:23.500844088+01:00
lastmod: 2022-11-05T08:36:49.865887742+01:00
categories:
  - writings
tags:
  - infrastructure
  - transit
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3jgpeozcflgln
---

The Netherlands 🇳🇱 is testing a new payment system for the public transit called [OVPay](https://ovpay.nl/) 💳. The gist is that you'll be able to simply check-in and check-out from buses, trams, trains, and every other kind of transit with your debit or credit card, without needing to either buy a ticket, or have an OV-chipkaart (the public transit card).

<!--more-->

If you know me, it's possible that you know that I have a thing for everything related to public transit, payment methods and just facilitating the usage of payment systems. Therefore, it probably doesn't surprise you that I've been an avid follower of all news regarding this new payment system for the public transit.

An interesting thing about the Dutch transit system is that it is all integrated under the same payment system, now known as OV-chipkaart. The OV-chipkaart works in all public transit across the entire country and using it, even without a subscription, lets you travel by public transit with cheaper fares than if you were to buy a ticket in the bus, or tram.

With the introduction of OVPay, anyone can just check-in and check-out of the public transit using their bank card and be charged the same fare as they would with an OV-chipkaart. The system doesn't work with subscriptions yet, but it is being worked on. In addition, you can also just check-in with your phone, with Apple Pay or Google Pay, for example.

The way the system works is that when you check-in, a pre-authorization on your bank card is done. Then, some time after midnight, the system charges you with the right amount that you spent during the day. So far, so good. Since a few operators already support the method, I decided to try, of course.

Please note, before we continue, that each operator has to implement the new system on their machines. Therefore, implementations, and more importantly, performance, may vary... wildly as we will see. My experiences concern [Hermes 🚍](https://www.hermes.nl/nl/) (or Bravo), which runs the buses in Eindhoven and in the Noord-Brabant region in general, as well as with the [HTM 🚃](https://www.htm.nl/) trams in Den Haag and surroundings.

I've tried to use my bank card to pay in the buses 🚍 from Hermes multiple times since the beginning of last month. Sometimes it works, sometimes it doesn't work. Sometimes the buses have the system disabled for no explainable reason. When it works, it is extremely slow to give feedback. Even the OV-chipkaart check-in/out feedback got immensely slowed down with whatever implementation Hermes did.

The other day, the check-in and check-out seemingly worked, but then my bank rejected the transaction when the system charged me. I contacted the bank and they have no idea why the transaction was declined, which is weird: they are the bank, they are supposed to know what happened to the transactions going through the bank. I contacted OVPay support and they said the system says it's paid: but it clearly isn't. When I check the [travel history](https://reisoverzicht.ovpay.nl/) with the payment reference and value, I get the following error:

> ⚠️ The combination of the reference number and the amount is incorrect. Try again.

Something went wrong, and no one knows exactly what went wrong. And so I thought that OVPay was condemned. But little did I know that other operators actually have a well working implementation. Today I went to Den Haag for some bureocracy and I used the trams 🚃 from HTM. Check-in and checking-out was a breeze with Apple Pay and the feedback from the terminals was extremely fast, almost as fast as using the OV-chipkaart. Let's just see if I get correctly charged tonight. I now have good hopes for the system.

With this mixed experiences, I have a main question 🤔: why does each operator has to implement their own software, if the hardware they use for the terminals is sometimes the same? Besides, the payment goes through the same system. It is clear that it can be well implemented and performant.

**Update**: I was correctly charged without any problems. I can then say that HTM provided the most flawless experience with OVPay so far. I hope the remaining operators that I did not test also work this smoothly, and that Hermes improves their implementation.

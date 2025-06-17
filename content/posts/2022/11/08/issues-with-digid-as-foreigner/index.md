---
title: Issues With DigiD as a Foreigner
date: 2022-11-08T23:50:15.28719991+01:00
categories:
  - writings
tags:
  - bureaucracy
  - government
  - infrastructure
---

When Wouter [published](https://brainbaking.com/post/2022/11/governmental-infrastructure-website-design-mistakes/) an article on government website design mistakes, I immediately thought: I have a very similar topic in the back of my mind that has bothered me since I moved to The Netherlands. It is not related to a website per se, but to a service that is used to login into many public services: the [DigiD](https://www.digid.nl/).

<!--more-->

DigiD is a Dutch identity management platform that allows residents of The Netherlands to access and perform a variety of things online, from filling taxes, to logging into a healthcare provider portal. The system is directly tied to the BSN (_burgerservicenummer_), which is the Personal Identification Number.

In recent years, the DigiD has implemented an optional feature: the ID check. The ID check adds a new layer of security on top of the current application. With the ID check, the website on which you are logging in knows that you performed an identification check and that the person logging in is... indeed... you.

The problem arrives when it comes to perform the ID check: it can only be done with... let me let you guess... Dutch identification documents, which includes the Dutch ID card, the Dutch passport and a Dutch drivers license. Resident permit cards - only given to non-EU citizens - are not valid Dutch identification documents and therefore not valid.

More and more online services are requiring the ID check to be performed to log in, specially when it comes to more sensitive data such as healthcare. Without ID check, I'm not allowed to login and access these services.

In such a small country with such a high [percentage of immigrants](https://www.cbs.nl/en-gb/dossier/migration-and-integration/how-many-people-immigrate-to-the-netherlands-), I cannot understand why a solution for this issue hasn't been implemented. I exchanged my Portuguese drivers license for a Dutch one just for this functionality, as it became a bother.

For this problem, I see two possible solutions, one more effective than the other: **(1)** allow ID check through any document that conforms to the [ICAO Document 9303](https://en.wikipedia.org/wiki/Machine-readable_passport) specification; or **(2)** give every resident a resident permit card that can be used for ID check. Let's quickly analyse both.

## ICAO Document 9303

The ICAO Document 9303 specification regulates travel documents, most specifically passports. The vast majority of passports nowadays conforms to the specification, which means they include NFC functionality that, in combination with the MRZ (Machine Readable Zone) data, allows to retrieve a bunch of information about the owner of the passport.

In addition, in 2019, the EU approved a new regulation, [2019/1157](https://eur-lex.europa.eu/eli/reg/2019/1157/oj), in order to standardize the look and feel of all identity cards of all EU member states. In this regulation, it states that all new ID cards in the EU must conform to the ICAO Document 9303 standard - Portugal hasn't yet 😭. From 2031 on, all EU ID cards that do not conform with the regulation are invalid.

![Dutch ID Card With New EU Regulation](cdn:/121f64299ad03a7c342bffa231a583caa41d45a8c6bdf8d19cb0c137ee80ad76)
{style="max-width: 25rem"}

DigiD could let people use ID cards or passports that conform to the ICAO Document 9303 standard for the ID check. However, I understand the problem: the Dutch government would need to keep the number of the ID card or passport registred somewhere in order to know that that ID card is owned by the right person. That is trivial for Dutch citizens as they are in the system. The alternative could be to only check the name and birthday.

Either way, this could still reject people from countries whose ID cards or passports do not conform to the newest standards; or require EU citizens from countries that did not implement the regulation, such as Portugal, to get a passport. However, I think that would be the minority.

## Residence Permit Card

The alternative to the above solution would be to do something similar to what Belgium does: issue every non-national a residence permit card. Even if they are from the EU. And then let this card be used for ID check and online authentication, just like a regular Dutch citizen ID card.

![Belgian Residence Permit for EU Nationals](cdn:/3899f86140817e7bcbdd4bee580c9ee0e83074ad5fd1a7c42efc78c99a177a31)
{style="max-width: 25rem"}

In addition, this card would also need to be allowed for ID check. Currently, residence permit cards are not valid for performing the ID check in the DigiD app.

This would solve the problem for everyone living in the Netherlands that have to do the ID check to access some online services, without being forced to get a drivers license, or exchange the one they have. The only other option is to become a Dutch citizen, which is definitely not a reasonable solution either.

The problem I see with this approach is the possible plastic waste created with the issuance of cards, specially in a country with so many immigrants. But we're already issued so many cards in the Netherlands - even for trash disposal -, what about combining some of them?

---

I have reached out to the DigiD team in the past by e-mail with both of this suggestions. I really do not know if they'll ever implement any of them, but I hope so. Right now, immigrants are barred from using many online services because they don't possess a Dutch ID document.

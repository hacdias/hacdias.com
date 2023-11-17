---
title: An Update to My DigiD Saga and Driving Licenses
date: 2023-07-03T16:38:06+02:00
lastmod: 2023-07-07T10:35:49+01:00
tags:
  - government
  - infrastructure
syndications:
  - https://fosstodon.org/@hacdias/110651139023843183
---

Some time ago, I [wrote an article](/2022/11/08/issues-with-digid-as-foreigner/) where I essentially complained and layed out the issues I have had with the Dutch digital identification (DigiD) system as a foreigner. In the meanwhile, there have been a few minor updates, and some other things that changed in my understanding. Hence, this new article.

<!--more-->

Before going into what's new, let's first review a point I did not touch the last time, or that I wasn't as clear as I would've hoped. When logging in with DigiD, there are four different [trust levels](https://logius.nl/domeinen/toegang/digid/hoe-werkt-het) you can login as. These trust levels depend on *how* you perform the login:

- **Basic** (*Basis*), if you login with a username and password.
- **Medium** (*Midden*), if you login with the DigiD app, or username and password with 2FA.
- **Substantial** (*Substantieel*), if you login with the DigiD app and you have performed the ID-check. The ID-check is a one-time operation that can be done by scanning a Dutch passport, Dutch identity card, or a Dutch driving license.
- **High** (*Hoog*), if you login with a Dutch identity card or Dutch driving license via the DigiD app. This involves scanning the document with NFC and introducing the PIN that is associated with the physical document.

On my previous article, I criticized the fact that foreigners could only reach the the *Substantial* level if they would have gotten a driving license, or decided to become Dutch, which in most cases involves resigning your current citizenship. And that is still true. However, at the time it was even impossible to reach the *High* level.

<style>.sfig { max-width: 25rem }</style>

![Dutch Driving License ([RDW](https://rdw.nl/))](https://cdn.hacdias.com/media/2023-07-dutch-driving-license.jpg?class=sfig)

Since July 1st, a Dutch driving license can also [be used](https://www.logius.nl/actueel/inloggen-met-rijbewijs-vanaf-morgen-ook-mogelijk-digid-app) to login with *High* level. Driving licenses issued since 2018 have been equipped with a login module, but only know they are enabled. It's quite interesting that such thing has been in the document for 5 years but only now it is being used. The ID card only included the functionality since 2021, but it was readily available with DigiD.

Either way, for those who received the license before July 1st, you will not have received a PIN letter. You can request one in the [Mijn DigiD](https://mijn.digid.nl/) portal and paying 3.50 € to the RDW. If you're getting a new license after this date, it will be free.

The gist is that it is no longer impossible for foreigners living in The Netherlands to login with the highest level of trust, which is required by some, yet few, services such as in the healthcare industry. Nevertheless, it is still not good enough. It is no longer impossible, but you still only have two options: **(1)** become Dutch, or **(2)** learn how to drive.

I do personally own a Dutch driving license, even though I don't drive nowadays. The only reason why I have a Dutch one was because I decided to go through the hurdle of exchanging my Portuguese one by a Dutch one in order to perform the ID-check.

I have now "ordered" my PIN letter, so that I can activate the login functionality of my driving license. According to the e-mail, it should arrive somewhere this week. Let's see if it works. I will post an update here if it turns out not to.

<div class='box' id='update'>

**2023-07-06**: received my activation letter from DigiD. Tried activating it using my phone only. Went to [Mijn DigiD](https://mijn.digid.nl/), logged in, pressed to activate the login via the driving license, it moved to the app. In the app, I scanned the driving license, put the temporary pin, added a new pin, confirmed. All seem well. But it wasn't: the system still said that login via driving license wasn't enabled.

I tried again, but now my app always said "activation necessary" every time I put the PIN of the license. So what happened was that the physical driving license got enabled for log in, but the online system of DigiD (or RDW) did not know.

**2023-07-07**: now, I tried again using the computer. Opened [Mijn DigiD](https://mijn.digid.nl/), followed the same steps. At some point I got moved to the app on my phone to continue. Here, I scanned the driving license, inserted the new PIN I had set the previous day, and it errored with something like "activation not successful". At the same time, the page on my computer changed to "login with driving license enabled".

Something wrong definitely happened during the activation process. I want to blame it on trying to do it all on the phone, and then the webpage not reloading successfully the first time on the browser while I was finishing the activation on the app. However, it's just a browser. It should've redirected, so *maybe* something else went wrong too. Nevertheless, it now works well!

</div>

In conclusion, progress has been made. It is now "possible" for foreigners to access all trust levels of DigiD authentication. However, that still requires getting a driving license. That is not possible for everyone, for different reasons, making the service not fully accessible. I still hope that some kind of alternative is made in future, such as using the residence permit, as I [suggested before](/2022/11/08/issues-with-digid-as-foreigner/).

---
title: A Small Update On My OVPay Experiment
date: 2022-12-03T19:33:52.155473488+01:00
categories:
  - writings
tags:
  - infrastructure
  - transit
---

In the beginning of last month, I [wrote](/2022/11/04/trying-out-ovpay) a post about trying out the new payment system for public transit in The Netherlands, OVPay 💳. On it, I mentioned quite a few things regarding different operators. It's been around a month, and I've had the opportunity to travel again on Hermes 🚍 buses using OVPay. Here's the update.

<!--more-->

On the last post, I mentioned that one of the payments failed to be debited from my account. It finally got debited from my account successfully. However, the transaction is marked with a different type from the others. Instead of "Pinbetaling" (card payment), it says "Overschrijving" (transfer). I'm not exactly sure how this things are processed on the backend, but there's clearly a difference that is likely related to the first payment failing.

<figure class='right' style='max-width: 15rem'>
  <video controls>
    <source src="https://media.hacdias.com/2022-12-03-update-on-ovpay-experiment.mp4" type="video/mp4">
  </video>
</figure>

As I mentioned in the beginning, I had more opportunities to travel with Hermes 🚍 over the last month. I noticed that validators in some buses behave differently from others. In some buses, the validator only says "Geaccepteerd" (accepted); while on others it actually says "In" or "Uit". Almost as it the former buses did not really know if the card was checking-in or checking-out of the bus. Perhaps there are different iterations of the validator software running on different buses. The validators themselves seem to be the same hardware.

In the last post, I also mentioned the validation was super slow on the Hermes 🚍 buses, even with the known OV-Chipkaart. On the video you can see the feedback loop on the validators on the buses. The time it takes between my phone touching the validator and it reacting is quite high. It may not look like a lot, but if there's a queue of people to leave a bus, you'll understand. On the other hand, HTM Trams 🚋 are virtually [instant](https://www.youtube.com/watch?v=436t5ET4i9k&t=24s). However, I also noticed that some buses are faster than others, perhaps related to possible different software versions running in different buses.

In other news, OVPay has been expanded to Amsterdam as of last week, with support in the Metro 🚇, Buses 🚍 and Trams 🚋. I haven't had the opportunity to try it out yet, but next time I'm in Amsterdam, I'll do it. So far, Hermes seems to be the odd one with the slow implementation when validating cards, which has been creating long queues and delays.

Excited to see this project succeed in the near future!

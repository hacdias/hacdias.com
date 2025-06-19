---
title: 'RunGap: An End to Bosch''s Malformed FIT Files'
date: 2024-06-21T08:10:28+02:00
categories:
  - writings
tags:
  - cycling
  - data
  - reviews
  - sports
---

A few months ago I [wrote](/2023/10/11/processing-bosch-ebike-flow-fit-files/) about the struggles I was having with Bosch's eBike Flow app and their FIT files. Since then, I have been using my script to clean up the files and later import with HealthFit. I have now just found a better solution though.

<!--more-->

Just like I mentioned in my old post, importing the cleaned up files produced by my script would still lead to some weird issues regarding the quantity of calories. The HealthFit app seemed to change it depending on the pauses, as if the calories amount were for the total activity time instead of for the ride time. This bothered me, but I never did anything about it.

A few days ago, however, I was just casually navigating the web and came across another app: [RunGap](https://www.rungap.com/). I thought immediately that RunGap would be some sort of running app, due to their name. But no: they're a "workout data manager for iOS".

So I tried. I went to Bosch's app, exported a FIT file and directly imported it into the RunGap app without running it through my script. Somehow, the app did the right job: it imported all the information that was contained into the FIT file. And then I can still edit the workout and add the number of calories, which Bosch doesn't include in their export.

**2024-06-25**: well, it seems I reached a conclusion too fast. The app is very good, and I will definitely use it to import .FIT files instead of HealthFit due to it fixing the problem with the calories. However, it does not fix the issue of the original files from the Bosch Flow app not having the pauses correctly marked. Therefore, I still need to run it through my script before importing it.
{.box #update}

I was still hesitating, but I decided to try exporting it to Apple Health. I did it. And... it just worked? All the information from my bike ride was now correctly available in the Apple Health and Fitness apps. No need for my script, no need to go to a computer to "fix" the file.

<figure>

<div class='fg' style='grid-template-columns: repeat(3, 1fr);'>

![](image:2024-06-21-flow-via-rungap-01 "")

![](image:2024-06-21-flow-via-rungap-02 "")

![](image:2024-06-21-flow-via-rungap-03 "")

</div>

<figcaption>Flow ride imported with RunGap</figcaption>

</figure>

I just went ahead, deleted all the data from HealthFit and re-imported every single "workout" via RunGap. I actually imported more workouts than I had before, because now I did not need to go through the hassle of exporting to my laptop, send to my phone and then import.

Just like I said the last time, this is definitely a "first world problem", but I'm glad I found an app that can do this for me. This app can also do a lot other things, including synchronizing with around 30 services, exporting and importing from different places, etc. It seems to work quite well, so I would definitely recommend it.

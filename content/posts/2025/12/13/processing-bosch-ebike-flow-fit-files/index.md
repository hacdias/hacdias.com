---
title: "An Update on Processing Bosch's eBike Flow FIT Files"
date: 2025-12-13T10:04:18+01:00
categories:
- writings
tags:
  - cycling
  - sports
  - tracking
---

Over two years ago, I wrote [an article](/2023/10/11/processing-bosch-ebike-flow-fit-files/) where I laid out a few issues with Bosch's eBike Flow app. The first one being that their Apple Health integration is lacking, and does not synchronize information about power and cadence. The second was that their exported FIT files are malformed and cannot be properly imported anywhere. Sadly, it's still the case.

<!--more-->

At the time, I wrote a script to fix the FIT files and consolidate the records, and I've been using it since. At first, I was importing the workouts with HealthFit, but then I noticed there was something weird happening with the display of total calories, so I ended up [using RunGap](/2024/06/21/rungap-an-end-to-boschs-malformed-fit-files/). It seemed like that when importing it with HealthFit, the number of calories was being greatly reduced if there was pauses, but not with RunGap.

Both of these are paid apps. I like supporting small individual developers, and paying for a yearly subscription if their app brings good value. And I pay for both of these. However, RunGap's yearly package has just expired, and I thought: it's a bit too expensive *just* for importing files. So I decided to take another stab at this, and try to solve the problem.

## Comparing RunGap and HealthFit

After some back and forth with the developer of HealthFit, I started comparing the Active Energy data entries of both apps in Apple Health. It seemed that HealthFit also registered the correct amount of calories. But for some reason, when looking at the workout, it was as if they disappeared, proportionally to the amount of pause vs. active time.

The problem? The total of calories I get from Bosch are just during the moving parts, they [do not include pauses](https://help.bosch-ebike.com/ca/help-center/ebw-flowapp-activitytracking/asset-asf-01050). So I did not want the pauses to be counting. With that being said, I also started looking at the Workout data entries. And here is when something clicked: RunGap added more than a single segment, while HealthFit added a single segment.

In my script, I'm being a bit lazy and creating a single "lap" for the whole workout. The original FIT file from Bosch only had a single lap, so I assumed that's correct. Well, it can be correct, in some cases. However, if I want to distribute the calories correctly through the moving parts of the workout, I actually need to define more laps.

You see, from what I understand, RunGap automatically creates segments for all the moving parts of the workout, while HealthFit trusts the FIT file more. Because my generated FIT files only contained a single segment, the total amount of calories was being applied to the whole workout time, including pauses.

## Fixing The Workaround

To solve this, I changed the script to generate laps, separating moving and paused segments in the workout. The tricky part was distributing the calories: Bosch only gives you a total amount of calories and they do not even include it in the FIT file.

Knowing that their calory count only applies to the moving segments, I created laps for the pauses with 0 calories. The only thing left was distributing the calories in a way that would make sense. One would think proportionally splitting according to the time would be fine. And it is *fine*, but it's likely not correct.

I tried to approximate and use a weighted average of the power to proportionally distribute the calories through the moving segments. I think this ends up being a better estimate than just blindly distributing the calories based on time proportion. It's still far from perfect, and I think Bosch should just fix their app, but well.

I've also converted the tool to be a simple [one page website](https://hacdias.github.io/flowfit/), which converts the file in the browser. Garmin has recently updated their [JavaScript SDK](https://github.com/garmin/fit-javascript-sdk), which can now encode files. This makes it easier to use on the go, without needing for a computer. The code is available in [this repo](https://github.com/hacdias/flowfit).

I know it solves a very niche problem, but it was just one of those things that was annoying me. I'm happy I've figured out a way around Bosch's own issues, but, if you're someone at Bosch reading this: could you please either fix the Apple Health integration, or the exported FIT files? Or better: both?

---
title: Processing Bosch's eBike Flow FIT Files
date: 2023-10-11T15:37:37+02:00
categories:
  - articles
tags:
  - cycling
syndications:
  - https://fosstodon.org/@hacdias/111218079645039127
---

I have recently acquired a new - and my first - electric bike from Gazelle, a "staple" Dutch brand, and it is powered by a [Bosch motor](https://www.bosch-ebike.com/). Bosch has made this app, [eBike Flow](https://www.bosch-ebike.com/en/products/ebike-flow-app), which allows you to connect to the bike and use it to track your complete bike ride. In this article, I am going to go over some of the issues I have had and how I have been trying to solve them.

<!--more-->

## The Apple Health Problem

First, let's look at the problem. If you're an Apple Watch user, you know that you can simply track your bike rides with it. If you do so, you get some neat information and graphs: heart rate, elevation, and speed thorough your ride. With watchOS 10, you can also pair power meters to add information regarding your cycling power and cadence.

The eBike Flow app is neatly integrated with the Apple Watch and Apple Health. After tracking a ride, it synchronizes the workout to Apple Health and includes almost all information. The keyword is *almost*. It is missing the speed graph during the ride, as well as power and cadence. It includes the average speed though!

<div class='fw fg' style='grid-template-columns: repeat(2, 1fr);'>

<figure>
<div class='fg' style='grid-template-columns: repeat(2, 1fr);'>

![](cdn:/2023-10-watch-tracked-ride-01 "")

![](cdn:/2023-10-watch-tracked-ride-02 "")

</div>
<figcaption>Apple Watch ride</figcaption>
</figure>

<figure>
<div class='fg' style='grid-template-columns: repeat(2, 1fr);'>

![](cdn:/2023-10-flow-tracked-ride-01 "")

![](cdn:/2023-10-flow-tracked-ride-02 "")

</div>
<figcaption>Flow ride, missing speed, power or cadence plots</figcaption>
</figure>

</div>

I am not giving them a hard time for the lack of power and cadence: after all, it's a new feature of iOS 17, released very recently. However, the lack of the speed information during the ride coupled with having the average speed is a bit odd. So, the issue here is: eBike Flow app has all information, but does not synchronize speed, power and cadence during the ride with Apple Health.

## Exporting The Data From Flow

The eBike Flow app allows me to export my ride data as both a [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) file, and as a [FIT](https://developer.garmin.com/fit/protocol/) file. The GPX file only contains GPS information, so it is not very interesting. The FIT (Flexible and Interoperable Data Transfer) file, however, can theoretically include everything related to the workout activity.

I exported the FIT file, then imported it via [HealthFit](https://apps.apple.com/us/app/healthfit/id1202650514). HealthFit is an iOS ap which allows me to import FIT files to add to Apple Health. That's where I noticed something else: it did not include calories, or elevation information.

<figure class='fw'>

<div class='fg' style='grid-template-columns: repeat(3, 1fr);'>

![](cdn:/2023-10-flow-via-healthfit-ride-01 "")

![](cdn:/2023-10-flow-via-healthfit-ride-02 "")

![](cdn:/2023-10-flow-via-healthfit-ride-03 "")

</div>

<figcaption>Flow ride imported with HealthFit, missing elevation information, pauses are not accounted for</figcaption>

</figure>

After some back and forth with the creator of HealthFit, it seems that the FIT file from the Bosch's Flow includes elevation information, but is not properly formatted. I also tried importing it into Garmin's website, the creator the FIT format, and it failed. I thought that was enough validation to show me that the file is not correctly encoded.

## Analyzing Flow's FIT File

The FIT format is binary. Therefore, it cannot be read by an ordinary text editor. After some searching, I found a Java based [tool](https://developer.garmin.com/fit/fitcsvtool/) in Garmin's website that allows me to convert a FIT file into a CSV for further inspection. Converting the file is relatively easy (`java -jar FitCSVTool.jar flow-export.csv`) and now that I have the file, let's illustrate one of the issues with the following excerpt:

```csv
Definition,0,record,timestamp,1,,position_lat,1,,position_long,1,,,,,,,,,,,,,,,,,
Data,0,record,timestamp,"1061488539",s,position_lat,"613609791",semicircles,position_long,"65074199",semicircles,,,,,,,,,,,,,,,,
Definition,0,record,timestamp,1,,altitude,1,,cadence,1,,distance,1,,speed,1,,power,1,,,,,,,,
Data,0,record,timestamp,"1061488539",s,altitude,"17.200000000000045",m,cadence,"65",rpm,distance,"2214.0",m,speed,"5.303",m/s,power,"82",watts,enhanced_altitude,"17.200000000000045",m,enhanced_speed,"5.303",m/s,
Definition,0,record,timestamp,1,,position_lat,1,,position_long,1,,,,,,,,,,,,,,,,,
Data,0,record,timestamp,"1061488540",s,position_lat,"613609244",semicircles,position_long,"65074529",semicircles,,,,,,,,,,,,,,,,
Definition,0,record,timestamp,1,,altitude,1,,distance,1,,speed,1,,power,1,,,,,,,,,,,
Data,0,record,timestamp,"1061488540",s,altitude,"17.200000000000045",m,distance,"2220.0",m,speed,"5.286",m/s,power,"82",watts,enhanced_altitude,"17.200000000000045",m,enhanced_speed,"5.286",m/s,,,,
```

In the CSV, there are two lines per entry. A line with the definition of the columns of the entry, and then the line with the data. You might've spotted it already: there are two entries per timestamp. That's where the first issue is: there should only be one entry combining the latitude, longitude, altitude, cadence and power.

It is especially odd that the altitude is separate from the remaining geographical information. This is why when I import the FIT file using HealthFit, it does not display the altitude information. However, that is not the only issue.

The FIT file is also missing information regarding calories and pauses. By not having the pauses, the average speed information that I get once I import the file is wrong, since it counts all the pauses as 0 km/h. This information is also not in the GPX file. However, the GPX file does indeed combine altitude, longitude and latitude in a single entry.

The other issue is that the file does not contain an `activity` entry at the end. This is the key issue when importing it into Garmin's website. A FIT file can be a description of a workout, but there are other functionalities too. That is why it is key to include the `activity` entry at the end.

## I Tried To Fix It

The [SDK](https://developer.garmin.com/fit/download/) is available in a couple languages. I wanted to use Python or Go. Unfortunately, Go is non-existent, and Python was read-only. I had been dabbling a bit with Swift over the past days, so I tried that one. It works fine, but since it is also related to SwiftUI and Apple-y things, I had to use XCode.

So I wrote a script and the first step was to just combine the duplicated entries of the same timestamp. That was reasonably easy. If I import it through HealthFit, it now displays all information, except for the 0 kcal, and wrong time and average speed information due to lack of pauses. It also cannot be imported into Garmin's website due to the lack of an activity entry.

I programmatically added an activity entry at the end considering the information contained in the file. In this activity entry, I also added the calories information that I saw in the Flow app. Eureka! It can now be successfully imported into Garmin's website, which means the file should be valid. Nice! You can find the code [on GitHub](https://github.com/hacdias/flowfit).

Then, I carefully analyzed the original FIT file in order to try to understand if and where and how I should put pauses. I compared to the original map in Flow's app, as well as the one it added to Apple Health. I could not figure out how the pauses worked. I tried to add some based on the lack of entries between timestamps, but that did not seem to be entirely correct. Also, the calories were somehow changing based on the pauses. I think it counted the calories for the entire time, and then it would reduce the ones from the pauses. Not sure. I think it's my script creates a good approximation of the real thing, but there are still some odd things. I also think some of the odd things come from HealthFit.

<figure class='fw'>

<div class='fg' style='grid-template-columns: repeat(3, 1fr);'>

![](cdn:/2023-10-flow-cleaned-01 "")

![](cdn:/2023-10-flow-cleaned-02 "")

![](cdn:/2023-10-flow-cleaned-03 "")

</div>

<figcaption>Flow ride FIT cleaned by my script, then imported via HealthFit</figcaption>

</figure>

## In Summary

All the information for the bike ride exists. However, it is scattered across different file formats and apps. The Apple Health integration is lacking the speed, power and cadence thorough the ride. The FIT export is missing the energy (calories), the activity entry, and the pauses. In addition, the geographic data should be included in a single entry, not multiple.

In the end, I contacted Bosch by e-mail. I tried to make it all clear, with screenshots to show everything that I mentioned. They replied, informing me that they forwarded the information to the developers in Germany. Considering the amount of updates the app has had over the past months, including improvements to the export feature, I am hopeful that Bosch will either fix their FIT file, or their Apple Health integration. Hopefully both, but I am happy with just one of them.

All in all, this is definitely a "first world problem". But I definitely dived a bit into this file format which I knew nothing about. I need to do some longer rides and use the Flow app with longer pauses to actually test the script more thoroughly. Let's hope that Bosch fixes it though! Also, if I said something wrong, please let me know.

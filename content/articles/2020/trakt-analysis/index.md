---
title: Analyzing My Shows and Movie Habits
description: I now have a watch log again and decided to analyse 2019's habits of TV shows and movie watching.
date: 2020-02-22T22:05:00Z
tags:
  - meta
  - reflection
  - year-in-popcorn
syndications:
  - https://twitter.com/hacdias/status/1231484792027348994
---

Today, I decided to readd a watches page, but this time it isn't built from hundreds of
posts, but from the data that I get directly from Trakt's [API](https://trakt.docs.apiary.io/).
I built a small tool called [`trakt-collector`](https://github.com/hacdias/silos-collector/tree/a7aef3a1bf6693361eec147380b55dccc2ffe1c5/src/trakt) used
to collect your history and save it in JSON format.

<!--more-->

<style>
.small-svg,
.smaller-svg {
  text-align: center;
}
  
.small-svg img {
  max-height: 25rem;
}

.smaller-svg img {
  max-height: 15rem;
}

.color {
  background-color: var(--color);
  height: 0.8rem; width: 0.8rem;
  display: inline-block;
  border: 1px solid var(--dark-gray);
  margin-right: 0.2rem;
  margin-bottom: -0.1rem
}
</style>

The Trakt API gives you so much information about every episode and every movie: from the title,
to the rating, description, channel where it aired, when it aired first, the countries where it aired,
etc, etc. I don't actually need all that information, but it's never too much to store.

So, and about the [watches](/watches) page: I decided to build a simple thing. It's an exhaustive list,
sorted by watch date with the most recent on top. I decided to put the series before the movies because
it's what gets updated more.

I have a script on my server that runs every day and updates the page on this website with the new information
provided by the API. It generates a simple JSON (as you can see bellow) that is then fed to the page and the
HTML gets generated.

```json
{
  "movies": [
    {
      "title": "Airplane Mode",
      "watched": "2020-01-27T07:57:30.000Z",
      "url": "https://trakt.tv/movies/airplane-mode-2020"
    },
    {
      "title": "Murder Mystery",
      "watched": "2020-01-24T22:19:02.000Z",
      "url": "https://trakt.tv/movies/murder-mystery-2019"
    },
    // ...
  ],
  "series": [
    {
      "title": "Young Sheldon",
      "watched": "2020-02-22T14:39:07.000Z",
      "url": "https://trakt.tv/shows/young-sheldon"
    },
    {
      "title": "#CasaDoCais",
      "watched": "2020-02-20T23:54:53.000Z",
      "url": "https://trakt.tv/shows/casadocais"
    },
    // ...
  ]
}
```

Meanwhile, I thought: "what about doing some pseudo-analysis to the data I've been collecting?". After
all, Trakt's "Year in a Review" feature is for premium users, which I'm not. So I've never been able
to get yearly statistics.

I decided to use a library I discovered recently on Hacker News called [`vega-lite`](https://vega.github.io/vega-lite/)
which allows me to produce beautiful SVGs representing the data. All the code needed to produce the
figures you'll see below can be found on the [repository](https://github.com/hacdias/trakt-collector/blob/master/bin/analyse.js).

First of all, I wanted to know which genres I've been watching more. I separated shows (collections of episodes) from movies
to get an overview and this is what I got:

![](/2020/02/22/trakt-analysis/genres-general.svg?class=small-svg)

The unique shows are marked as <span class="color" style="--color: #fed330"></span> and the movies marked as <span class="color" style="--color: #3867d6"></span>. It's clear
that most of the content I watch is drama-related or comedy. Also, please note that a movie or show can be categorized
as more than one genre.

After that, I decided it would be interesting to see how's my monthly activity. In this case, I did not reduce the show's episode.
Here, I'm counting every episode as one and every movie as one.

![](/2020/02/22/trakt-analysis/monthly.svg)

It's clear that most of what I watch are TV shows, but that's normal due to their intrinsic nature. It's also interesting
to see that November and December were the months where I watched most TV shows. However, I think this might've been an exception
that happened last year. In addition, it may also be related to the schedule of the shows I watch. Most of them may be released on that time of the year.

![](/2020/02/22/trakt-analysis/weekday.svg?class=smaller-svg)

Regarding to which day of the week I usually watch more TV shows - colored with <span class="color" style="--color: #eb3b5a"></span> -, it seems it doesn't matter
much. Please note that this chart takes the sum of all episodes and movies I watched on each weekday through 2019. In opposition to TV shows, it seems that I clearly watch more movies on Saturdays and Sundays.

And... I decided to leave the most exciting graph to the end. Here's a year map where you can visualize in which days of the year I watched more media.

![](/2020/02/22/trakt-analysis/year-dist.svg)

The closer a square is to <span class="color" style="--color: #3867d6"></span>, the more episodes or movies I watched on that day. By looking
to the graph, I'd say that I watched something on about 50% of the days of the year, if not more.

This was actually a nice experiment and I will probably repeat this kind of analysis with other data.

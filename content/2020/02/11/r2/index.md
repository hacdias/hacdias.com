---
description: Replied to a post on jlelse.blog
date: 2020-02-11T13:58:19.007Z
expiryDate: 2023-06-21T08:03:10.074198+02:00
noIndex: true
categories:
- notes
context:
  name: Jan-Lukas Else
  url: https://jlelse.blog/dev/activitystreams-hugo
  content: 'I promised and people already asked, so here is the first part of the
    documentation about how I enabled ActivityPub support on my Hugo-based blog: The
    first step to enable ActivityPub support, was to get Hugo to generate ActivityStreams
    representations for posts and the ActivityPub actor. I did this by adding a custom
    output format and published the code as a Hugo module on Codeberg. See the README
    file there to learn about how to use it. Those ActivityPub representations are
    used, whenever an ActivityPub implementation tries to re-fetch the article (for
    example when you search for the article URL in Mastodon) and also when my custom
    ActivityPub middleware (post about that is coming soon…) detects a new article
    on my blog (using a JSON Feed) and then sends it to the followers. After configuring
    the custom output format, there’s now a generated index.ajson file next to every
    index.html file of pages and the homepage. Because I use Caddy (version 1) as
    a webserver, serving the static files from disc, I needed to configure Caddy to
    serve the index.ajson file with the correct MIME-type and instead of the HTML
    file whenever a request contains application/activity+json or application/ld+json
    in the Accept header. The correct MIME-type can be configured like this in the
    Caddyfile: mime { .json application/json .ajson application/activity+json } To
    serve the .ajson file instead of the default .html file, I used the following
    rewrite rule: rewrite { if {>Accept} has application/activity+json if {>Accept}
    has application/ld+json if_op or to {path}index.ajson {path}/index.ajson {path}
    }'
  published: 2020-02-10T18:36:12+01:00
reply: https://jlelse.blog/dev/activitystreams-hugo/
---

I was looking at your [single template](https://codeberg.org/jlelse/hugo-activitystreams/src/branch/master/layouts/_default/single.activity.ajson) and I was wondering if `content_html` shouldn't be `content` only? According to the [spec](https://www.w3.org/TR/activitystreams-vocabulary/#dfn-content), there's no `content_html` property and the `content` can contain HTML by default.

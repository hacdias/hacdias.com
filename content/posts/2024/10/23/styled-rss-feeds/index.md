---
title: Styling My RSS Feeds
date: 2024-10-23T16:53:51+02:00
categories:
  - articles
tags:
  - rss
  - personal website
  - meta
---

Styling my RSS feeds is something that has been on my infinitely long list of things to do on this website. Sometimes I removed it, sometimes I added it back. However, I recently came across Darek Kay's [blog post](https://darekkay.com/blog/rss-styling/) and decided that it was time to finally style both my RSS feeds, and my sitemap.

<!--more-->

Styling RSS feeds is simpler than one may think. There's just one thing you actually need: an [XSL file](https://www.w3.org/Style/XSL/WhatIsXSL.html). An XSL file can use XSLT to transform an XML file into HTML, and also apply inline styles. But by transforming the XML into HTML, you can also just link to a regular CSS stylesheet.

The first step is to add a `xml-stylesheet` line to the top of the XML file you want to style, in this case, my feed. The `href` must point to a valid XSL file, otherwise browsers will fail to render the file.

```xml
<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<?xml-stylesheet href="/feed.xsl" type="text/xsl"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <!-- ... -->
</feed>
```

I would recommend checking both Derek's [blog post](https://darekkay.com/blog/rss-styling/) for more details and for an example of his XSL file. In my case, you can find it [here](/feed.xsl). To give an example of what an XSL file looks like, here's an excerpt of mine, without some parts that are in all remaining webpages (header, navigation, footer, etc):

```xml
<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/atom:feed/atom:title" /></title>
        <meta charset="utf-8" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!-- ... STYLESHEETS ... -->
      </head>
      <body>
        <div class='container'>
          <!-- ... NAV & HEADER ... -->
          <main>
            <header>
              <h1>RSS Feed Preview</h1>
            </header>
            <p>
              This is a <span id="styled">styled preview</span> of my RSS feed. You can subscribe to it by copying the URL in the address bar into your newsreader. Personally, I use Miniflux and NetNewsWire, but there's hundreds of alternatives. Just visit <a href="https://aboutfeeds.com/">About Feeds</a> to learn more and get started.
            </p>
            <h2>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="icon" viewBox="0 0 256 256">
                <rect width="256" height="256" rx="55" ry="55" x="0" y="0" fill="#FF7C33"></rect>
                <circle cx="68" cy="189" r="24" fill="#FFF"></circle>
                <path d="M160 213h-34a82 82 0 0 0 -82 -82v-34a116 116 0 0 1 116 116z" fill="#FFF"></path>
                <path d="M184 213A140 140 0 0 0 44 73 V 38a175 175 0 0 1 175 175z" fill="#FFF"></path>
              </svg>
              Latest Posts
            </h2>
            <ul class='tb'>
              <xsl:for-each select="/atom:feed/atom:entry">
                <li class='h-entry'>
                  <a class='nl lh p-name u-url'>
                    <xsl:attribute name="href">
                      <xsl:value-of select="atom:link/@href" />
                    </xsl:attribute>
                    <xsl:value-of select="atom:title" />
                  </a>
                  <span class='tab lg small dt-published'>
                    <xsl:value-of select="substring(atom:published, 0, 11)" />
                  </span>
                </li>
              </xsl:for-each>
            </ul>
          </main>
          <!-- ... FOOTER ... -->
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
```

Now, if you open one of the XML files from my RSS feeds in your browser, it will automatically fetch the XSL file and transform the XML into HTML accordingly. At the moment, you'd get a page that looks almost like any other page of this website.

![Styled Articles RSS Feed](cdn:/2024-10-feed)

The good thing about this is that you won't get an ugly rendering of the XML in the browser. Nowadays, many people [don't even know](https://thepcspy.com/read/what-happened-to-rss/) what RSS is. This is a way of making it look relatively consistent to the rest of the website, and at the same time explain what it can be used for. I have also updated my [sitemap](/sitemap.xml) to be styled. One more item ticked!

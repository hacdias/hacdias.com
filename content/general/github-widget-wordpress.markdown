---
type:           post
author:         "Henrique Dias"
title:          "GitHub Profile Widget for WordPress"
date:           2015-08-06T09:45:00Z
description:    "Now it is time for a new plugin. This time is for GitHub. Every developer should show their GitHub profile on their blog."
image:          "images/github-widget.jpg"
categories:
- General
tags:
- WordPress
- Plugins
- GitHub
---

Luís Soares and I have created two plugins for WordPress: one for [HackerRank](/general/hackerrank-widget-for-wordpress/) and another for [IMDb](/general/your-imdb-profile-on-your-wordpress-website/). Today, we announce a new plugin for WordPress which has been available since last month: **GitHub Profile Widget**.

Even the developers should have an easy way to show their work on their own blog. So we created this brand new plugin for WordPress. This plugin gives you a widget to show your GitHub profile or an organization's profile in your blog. It's very simples to setup.

## Features

+ Basic information (username, name);
+ Company, local, email, website and when you joined to GitHub;
+ Followers and following numbers;
+ Repositories and gists;
+ The organizations where you are included.

It is available for [download here](https://wordpress.org/plugins/github-profile-widget) or just search "GitHub Profile Widget" on your WordPress dashboard.

## Technologies and Tips

To build this plugin we used the marvelous [GitHub API](https://api.github.com/) but there was a simple problem: calls per hour. GitHub's API is limited to 60 calls per hour without login, I think.

To workaround that "problem", we made use of WordPress options to cache the information. By default, the cache is cleaned each 5 minutes to make sure you don't have problems. It can be changed.

If you don't want to use the cache, set the option to 0 minutes. But if you do that, you should use a token so you don't have problems with the limit of calls. The code is **open source** on [GitHub](https://github.com/refactors/github-profile-widget).

Luís Soares also [wrote an article](http://luissoares.com/widget-para-o-github/) about this plugin. We hope you enjoy!

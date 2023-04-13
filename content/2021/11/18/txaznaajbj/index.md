---
description: Replied to a post on seblog.nl
date: 2021-11-18T21:07:18.222010491Z
noIndex: true
context:
  name: Sebastiaan Andeweg
  url: https://seblog.nl/2021/11/18/1/indieauth-without-indieauth-com
  content: 'In February 2017, I added the ability for other people to log in to my
    site, both via IndieAuth and Twitter. Since June 2019 this feature is more useful,
    as I moved all my checkins to being ‘private’, meaning there is actually something
    to see (albeit sparsely posted). For this, I used the now outdated and deprecated
    service IndieAuth.com, which back then was also used to log in to the IndieWeb
    wiki. Due to the confusion between IndieAuth.com (the service) and IndieAuth (the
    protocol), a new project called IndieLogin was started and the IndieWeb wiki moved
    to that one. Since it didn’t offer that login service to others, as IndieAuth.com
    did, I never switched. Since this week I have a new IndieAuth endpoint for myself.
    (Meaning: a place I can use to prove my own identity to others.) Unfortunately,
    it is not compatible with the outdated IndieAuth.com, so I could not use it to
    prove my identity to my own site. Because this felt wrong (and because I had the
    IndieAuth flow in my head again now), I decided that my site needed to do that
    part of IndieAuth on it’s own as well. Since I was at it, I also have Twitter
    login working via the new flow. That was easier, because the library support was
    more plug-and-play. Juggling with cookies Last week I wrote about my new setup
    where I run two applications, the old PHP and the new Elixir, behind an unusual
    NGINX configuration. For the aforementioned feature of authentication, I had to
    create even a bigger beast. All the posts, and all the logic for showing or hiding
    private posts, are still in PHP. The new authentication is in Elixir. Both ends
    are storing the information about the current logged-in user in session cookies.
    How do I merge those two into one user experience? Luckily, since both applications
    run under the same domain, the browser is actually unaware of the fact that there
    are two apps. It just sends all cookies back. So, in PHP I ask for all headers,
    look for a cookie-one that is named _yak_key, and if it is there, it makes a direct
    localhost call to Yak, the Elixir server, with that cookie. Yak exposes one route
    that just returns the currently logged-in user as a JSON. If that call returns
    a user, PHP can set a cookie of its own. Then for the logout, PHP used to redirect
    to the homepage, but now it redirects to the page that logs you out of Yak, which
    redirects to the homepage. At some point this setup will change again, but for
    now it seems to me as a good way to make one further step in the features I want
    to support in the new version of my site, while keeping the old one running. Oh
    yeah, you may hunt down that localhost-call that checks the login status. It is
    actually exposed to the outside world too. But if you can provide it with a cookie
    for a person that is not you, that person and I have a problem anyway, regardless
    of you knowing the endpoint.'
  published: 2021-11-18T20:18:05Z
reply: https://seblog.nl/2021/11/18/1/indieauth-without-indieauth-com
---

I am really enjoying your posts about Yak and the progress! I am also working on my own system and will write an article very soon. 

PS: I just logged in and it works!

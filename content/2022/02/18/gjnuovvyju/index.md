---
description: Replied to a post on jan.boddez.net
date: 2022-02-18T08:59:36.99403712+01:00
noIndex: true
location:
  latitude: 51.43248
  longitude: 5.48613
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
context:
  name: Jan Boddez
  url: https://jan.boddez.net/notes/ddfdefca7c
  content: '(Off-topic/meta.) Interestingly, my (h-)feed reader displays a (p-)name
    for this “note.” Normally, it drops the p-name (and thus considers the post a
    “note”) if it’s the same as (or a shortened version of) the content. In this case
    it doesn’t, because this post’s p-name contains a straight quote whereas in the
    content it’s a “curly” quote. Which raises the question: Why add the p-name class
    at all, if this a note?'
  published: 2022-02-17T08:59:17+01:00
reply: https://jan.boddez.net/notes/ddfdefca7c
---

To avoid future issues, I removed the `p-name` property when there's no title. This should also fix a similar issue when I appended ellipsis to the title if it was a truncation of the content. Thanks for pointing it out!

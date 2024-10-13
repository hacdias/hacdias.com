---
title: Micropub Update Parsing Uncertainties
date: 2021-11-05T13:14:32.567880752Z
categories:
  - articles
tags:
  - indieweb
  - meta
  - micropub
---

I am creating a new Micropub endpoint for my website and I read the [specification](https://micropub.spec.indieweb.org/). However, while testing the update action, something unexpected happened. The specification is not quite clear to whether we should deeply-traverse the update and update field by field, or solely replace the top-level keys.

<!--more-->

Take into account the following post (taken from the specification):

```json
{
  "type": ["h-entry"],
  "properties": {
    "summary": [
      "Weighed 70.64 kg"
    ],
    "weight": [
      {
        "type": ["h-measure"],
        "properties": {
          "num": ["70.64"],
          "unit": ["kg"]
        }
      }
    ]
  }
}
```

What happens with the following update request?

```json
{
  "action": "update",
  "url": "https://example.com/weight",
  "replace": {
    "weight": [
      {
        "properties": {
          "unit": ["lbs"]
        }
      }
    ]
  }
}
```

Should the Micropub endpoint recursively traverse the fields and check if they exist and if so, update it? Or should it simply replace the top level `weight` field?

I am asking this because I was testing with a checkin locally, and I used [OwnYourSwarm](https://ownyourswarm.p3k.io/) which provides a lot of detailed fields. Then, I used [micropublish](https://micropublish.net/) to update that post, and most of the fields of the checkin were gone because I was simply replacing the top-level fields.

Is anyone aware of what should happen?

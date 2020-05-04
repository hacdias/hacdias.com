---
date: '2020-05-04T08:50:35.299Z'
math: true
publishDate: '2020-05-04T08:44:33.341Z'
title: Pastry (DHT)
---

- Node ID, 128 bits $\in [0, 2^{128}[$
- Key Id, 164 bits $\in [0, 2^{161}[$
- Key $n$ stored on node $n$. If the node $n$ is not available, store on $n+1$.
- Routing algorithm works with prefix-based matching, getting progressively closer to the destination.
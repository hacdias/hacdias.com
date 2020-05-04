---
date: '2020-05-04T07:10:41.030Z'
publishDate: '2020-05-04T06:46:12.170Z'
title: DHT
---

DHTs are Distributed Hash Tables which are P2P algorithms.

- P2P Algorithms: different implementations
- Nodes store index info about other resources
- Flat architecture: no special nodes

## Chord

- Hash file --> key k
- Node have id (160 bit)
- Resources have key (160 bit)
- Node with ID X will store the resource with key X which makes search easy
- To insert data
  - Take file
  - Hash file --> Key k
  - Store it on node k
- To search data
  - Knowing K
  - Route to find K
- Key space = ID space
- When the node K does not exist, the resource should be handled by the next available node.
- When a new node Y joins the network, the node that was storing the Y's keys needs to be updated
- When a node Y leaves the network, the next available node managed keys' must be updated.
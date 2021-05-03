---
title: Distributed Hash Table
math: true
aliases:
- /notes/coral-dht
- /notes/chord-dht
- /notes/pastry-dht
- /notes/tapestry-dht
- /notes/kademlia-dht
- /notes/content-addressable-network-dht
---

- **tags**: [Distributed Systems](/notes/distributed-systems/)

DHTs are Distributed Hash Tables which are P2P algorithms.

>  "A system where the nodes organize themselves in a structured overlay and establish a small amount of routing information for quick and efficient routing to other overlay nodes." - [Peer-to-Peer Systems and Applications](/notes/peer-to-peer-systems-and-applications/)

- P2P Algorithms: different implementations
- Nodes store index info about other resources
- Flat architecture: no special nodes
- Usually can find resources on $O(\log N)$
- By distributing identifiers of nodes and data equally thorough the system, the load shoud be balanced across all peers
	- PROBLEM: obviously there are some resources that are always more accessed than others, creating possibily huge differences.
- Data storage:
	- **Direct storage**: data is copied upon insertion to the responsible node.
		- Good because the data is directly on the peer.
		- Bad for bandwidth and resources.
	- **Referenced storage**: references pointers to the actual location of the data.
		- Good because there's less load on the DHT.
		- Bad becauser data is only available while the node is available.
- Can be interpreted as:
	- Routing systems
	- Storage systems
- Challenges:
	- Routing efficiency
	- Management overhead
	- Dynamics
- Four original DHT protocols:
  - [Chord](#chord)
  - Content Addressable Networks
  - [Tapestry](#tapestry)
  - Pastry

## Chord

- Nodes and keys are assigned an _m_-bit identifier using a hashing algorithm. The nodes and keys are distributed across the same identifier space.
- The nodes are theoretically arranged as a circle with at most $2^m$ nodes, starting from 0 to $2^m-1$.
- Each node keeps a finger (routing) table with up to $m$ entries. The $i^{th}$ entry should contain the $(n+2^{i-1}) \mod 2^m$. If the node does not exist, it should then contain the next available successor.
    - For example, in a network with a key-size 4 (unrealistic), there are, at most 16 nodes. Each node stores the addresses for 4 nodes that are located 1, 2, 4 and 8 positions away from them, unless they do not exust.
    - This method allows for an efficient trade-off between low-amount of stored keys and fast search.
- To add a new file to the network:
  - Hash file -> Key $k$.
  - Node $k$ should store resource with key $Pk$.
  - If node $k$ does not exist, store on the next successor.
- To search for data:
  - Knowing the key $k$.
  - Query the closest node to $k$ available in our routing table.
- When a new node $y$ joins the network, the node that was storing $y$'s keys needs to be updated.
- When a node $y$ leaves the network, the next available node managed keys' must be updated.

## Tapestry

- Node ID, 128 bits $\in [0, 2^{128}[$
- Key Id, 164 bits $\in [0, 2^{161}[$
- Key $n$ stored on node $n$. If the node $n$ is not available, store on $n+1$.
- Routing algorithm works with prefix-based matching, getting progressively closer to the destination.new

## Kademlia

Kademlia is one of the most modern implementations of a DHT.

The **3 parameters**:

- **Address space**: a way to uniquely identify all the peers in a network.
- A **metric** to order the peers in the address space and therefore be able to visualize them along an ordered line.
- A **projection** that will take a record key and calculate a position in the address space where the peer(s) most ideally suited to store the record should be near.

More details:

- Peers can join (or leave) at any time hence it's unstable.
- Each peer keeps links to the peers located at $2n$ of distance.
- For each multiple of 2, each peer keeps up to $K$ links.
- $K$ is determined based on the observed average churn in the network and the frequency with which the network republishes information.
	- Computed to maximize the probability of keeping the network connected while maintaining good latency values for queries.

This will:

- Allow to search the network as if it was a sorted list.
- Allows for a lookup time of $O(\log(N))$ where $N$ is the size of the network.

## Comparison

|System|Routing Hops|Node State|Arrival|Departure|
|---|---|---|---|---|
|Chord|$O(\frac{1}{2}\log_2(N))$|$O(2\log_2(N))$|$O(log_2^2(N))$|$O(\log_2^2(N))$|
|Pastry|$O(\frac{1}{2}\log_2(N))$|$O(\frac{1}{b}(2^b-1)\log_2(N))$|$O(log_{2^b}(N))$|$O(\log_b(N))$|
|CAN|$O(\frac{D}{2}N^{1/D})$|$O(2D)$|$O(\frac{D}{2}N^{1/D})$|$O(2D)$|
|Symphony|$O(\frac{c}{k}\log_2(N))$|$O(2k+2)$|$O(\log^2(N))$|$O(\log^2(N))$|
|Viceroy|$O(\frac{c}{k}\log_2(N))$|$O(2k+2)$|$O(\log_2(N))$|$O(\log_2(N))$|
|Kademlia|$O(\log_b(N))$|$O(b\log_b(N))$|$O(\log_b(N))$|$O(\log_b(N))$|

## Resources

- https://en.wikipedia.org/wiki/Kademlia
- [IPFS](/notes/ipfs/) DHT: https://blog.ipfs.io/2020-07-20-dht-deep-dive/
- [ITS413, Lecture 21, 29 Mar 2012](https://www.youtube.com/watch?v=qqv4OJ5Lc4E)

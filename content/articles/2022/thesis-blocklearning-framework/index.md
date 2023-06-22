---
title: BlockLearning Framework Master Thesis
description: Impact Analysis of Different Consensus, Participant Selection and Scoring
  Algorithms in Blockchain-based Federated Learning Systems Using a Modular Framework
date: 2022-09-07T17:00:06.443507583+02:00
tags:
- thesis
- publications
syndications:
- https://research.tue.nl/en/studentTheses/04a5f7e4-7782-4f26-a864-a49d04f82966
---

My master thesis has been finally published online. It is called _Impact Analysis of Different Consensus, Participant Selection and Scoring Algorithms in Blockchain-based Federated Learning Systems Using a Modular Framework_, and it was supervised by [Nirvana Meratnia](https://research.tue.nl/en/persons/nirvana-meratnia).

<!--more-->

## Abstract

> Federated Learning allows multiple distributed clients to collaborate on training the same Machine Learning model. Blockchain-based Federated Learning has emerged in recent years to improve its transparency and information safety issues. On the one hand, it eliminates the need for a central orchestrator, removing the single point of failure in the network. On the other hand, it facilitates aspects such as traceability, auditability, authentication and persistency, that, together, improve the transparency and safety of the federated training process and accommodate new verification algorithms in order to detect malicious agents.
> 
> In these systems, it is common to score each client's model update in order to determine if it is a good contribution to the global model. With Blockchain-based Federated Learning being increasingly adopted in IoT networks, where low powered devices with low resources are the norm, it is important to ensure that the system consumes the least amount of resources. The current literature has very little information regarding how different algorithms impact the resource usage of the system. Additionally, there is no publicly available framework that can be used to implement a Blockchain-based Federated Learning system.
> 
> In this thesis, we design and implement the first modular open-source framework for Blockchain-based Federated Learning using Ethereum and TensorFlow. This framework can be easily adapted to support multiple architectures, as well as different scoring, aggregation, and privacy algorithms. With this framework, we proceed to do the first known analysis of how different aspects of Blockchain-based Federated Learning, such as consensus, participation selection and scoring algorithms, impact the accuracy, execution time and communication and computation costs. Additionally, the same analysis will be done per each scoring algorithm to analyze the impact of the number of clients and privacy mechanisms on the aforementioned aspects. Finally, we also provide a proof of concept of how the framework can be adapted to support, not only the Horizontal Federated Learning, but also the Vertical Federated Learning.

## Citation

```
@mastersthesis{blocklearning,
  title   = "Impact Analysis of Different Consensus, Participant Selection and Scoring Algorithms in Blockchain-based Federated Learning Systems Using a Modular Framework",
  author  = "Dias, Henrique",
  year    = "2022",
  school  = "TU Eindhoven"
}
```

<div class='terms bold'>

- [📄 Thesis](https://cdn.hacdias.com/media/1a2c9b43ee0a3d1a4a9aab9b8c4f94172660c39903be6f42e354f47700995602.pdf)
- [📣 Slides](https://cdn.hacdias.com/media/f04b0bb5bd8034d205d1568b76e99670201c07e5fdda53bd134f6194c13bef97.pdf)
- [🧱 BlockLearning Framework](https://github.com/hacdias/blocklearning)

</div>

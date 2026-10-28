---
title: Resume
description: My resume.
---

<!--more-->

<div id="resume-header">

  <!-- Using ![]() produces a "lazy" loading picture, which doesn't load when printing in some browsers -->
  <figure><img src="/avatar/512.jpg" alt="Henrique Dias"></figure>

  <div>

  Henrique Dias

  Eindhoven, NL - [mail@hacdias.com](mailto:mail@hacdias.com)

  </div>

  - [hacdias.com](/)
  - [github.com/hacdias](https://github.com/hacdias)
  - [linkedin.com/in/hacdias](https://www.linkedin.com/in/hacdias/)

</div>

Senior Software Engineer building open source systems and products in Go and TypeScript. Spent six and a half years at Protocol Labs on IPFS, from high-traffic Go services to a widely used desktop app. Created File Browser (35K+ GitHub stars, 100M+ downloads). Now building digital identity products.

<small>**Skills**: Go, TypeScript, Node.js, React, PostgreSQL, Redis, Docker, OAuth, OpenID4VC, X.509, OpenTelemetry<br>
**Languages** (fluent): English, Dutch, Portuguese</small>

## Experience {#experience}

{{< resume-position 
  title="Senior Software Engineer"
  location="Paradym (Animo Solutions)" href="https://paradym.id/"
  from="06/2025" to="present" >}}

- Own features end to end across the TypeScript SaaS platform for digital credentials and its React Native [wallet](https://paradym.id/products/paradym-mobile-wallet), from protocol libraries to API and dashboard. Co-maintain [Credo](https://github.com/openwallet-foundation/credo-ts) and the OpenWallet Foundation libraries underneath.
- Implemented OpenID4VC 1.0, the protocol behind the EU Digital Identity Wallet, and W3C VCDM 2.0 across Credo, Paradym, and Paradym Wallet as the specifications were finalized, making them interoperable with EU pilots.
- Designed and built the key and trust infrastructure: hardware-backed key storage behind a provider-agnostic API (Google Cloud HSM and OpenBao), X.509 certificate management and revocation, and EU Trusted List validation<span class="hide-print"> ([▶ demo](https://www.youtube.com/watch?v=sr3Z1uCDHK4))</span>.
- Integrated with customers' own infrastructure: issuance through their identity provider and data sources<span class="hide-print"> ([▶ demo](https://www.youtube.com/watch?v=6NJCTI9LpIQ))</span>, so Paradym never stores personal data, and an on-premise Admin API secured by their authorization server.

<!-- Employed by Animo Solutions, the company behind Paradym. -->

{{</ resume-position >}}

{{< resume-position 
  title="Software Engineer"
  location="Ver.iD" href="https://ver.id/"
  from="06/2024" to="05/2025" >}}

- Developed TypeScript authentication and verification products that let businesses accept multiple identity wallets through a single OAuth integration, abstracting over proprietary APIs and open standards (OpenID4VP, SD-JWT, mdoc). Used in pilots, including one with the Municipality of Nijmegen.
- Owned the integrations with NL Wallet (the Dutch government's identity wallet), ReadID Ready, and Nect, and maintained integrations with other wallets, including Digidentity and Yivi.

{{</ resume-position >}}

{{< resume-position
  title="Software Engineer"
  location="Protocol Labs" href="https://protocol.ai/"
  from="11/2017" to="05/2024" >}}

- Maintained [Kubo](https://github.com/ipfs/kubo), the reference Go implementation of [IPFS](https://ipfs.tech/), a decentralized, P2P, and content-addressed network. Led the extraction of its HTTP gateway into [Boxo](https://github.com/ipfs/boxo), a reusable Go SDK consolidating more than 20 repositories.
- Co-maintained [Rainbow](https://github.com/ipfs/rainbow) and [Someguy](https://github.com/ipfs/someguy), the gateway and routing services behind IPFS's public gateways, serving hundreds of millions of daily requests, with OpenTelemetry and Prometheus. Built their predecessor, [Bifrost](https://github.com/ipfs-inactive/bifrost-gateway).
- Designed [specifications](https://specs.ipfs.tech/) for HTTP gateways, naming, and delegated routing, implemented them in Go and TypeScript, and contributed to a suite of hundreds of implementation-agnostic conformance tests.
- Owned [IPFS Desktop](https://github.com/ipfs/ipfs-desktop) (Electron, 2.4M+ downloads) for five years, leading its redesign, auto-updates, and OS integrations. Rebuilt [IPFS Web UI](https://github.com/ipfs/ipfs-webui)'s file manager (React).
- Co-authored [Testground](http://testground.ai/), a platform for testing and simulating P2P systems at scale. Built its task supervisor, network routing policies, JavaScript SDK, and a standalone HTTP sync service.

{{</ resume-position >}}

## Open Source {#open-source}

{{< resume-position
  title="Creator"
  location="File Browser" href="https://github.com/filebrowser/filebrowser"
  from="09/2015" to="09/2026" >}}

- Created a self-hosted web file manager in Go and Vue.js that grew to 35K+ GitHub stars and 100M+ downloads. Maintained it for a decade, handling issues, pull requests, and 60+ security advisories, and led its wind-down in 2026, from maintenance mode to final release and archival.

{{</ resume-position >}}

{{< resume-position title="Creator" >}}

- [webdav](https://github.com/hacdias/webdav): a standalone WebDAV server in Go with configurable users and permissions (5K+ stars).
- [Eagle](https://github.com/hacdias/eagle) and [indielib](https://github.com/hacdias/indielib): a Go backend and IndieWeb toolkit (IndieAuth, Micropub, and Microformats) powering my website, where I experiment with open web protocols, such as AT Protocol, ActivityPub, and Webmentions.

{{</ resume-position >}}

## Education {#education}

{{< resume-position
  title="MSc Computer Science and Engineering"
  location="Eindhoven University of Technology" href="https://tue.nl/"
  from="2020" to="2022" grade="8 out of 10" >}}

- [Thesis](/2022/09/07/thesis-blocklearning-framework/) on blockchain-based federated learning, including [BlockLearning](https://github.com/hacdias/blocklearning), an open source framework for running experiments, later published as a [paper](/2023/02/16/paper-blocklearning-framework/) at UbiSec 2022.
- Teaching assistant for the Deep Learning course: prepared materials, gave practical classes, and supported students. Mentored 12 incoming international master's students.

{{</ resume-position >}}

{{< resume-position
  title="BSc Information Systems and Computer Engineering"
  location="Instituto Superior Técnico" href="https://tecnico.ulisboa.pt/"
  from="2017" to="2020" grade="16 out of 20" >}}

- Received the Academic Merit Award twice. Mentored new students over two years.

{{</ resume-position >}}

## Volunteering {#volunteering}

{{< resume-position
  title="Technical Mentor"
  location="HackYourFuture" href="https://www.hackyourfuture.net"
  from="07/2024" to="02/2026" >}}

- Helped people with limited access to education become web developers by reviewing assignments and answering questions about JavaScript, Node.js, APIs, browsers, and databases.

{{</ resume-position >}}

{{< resume-position 
  title="Volunteer Software Developer" 
  location="Upframe" href="https://github.com/upframe" 
  from="09/2016" to="05/2018" >}}

- Built a Go REST API, Slack integration, and a React web application to manage newsletters and enrollments for a program connecting mentors with first-time entrepreneurs.

{{</ resume-position >}}

{{< resume-position
  title="Content Writer"
  location="Pplware" href="https://pplware.sapo.pt"
  from="06/2013" to="09/2016" >}}

- Wrote 400+ tutorials and tech articles for [Pplware](https://pplware.sapo.pt/author/henrique_dias/) and [Pplware Kids](https://kids.pplware.sapo.pt/author/henrique_dias/).
- Published a 60-page [e-book](https://media.hacdias.com/2015-02-27-aprenda-a-programar.pdf) on how to program in C for beginners at the age of 15.

{{</ resume-position >}}

<p id='printing-hint' style='text-align: center'>
  <a class='button' href="javascript:print()">
    🖨️ Print Resume
  </a>
</p>

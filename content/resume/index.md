---
title: Resume
description: My resume.
noIndex: true
---

<!--more-->

<div id="resume-header">

  ![](/avatar/512.jpg)

  <div>

  Henrique Dias

  Eindhoven, NL - [mail@hacdias.com](mailto:mail@hacdias.com)

  </div>

  - [hacdias.com](https://hacdias.com)
  - [github.com/hacdias](https://github.com/hacdias)
  - [linkedin.com/in/hacdias](https://www.linkedin.com/in/hacdias/)

</div>

Senior Software Engineer building open source systems in Go and TypeScript, from peer-to-peer networks serving hundreds of millions of daily requests to digital identity and verifiable credentials. I work across the stack, from specifications and protocol libraries to the products built on them, with a focus on user agency and open standards.

<!-- I have hands-on experience with authentication, OAuth 2.0, and X.509 PKI, from specifications and libraries to production SaaS. -->

<small>**Technologies**: Go, TypeScript, Node.js, React, React Native, GraphQL, PostgreSQL, Redis, Docker, OpenTelemetry<br>
**Languages**: Portuguese, English, Dutch</small>

<!-- OAuth 2.0, OpenID4VC -->

## 💼 Experience {#experience}

{{< resume-position 
  title="Senior Software Engineer"
  location="Animo Solutions" href="https://animo.id/"
  from="06/2025" to="present" >}}

- Develop [Paradym](https://paradym.id/), a SaaS platform for issuing and verifying digital credentials, and [Paradym Wallet](https://paradym.id/products/paradym-mobile-wallet), its companion React Native app. Design and ship features end to end, from protocol libraries and backend services to the API and dashboard. Co-maintain [Credo](https://credo.js.org/), the OpenWallet Foundation TypeScript framework both are built on, along with related libraries.
- Implemented OpenID4VC 1.0, the protocol behind the EU Digital Identity Wallet, and W3C VCDM 2.0 across Credo, Paradym, and Paradym Wallet, as the specifications were being finalized, and made them interoperable with pilots across the EU.
- Designed and built certificate-based trust for Paradym (certificate management, revocation, and EU Trusted List validation), enabling customers to issue, verify, and revoke credentials backed by standard X.509 trust.
- Designed and built integrations that let customers issue credentials without Paradym ever storing personal data: users sign in through the customer's existing identity provider, and credential data is fetched from their systems at issuance time.

{{</ resume-position >}}

{{< resume-position 
  title="Software Engineer"
  location="Ver.iD" href="https://ver.id/"
  from="06/2024" to="05/2025" >}}

- Developed authentication and verification products that let businesses accept multiple identity wallets through a single OAuth integration, abstracting over proprietary APIs and open standards (OpenID4VP, SD-JWT, mdoc). Used in pilots, including one with the Municipality of Nijmegen.
- Owned the integrations with NL Wallet (the Dutch government's identity wallet), ReadID Ready, and Nect, and maintained integrations with other wallets, including Digidentity and Yivi.

{{</ resume-position >}}

{{< resume-position
  title="Software Engineer"
  location="Protocol Labs" href="https://protocol.ai/"
  from="11/2017" to="05/2024" >}}

- Maintained [Kubo](https://github.com/ipfs/kubo), the reference Go implementation of [IPFS](https://ipfs.tech/), a decentralized, P2P, and content-addressed network. Led the extraction of its HTTP gateway into [Boxo](https://github.com/ipfs/boxo), a reusable Go SDK consolidating more than 20 repositories.
- Co-maintained [Rainbow](https://github.com/ipfs/rainbow) and [Someguy](https://github.com/ipfs/someguy), the gateway and routing services behind IPFS's public gateways, serving hundreds of millions of daily requests, instrumented with OpenTelemetry and Prometheus. Previously built their predecessor, [Bifrost](https://github.com/ipfs-inactive/bifrost-gateway).
- Designed [specifications](https://specs.ipfs.tech/) for HTTP gateways, naming, and delegated routing, implemented them in Go and TypeScript, and contributed to a suite of hundreds of implementation-agnostic conformance tests.
- Owned [IPFS Desktop](https://github.com/ipfs/ipfs-desktop) (Electron, 2.4M+ downloads) for five years, leading its redesign, auto-updates, and OS integrations. Rebuilt [IPFS Web UI](https://github.com/ipfs/ipfs-webui)'s file manager (React).
- Co-authored [Testground](http://testground.ai/), a platform for testing and simulating P2P systems at scale. Built its task supervisor, network routing policies, JavaScript SDK, and a standalone HTTP sync service.

{{</ resume-position >}}

## 🛠️ Open Source {#open-source}

{{< resume-position
  title="Personal Website"
  from="07/2014" to="present" >}}

- Built [Eagle](https://github.com/hacdias/eagle), a Go backend for managing my statically generated website from the browser, and [indielib](https://github.com/hacdias/indielib), an IndieWeb toolkit implementing IndieAuth, Micropub, and Microformats.
- Building and maintaining my [personal website](https://hacdias.com) for over a decade, where I publish writing and photography, and experiment with protocols such as AT Protocol, ActivityPub, and Webmentions.

{{</ resume-position >}}

{{< resume-position
  title="File Browser"
  from="09/2015" to="09/2026" >}}

- Created a self-hosted web file manager in Go and Vue.js, which started as a Caddy plugin, and grew to 35K+ [GitHub](https://github.com/filebrowser/filebrowser) stars and 100M+ downloads. Handled issues, pull requests, and security reports, and led its wind-down in 2026, from maintenance mode to final release and archival.

{{</ resume-position >}}

{{< resume-position
  title="Other Projects" >}}

- [webdav](https://github.com/hacdias/webdav), a standalone WebDAV server in Go with configurable users and permissions (5K+ stars).

{{</ resume-position >}}

## 🎓 Education {#education}

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

## 🌟 Volunteering {#volunteering}

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

- Wrote over 400 tutorials and tech articles for [Pplware](https://pplware.sapo.pt/author/henrique_dias/) and [Pplware Kids](https://kids.pplware.sapo.pt/author/henrique_dias/).
- Published a 60-page [e-book](https://media.hacdias.com/2015-02-27-aprenda-a-programar.pdf) on how to program in C for beginners at the age of 15.

{{</ resume-position >}}

<p id='printing-hint' style='text-align: center'>
  <a class='button' href="javascript:print()">
    🖨️ Print Resume
  </a>
</p>



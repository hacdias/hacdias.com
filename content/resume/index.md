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

I am a software engineer who cares about the web, decentralization, identity, user agency, and making impactful tools for developers and users. I am an eager learning and always up for new challenges.


## 💼 Experience {#experience}

{{< resume-position title="Software Engineer" location="Interplanetary Shipyard" href="https://ipshipyard.com/" from="01/2024" to="05/2024" >}}

- Co-author and maintainer of specialized services to bridge HTTP and P2P systems in Go.
- Maintainer of libraries for content-addressed, decentralized and P2P systems in Go.

{{</ resume-position >}}

{{< resume-position title="Software Engineer" location="Protocol Labs" href="https://protocol.ai/" from="11/2017" to="01/2024" >}}

- Led the development of new features for the largest and most widely used [implementation](https://github.com/ipfs/kubo) and set of [libraries](https://github.com/ipfs/boxo) of the [InterPlanetary File System (IPFS)](https://ipfs.tech/), a decentralized, P2P, and content-addressed network, in Go.
- Co-authored and implemented [specifications](https://specs.ipfs.tech/) for different HTTP services in Go and TypeScript. Authored hundreds of conformance tests to test whether different implementations comply with the specifications.
- Co-authored [Testground](http://testground.ai/), a testing, benchmarking and simulation platform for decentralized and P2P systems at scale built in Go. Led the development of the JavaScript SDK and the Go synchronization service.
- Revamped and shipped [IPFS Web UI](https://github.com/ipfs/ipfs-webui), a React-based web application used as a front-end for a node in an IPFS network, where users can manage their files, explore linked data, and see their peers.
- Led the development of [IPFS Desktop](https://github.com/ipfs/ipfs-desktop), an Electron-based desktop application for Windows, macOS and Linux. Owned the refactoring, redesign and feature development of the application.

{{</ resume-position >}}

{{< resume-position title="Student Teaching Assistant" location="Eindhoven University of Technology" href="https://tue.nl/" from="09/2021" to="06/2022" >}}

- Prepared materials, gave practical classes and helped students in a Deep Learning course.
- Mentored 12 new master students from different nationalities during their first semester.

{{</ resume-position >}}

{{< resume-position title="Full-Stack Software Developer" location="Upframe" href="https://github.com/upframe" from="09/2016" to="05/2018" >}}

- Helped organize a mentorship-driven program to connect mentors with first-time entrepreneurs.
- Built a backend with a REST API for managing email transactions, newsletters and program enrollments in Go.
- Integrated the backend with Slack for managing program enrollments directly from a Slack channel in Go.
- Built a web application for managing newsletter and program enrollments in React.
<!-- - **In the news**: [Eco](https://eco.sapo.pt/2017/03/21/upframe-ou-o-programa-de-pre-aceleracao-que-a-startup-lisboa-fez-seu/), [Startup Lisboa](https://www.startuplisboa.com/startuplisboanews/upframe-o-novo-programa-de-pr-acelerao-powered-by-startup-lisboa), [Observador](https://observador.pt/2017/03/20/upframe-startup-lisboa-lanca-programa-para-estudantes-e-recem-licenciados/) & [Dinheiro Vivo](https://www.dinheirovivo.pt/fazedores/upframe-startup-lisboa-ajuda-os-fazedores-a-dar-os-primeiros-passos/). -->

{{</ resume-position >}}

## 🎓 Education {#education}

{{< resume-position title="MSc Computer Science and Engineering" location="Eindhoven University of Technology" href="https://tue.nl/" from="2020" to="2022" grade="8 out of 10" >}}

- Graduation thesis on [Impact of Different Algorithms in Blockchain-based Federated Learning Systems](https://hacdias.com/2022/09/07/thesis-blocklearning-framework/).
- Published paper on [BlockLearning: A Modular Framework for Blockchain-based Federated Learning](/2023/02/16/paper-blocklearning-framework/).
- Member of the Website and PR Committees of Student Film & Photography Association [Dekate Mousa](https://dekatemousa.nl/).

{{</ resume-position >}}

{{< resume-position title="BSc Information Systems and Computer Engineering" location="Instituto Superior Técnico" href="https://tecnico.ulisboa.pt/" from="2017" to="2020" grade="16 out of 20" >}}

- Awarded an Academic Merit Award in 2 years.
- Volunteered as Student Mentor for 2 years.

{{</ resume-position >}}

## 📦 Projects {#projects}

{{< resume-position title="Open Source Projects" from="01/2015" to="present" >}}

- Author, maintainer and contributor of several open source projects. You can find most of my open source contributions on my [GitHub](https://github.com/hacdias) profile. I highly value open-source projects.
- Creator of [File Browser](https://github.com/filebrowser/filebrowser), a Go and Vue.js self-hosted file hosting service. It counts with over 20K stars on GitHub and over 50M downloads across different platforms. Currently maintained by the community.

{{</ resume-position >}}

{{< resume-position title="Personal Website" from="07/2014" to="present" >}}

- Building and maintaining my statically-generated personal website since 2014, which receives over 10K unique visitors per month.
- Built [Eagle](https://github.com/hacdias/eagle), a custom backend in Go, to experiment with different ideas over time, such as ActivityPub, Webmentions, Tailscale and other integrations with third party services, etc.

{{</ resume-position >}}

## 💙 Volunteering {#volunteering}

{{< resume-position title="Content Writer" location="Pplware" href="https://pplware.sapo.pt" from="06/2013" to="09/2016" >}}

- Wrote over 400 tutorials, tech news and other articles on both [Pplware](https://pplware.sapo.pt/author/henrique_dias/) and [Pplware Kids](https://kids.pplware.sapo.pt/author/henrique_dias/).
- Published a 60 page [e-book](https://cdn.hacdias.com/media/aprenda-a-programar.pdf) on how to program in C for beginners when I was 15 years old.

{{</ resume-position >}}

<div class='box small' id='printing-hint'>
  🖨️ You can save or print the resume by going into the <a href="javascript:print()">printing menu</a>.
</div>

<script>
const params = new URL(document.location).searchParams

if (params.get('photo') === 'false') {
  const header = document.getElementById('resume-header')
  header.style['grid-template-columns'] = 'auto max-content'
  header.querySelector('figure').classList.add('dn')
}

for (const id of params.getAll('hide')) {
  let el = document.getElementById(id)
  el?.classList.add('dn')
  el = el?.nextSibling

  while (el?.classList.contains('resume-position')) {
    el.classList.add('dn')
    el = el.nextSibling
  }
}

for (const id of params.getAll('short')) {
  let el = document.getElementById(id).nextSibling

  while (el?.classList.contains('resume-position')) {
    el.querySelector('ul')?.classList.add('dn')
    el.querySelector('div > small + small')?.classList.add('dn')
    el = el.nextSibling
  }
}
</script>

---
title: Cyberattacks, Crime and Defenses
lastmod: 2021-02-24T16:37:41.015178055Z
---

Notes for the course [2IMS20](https://www.win.tue.nl/~setalle/CCD.html).

## Web apps and attack principles

**GET Parameters**:
- Passed in the URL
- Vulnerable to XSS[^eavesdropping]
- Only to request data, not modify[^eavesdropping]
- Recorded in browser history[^eavesdropping]

**POST Parameters**:
- Parameters hidden
- Data sent to server on HTTP request body
- Does not get recorded in browser history[^eavesdropping]

**HTTP Week Sessions** (exception: HTTP keep-alive, reuse TCP)
- HTTP is connectionless and stateless, does not have a state.
- All info needed to process a request is stored in the browser

**SSL**: Secure Sockets Layer. Protocol that allows authentication, encryption of data over the Internet.

[^eavesdropping]: Prevents only eavesdropping (Internet Cafe Attacks)

### OWASP Top 10

1. **Injection**: untrusted data sent to interpreter.
   - **Prevention**: using prepared statements, stored procedures, whitelist input validation, escaping all user supplied input.
2. **Broken Authentication**: app functions related to authentication and session management are implemented incorrectly. Allows attackers to assume others' identities.
   - **Prevention**: multi factor authentication, no default credentials, password checks, limit login attempts, client side secure session manager to create random session IDs.
3. **Sensitive Data Exposure**: sensitive data may not be protected well.
   - **Prevention**: classify data, controls per classification, don't store data unnecessarily, encrypt resting sensitive data, proper key management, encrypt data in transit, disable caching for responses that contain sensitive data.
4. **XML External Entities (XEE)**: old XML processors evaluate external entities references within XML documents. External entities can be used to disclose internal files using the file URI handler, internal file shares, internal port scanning, remote code execution, DDoS attacks.
   - **Prevention**: use less complex data formats such as JSON, avoid serializing sensitive data. Patch/upgrade all XML processors. Disable XML external entities and DTD processing in XML parsers. Whitelisting for server side input validation.
5. **Broken Access Control**: restrictions or what authenticated users can do is not properly enforced.
   - **Prevention**: deny by default, implement access control mechanisms once and reuse in the app. Model access controls should enforce record ownership rather than group privileges. Disable webserver listing and ensure file metadata/backup files are not in the web root. Log access control failures and alert. Rate limit APIs.
6. **Security Misconfiguration**: misconfigured HTTP headers, verbose errors messages with sensitive information, open cloud storage.
   - **Prevention**: minimal paltform without unnecessary features. Review/update configs. Segmented application architecture that provides effective, secure component separation. Repeatable hardening process to verify effectiveness of configs and settings in all environments.
7. **Cross-Site Scripting (XSS)**: allows attacker to execute scripts on victims browser. Occurs when an app includes untrusted data without proper validation or updates on existing page with user supplied data.
   - **Prevention**: use frameworks that automatically escape XSS by design, escaping untrusted HTTP requests based on the context of HTML output. Context sensitive encoding when modifying browser document on client side. Content Security Policy (CSP) headers.
8. **Insecure Deserialization**: leads to remote code execution.
   - **Prevention**: integrity check, enforce strict type constraints, isolate and run code that deserializes in low profile environments.
9.  **Using Components with Known Vulnerabilities**: self explanatory. Can cause data loss.
    - **Prevention**: remove unused dependencies, features. Always check for vulnerabilities. Only use official apps. update and patch.
10.  **Insufficient Logging & Monitoring**: coupled with missing or ineffective integration with incident response, allows attackers to further attack systems, maintain persistence.
     - **Prevention**: ensure all login, access control failures and server side input validation is logged with sufficient context. Establish effective monitoring/alerting systems. Establish and adapt incident response and recovery plans.

**Cookies**
- Used to implement sessions
- Domain + path (subdomain should be a sub of cookie domain)
- HTTP responses may contain cookies that set a value in the browser
- Can be viewed/changed easily on the client side manually (Temperdata for example)

**Supercookie**
- Associated to first level domain maintainer by Internet Providers.
- Tracking via IP
- Often blocked by browsers

**BeEF Project**
- The Browser Exploitation Framework (BeEF)
- Fingerprinting, adapt response to request

## SQL Injection

- Processing in the DB
- **Prevention**
  - Bind variables (distinguish code and data)
  - Sanitization
  - Minimize DB privileges

### XSS

- Processing in the browser
- **Types**
  - Reflected (non-persistent): `work.com/error.php?message=<script>...</script>`
  - Stored (persistent): post message on forum containing `<script>`, harder to see.
- **Browser Rules**
  - Arbitrary scripts can't read cookies
  - Cookies cannot be read from another domain
- **Prevention**
  - Sanitization
  - Signature-based Filters

---

- Scripts are incorrectly assumed to contain code and not data.
- Persistent cookies aggravate the risk.

## Concepts

- **Cyber Kill Chain**
  1. Recoinassance
  2. Weaponization
  3. Delivery
  4. Exploitation (first infection)
  5. Installation
  6. Command and control
  7. Action and objectives
- **Zero-day exploit**: you don't know it's there!
- **Exploit**: carry a payload/code to use a vulnerability

## Targeted attacks

- Attacker has specific interest in your business.
- High impact and success rate.
- Reconnaisance takes long time.
- Low number of attacks and victims.
- **Examples**: speer phishing, botnet, supply chain.

**Watering Hole Attacks**
- Attack website that is often used by targeted victims
- When victim visits target website, they are infected via exploit

**Living off the land**
- Obtain credentials without malware (e.g. social engineering, look over the shoulder)
- Once inside the network, use credentials to do damage through legitimate channels
- Hard to detect

## Untargeted attacks

- Attackers don't discriminate
- Low success rate
- Small reconaissance
- High number of victims and attacjers
- **Examples**: phishing, etc.

## Critical infrastructure (targeted attacks)

**SCADA**
- Supervisory Control And Data Acquisition
- Sends commands to programmable Logic Controllers (PLC)
- Uses specialized, proprietary protocols
- Used to be isolated, now often remotely controlled

**Stuxnet (2009)**
- Breakthrough of cyber-physical attacks
- Broke centrifuges in Iranian nuclear enrichment plant
- Got inside the network through USB stick with 0-day exploits
- Targeted attack, but spread all over the world
- Provided false feedback to controllers
- How
  - USB Stick of Maintenance people
  - Phase 1
    - Get inside LAN with USB sticks
    - Inside LAN: sticks on print spoolers, etc
    - Rootkit installation for invisibility
    - Checks which antivirus is active and chooses target vulnerability
  - Phase 2
    - Looks for systems running wincc and scans management preys
    - Finds them even offline (USB sticks)
    - Attack by
      - Hard wired pwd (wincc)
      - Uploads as stored procedures
    - Hooks into specific DLLs to communicate with PLCs
    - Replaces PLCs code
    - Hides by rootkit techniques
  - Phase 3
    - Designed to hit specific port
    - Changes output frequencies and notes speeds gradually over months
    - Changes UI so that change is not seen behind the console
- Duqu:
  - info gathering + keylogger
  - spreading: MS Word document with a 0day exploit that waits until computer is idle for 10 mins + other conditions. Copies itself into a shared folder
  - building platform: same vector with stuxnet, different payload. By default, wipes itself off after 30 days.

--- 

**Flame**
- Information collecting malware
- Lateral movement: print spooler and LNC explloit (same as Stuxnet)
- MD5 hash collision attack that enabled Flame to masquerade as a proxy for Windwos Update
- Collected info: sent to remote C&C servers. If no network, save gathered info to USB and infect other computers of the network.

**Gauss**
- Steal credentials.
- Goedel module is encrypted in such a way that it can only be decrypted in the target system => protected from reverse engineering.

**Red October**
- Governmental and diplomatic espionage
- Low profile infection, well organized and orchestrated
- Resistant to C&C takeover
- Ressurection module

---

**HAVEX**
- Goal: gather information and gain persistent access
- Focus on energy companies
- Likely state-sponsored
- Different vectors: emails, watering hole attacks, vendor websites, etc.
- Targeting legitimate software bundles of 3 ICS manufacturers
- Analysis by timestamps
- Detection: network scan movement, C&C connection

**BlackEnergy 3 (2015)**
- Attack on Ukranian power grid
- Dropped through phishing attachment
- Network reconnaisance and develop malware using in-house devices
- Attack transmission substations by opening breakers
- DoS attack on customer support
- Stages
  - Stage 1
    - Spear Phishing by Word doc
    - BlackEnergy 3 connected to C&C
    - attackers toe sbalish permanent  access
    - Credential harvest (keylogger) to connect to VPN
  - Stage 2  - prep
    - How to interact with DMS + noise.
    - Malicius firmware for serial to ethernet devices
    - Install KillDish
  - Stage 2 - attack
    - upload new firmweare to s2e devices
- detection
  - C&C connection
  - network whitelisting in internal network

**Industroyer (2016)**
- Attack on Ukranian power grid (again)
- More automated than BlackEnergy
- Attacked distribution substations
- First malware specifically for Electrical Grids
- Modular and specialized components

**Indian Energy Sector (2019)**
- Malware: DTrack (keylogging, gather host IPs, info on networks, etc)
- Reconnaissace ce and dropper for other malware payloads

## Case studies

**CryptoLocker (2013)**
- Breakthrough of ransomware
- Encrypts host data

**Petya (2016)**
- Overwrites boot record (no encryption)
- Spreads without human intervention

**WannaCry (2017)**
- Highest damage ransomware
- Encrypts host data
- Spreads without human intervention
- Used ExternalBlue (SMB) exploit

**NotPetya (2017)**
- Encrypts host data
- Asks for ransom, but files are never decrypted (actually not a ransomware)

**Equifax Hack (2017)**
- Exposed personal data
- Used vulnerability in Apache web server

**DDoS**
- Prevention: make it harder to use (e.g. banned by PayPal)
- Rate limit requests

## Building automation security

**Operational Technology (OT)**
- Hardware and software that controls or monitors physical processes
- Building Automation Systems (BAS)
- Programmable Logic Controllers (PLC)
- Supervisory Control And Data Acquisition (SCADA)
- Industrial Control Systems (ICS)

**Building automation network**
- Management: workstations
- Automation: monitoring and building controllers
- Field: room controllers, cameras
- BACnet often used over all layers

**Attacking BAC**
- Build mockup with common controllers and software

**Protocols**
- BACnet: used for control
- RTSP: control cameras
- RTP: audio/video transfer for cameras

**Prevention**
- Monitoring
- Network segregation

## Evolution of attacks

**Targeted ransomware**
- Growing in popularity
- Higher damages

**Maastricht ransomware attack**
- Started with phishing
- Lateral movement (e.g. privilege escalation through outdated OS vulnerability)
- Disable antivirus
- Actual ransomware attack

**Targeted phishing**
- The volume of phishing is going down, because attacks are more targeted

**Other results from 2020 SonicWall report**
- Formjacking new entry
- Living off the land and supply chain attacks are increasing
- Mobile malware increasing
- IoT attacks increasing
- Use of 0-days decrasing

## Read teaming in OT

**Red teaming**
- Independent group
- Targeting organization as a whole
- Goal: improve cyber resilience

**Risks of red teaming**
- Damages caused by side effects
- Incorrect attribution of real attacks
- Loss of trust from employees

**Trends**
- Spear phishing
- Watering hole
- Supply chain
- Off-the-shelf capabilities
- Living off the land
- Codification of OT knowledge
- Attack amplification (damaging infrastructure, disrupting incident response)

## IoT and detection

**IoT**
- Potential for physical damage
- Move to IP increased risk
- Commonly targeted for botnets

**Rejection-based detection (knowledge-based)**
- Signatures
- Heuristics
- False positive problem
- Largely ineffective

**Acceptance-based detection (behaviour-based)**
- Allowlist (manual)
- Anomaly detection (automatic)
  - Flows (quantitative, analyse patterns in network)
  - Payload (qualitative, analyse individual packets)
- Only effective for predictable environments (such as OT)

Both rejection and acceptance-based can be configured with *different accuracy levels* to balance false positives and false negatives.

## Monitorability

**Criticism on defense methods**
- Prevention: there will always be bugs
- Knowledge-based detection: you don't have all the knowledge
- Specification-based detection: only useful for unchanging environments (IoT)
- Black box anomaly detection: poor actionability, false positives problem

**How to evaluate intrusion detection systems**
- False positives, false negatives
- Actionability
- Adaptability
- Scalability

**What should we do**
- Write software to make it easier to monitor (supervise)
- How? We don't know
- But it should be easier than writing secure software

## Defensive policies

**Example of policies**
- Change password often
- Encryption

**Encryption in ICS networks**
- No extra security in SCADA
- Can negatively affect security
- Complicated troubleshooting
- Why: the endpoint is much more vulnerable than the cable

**So long, and no thanks for the externalities**
- Users rejection of security advice is rational from economic perspective
- Indirect costs to individual users are small

**Where do all the attacks go**
- Many attacks cannot be made profitable, even when many profitable targets exist
- There are many more users than attackers

**Unfalsifiablity of security claims**
- Evidence to provide insecurity is easy, evidence to prove security is hard
- Potential way to "prove" security: collect data on attacks

## Zero trust

- Identify critical assets
- Segment the network
- Enforce policies
- Monitor

## Cybercrime markets

**Information assymetry**
- Information must be shared between buyer and seller
- Information must be verifiable
- Otherwise all good sellers are pushed out of the market

**Adverse selection**
- Buyer/seller cannot evaluate each other

**Moral hazard**
- Buyer/seller change their behavior after sale (break of trust)

**Mitigation**
- Reputation systems
- Third party moderation
- Escrowing

**Multi-signature escrow**
- Need 2 out of 3 parties to approve
- Reduce risk of exit scam (by market owners)

## Human factor in cybercrime (Leukfeldt)

**Rule factors**
- background characteristcs
- Value
- Visibility
- Accessibility

**Risk factors for cybercrime victims**
- Young people
- Spend time online
- Low self control
- Online routine activities

**Characteristics of offenders**
- Young, male
- Some influence of friends
- Shift from offline to online

**What made the research possible**
- Access to police reports
- Wire taps/interrogations/searches

**Findings**
- Core members have offline social ties
- Technical skills are found online
- Money mules are recruited offline
- Most people involved are non-technical
- Dark net markets have offline dimension

## Advanced social engineering

**Elaboration Likelihood Model (ELM)**
- How humans change their attitude
- Peripheral route: unconscious communication (system 1)
- Central route: stimuli carefully processed (system 2)

**Human persuasion factors**
1. **Reciprocation**: subjects feels obligated to help each other (normative commitment).
2. **Consistency**: subjects tend to be consistent with previous decisions, even if those were bad (continuance commitment).
3. **Social proof**: subjects act similar to peers (affective commitment).
4. **Likeability**: subjects trust people they like.
5. **Authority**: subjects fear punishment.
6. **Scarcity**: subjects react impulsively when the offer is "limited".

**Single-stage**: target all customers of mybank.com
**Multi-stage**: gather information for second stage (spear phishing)

**Human cognition model**
- Sensory input buffers
- Working Memory (WM)
- Long-Term Memory (LTM)
- Central Executive (CE)

**Information Processing Model**
1. **Stimulus**: sensory information that triggers a cognitive process.
2. **Perception**: translates the stimulus into "percepts" and fetches memories from LTM.
3. **Attention**: modulates access to consciousness.
4. **System 1**/**System 2**: fast/slow thinking.
5. **Behavior**

**Most SE attacks try to exploit system 1**
- Match target parameters (timing, language)
- Poisoning perception (priming)
- Competing with system 2 (scarcity, authority)
- Avoiding anomalies (typos, detection of spoofing)

## People are not the weakest link (Wetzer)

- How to influence behavior?

**What we typically do**
- Make people aware
- Make rules
- Convey **knowledge**

**What we should do**
- Focus on behavior rather than awareness
- Behavior = awareness * motivation * opportunity
- Need to reach minimum threshold for all three factors in order to affect behavior
- Be very specific when describing behavior

**Ability**
- Knowledge
- Skill

Solution: educate

- Inform (knowledge)
- Train (skill)

**Motivation**
- Can be intrinsic/extrinsic
- Self efficacy (do you think you can do it)
- Self determination (how much effort do you put into it)

Solution: motivate

- Motivate informal leaders
- Show the risk

**Opportunity**
- Person is unable to do what they should

Solution: facilitate

- Make things easier

## Malware evolution

**Hacker evolution**
- From: security enthusiasts, do-it-all, innovate
- To: economic attacker, composite model, scale up

**Commoditization**

- **Spam**: selling products
- **Extortion**: ransomware
- **Fraud:** fake clicks on ads, pump and dump, credit hard theft
- **Scareware**: fake antivirus
- **Booter service**: DDoS
- **Explot-as-a-service**: exploit kitsj

<div class="box red word" data-word="Disclaimer">

This notes are not yet finished. As of right now, they're heavily based on a friend's (Nimo), notes which you can find [here](https://www.notion.so/Exam-preparation-944e9fd3317e41edaa72849ef02de048).

</div>

<!--
 
Encryption in Building Automation Systems (BAS) is:Available but rarely used

An attacker could perform a Man in the Middle attack to a Surveillance System (IP Cameras + Network Video Recorder) if: He has access to at least one device on the local network

What framework is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations. MITRE ATT&CK

What would not be a typical objective for a nation state attacker when targeting OT- infrastructures? Extortion for money

WHAT WOULD BE: Strategic signaling that they possess a capability and are able to use it.
Establishing persistent access for future attacks
Disrupting the target’s mission

The ransomware attacks on Garmin (July 2020) and the one against the University of Maastricht (December 2019) are two examples of a new type of attack. Explain, in one page max, (a) why are they new (b) how the business model of the attacker is different than that of older ransomware attacks (c) what has changed in the last years in terms of technical possibility of the attackers that makes it possible to carry out such attack today.
key point: targeted vs non-targeted
Substantial Additional Arguments
Full discussion

Leukfeldt and Yar in "Applying routine activity theory to cybercrime: A theoretical and empirical analysis." (Deviant Behavior, 2016) used Routine Activities Theory to examine the relationship between “value”, “visibility”, “accessibility”, “technical capable guardianship”, and “personal capable guardianship” and an increased risk of victimization of six cybercrimes. The results show that "Visibility" is significantly related to victimization via: malware, threat, consumer fraud.

According to what reported in Leukfeldt, Rutger et al., "The Use of Online Crime Markets by Cybercriminal Networks: A View From Within." (American Behavioral Scientist, 2017), which functions do online offender convergence settings have for cybercriminal networks? Learning, market, social, all.

Behaviour is defined as a function of ability, motivation, and opportunity. Which of the following options are true? Select all that hold:
All conditions must always be present to obtain the desired behaviour.
To change those conditions, it is important to always perform a tailored evaluation of the conditions in an organization, for the specific employees whom behaviour one wants to change.



Stimulus, perception, attention, System-1/2 cognition, behaviour, and {attacker,target} parameters constitute the "building blocks" of the human cognitive process. Which of the following statements is true?
Perception is in charge of translating stimuli in "percepts" generated from long term memory and put in working memory. These percepts are then passed on in the computation process and can influence its outcome. 
The attacker parameters describe what the attacker assumes of the target. The more overlap between the attacker assumptions and the real target parameters, the more likely it is the target will fall for the attack.


Explain the problem of information asymmetry in the underground markets, and how anonymous (i.e., TOR-based) ecommerce platforms and forum-based markets address it. Hint: break down discussion over the principles of adverse selection and moral hazard.

Which of the following impersonation models is DKIM effective against? address spoofer
-->

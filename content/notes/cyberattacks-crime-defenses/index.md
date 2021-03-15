---
title: Cyberattacks, Crime and Defenses
lastmod: 2021-03-05T12:24:58.996063155Z
---

<div class="box yellow word" data-word="Disclaimer">
	These are notes for the 2IMS20 course at TU/e.
</div>

## Web apps and attack principles

**GET Parameters**:
- Passed in the URL
- Vulnerable to XSS\*
- Only to request data, not modify\*
- Recorded in browser history\*

**POST Parameters**:
- Parameters hidden
- Data sent to server on HTTP request body
- Does not get recorded in browser history\*

\*: Prevents only eavesdropping (Internet Cafe Attacks)

**HTTP Week Sessions** (exception: HTTP keep-alive, reuse TCP)
- HTTP is connectionless and stateless, does not have a state.
- All info needed to process a request is stored in the browser

**SSL**: Secure Sockets Layer. Protocol that allows authentication, encryption of data over the Internet.
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

## Ransomware

**Ransomware** encrypts your files and asks for money to unlock them.

## Case studies

**CryptoLocker (2013)**
- First with serious and replicable business case.
- Vector: spam email attachment with hidden extension.
  - creates a window and activates a downloader (trojan)
  - spreading through a botnet
  - RSA encryption
- Breakthrough of ransomware
- Encrypts host data

**TeslaCrypt**
- Smart encryption of specific files

**SimpleLocker**
- Mobile ransomware for android

**Petya (2016)**
- Overwrites boot record (no encryption), files are there but cannot be easily accessed
- Spreads: attachments then without human intervention

**WannaCry (2017)**
- Highest damage ransomware
- Encrypts host data
- Spreads without human intervention, like a worm
- Used ExternalBlue (SMB) exploit

**NotPetya (2017)**
- Spread: no human intervention, various mechanisms
- EternalBlue + EternalRomance exploits
- Encrypts host data with random encryption key (cannot be reverted!)
- Asks for ransom, but files are never decrypted (actually not a ransomware)

**Equifax Hack (2017)**
- Exposed personal data
- Used vulnerability in Apache web server
  - HTTP header manipulation
- Needs quick action since it allows for direct attacks and opportunistic attacks

**DDoS**
- Prevention: make it harder to use (e.g. banned by PayPal)
- Rate limit requests
- Can be
  - Sophisticated: specialized, by professionals
  - Unsophisticated: low cost DDoS, subscription model
- There are websites where users can buy DDoS attacks

**Apt 28 and 29**
- 28
  - Subverting democracy, information exfiltration
  - Against US and Europe governments + WADA (2016)
- 29
  - Targetrs multiple industries
  - Phishing with zip with Cobalt Strike Beacon (customized to blend in with usual traffic)
  - Shared tech artifacts
  - Known for fast transition from phishing implants after initial compromise
## Building automation security

**Operational Technology (OT)**
- Hardware and software that controls or monitors physical processes
- Exs:
  - Building Automation Systems (BAS)
    - Encryption available but rarely used.
  - Programmable Logic Controllers (PLC)
  - Supervisory Control And Data Acquisition (SCADA)
  - Industrial Control Systems (ICS)

**IT vs OT (e.g. ICS)**
- IT
  - Thousands of hosts, hundreds of applications.
  - Devices' behavior difficult to predict.
  - Behavior patterns change frequently.
- OT
  - Different devices, protocols.
  - Proprietary protocols.
  - Privileges availability over security.
  - Difficult to patch.
  - Non-standard.
  - Closed system.
  - Legacy systems without security in mind.
  - No auth nor integrity check.
  - Impossible to use preventive measures.
  - Impossible to use host-based systems.
  - Same operations over and over.
- For the defender:
  - OT is more predictable but in OT signature based systems don't work.
  - Whitelisting works better in OT than in IT.
- OT requires more knowledge.

**Critical Infrastructure**
- Assets that are essential for the fixing of a society/economy.

**OT Risks**
- OT networks are no longer physically separated
- Threats vary between cyber and physical dimensions
- Vulnerable assets that can be rarely patched
  **Logging systems** (usually)
  - No encryption
  - No authentication
  **Connectivity** (usual)
  - Default ports
  - Default passwords

**Attacking BAC**
- Build mockup with common controllers and software

**Protocols**
- BACnet: used for control
- RTSP (Real time streaming protocol): control cameras (TCP)
- RTP (real-time transport protocol): audio/video transfer for cameras (UDP)
- Only need access of one device in the network to make a MITM attack.

### Attacking smart buildings

**Building automation network**
- Management: workstations
- Automation: monitoring and building controllers
- Field: room controllers, cameras
- BACnet often used over all layers

**Scenario #1 - Disrupt HVAC**
- Leveraging BACnet protocols
- Can cause discomfort and data centers to go offline
- **Spoofing and DoS attacks**
  - Req: the attacker is inside the network
  - Req: the attacker knows BACnet protocol and simple scripting

**Scenario #2 - Tamper with Access Control**
- Leverage 0-days of building controllers
- Block/allow access to authorized/unauthorized users
- Gain access (ex: through surveillance system)
- Lateral movement until reaching the access control system
- Disrupt access control!

**Scenario #3 - Corrupt Suveillance Systems**
- Leveraging RTP/RTSP protocols
- Replacing footage with fake ones
- **Attack Anatomy**
  1. Establish a man in the middle
  2. Eavesdrop the traffic and record the video footage
  3. Replace RTSP command <get param> with <teardown>
  4. Replay the pre-captured stream to the NVR

**Prevention**
- Monitoring
- Network segregation
## Evolution of attacks

**Targeted ransomware**
- More reconnaissance, more disruptive
- Growing in popularity
- Higher damages

**Garmin ransomware attack (WastedLocker)**
- Users noticed and reported inaccessible website features.
- WastedLocker encrypts key data on company's digital infrastructure.
- This attack does not steal identifying information and hold it for ransom. Instead, it renders programs useless until decrypted (new attack!).
- Related to Evil Corp, a known hacking group.

**Norsk Hydro ransomware attack**
- Victim did not pay the ransom.
- Infected email from trusted customer.

**Maastricht ransomware attack**
- Started with phishing: malicious document containing SDBBot malware (Office macro).
- Lateral movement (e.g. privilege escalation through outdated OS vulnerability)
- Unnoticed antivirus warnings, disabled antivirus.
- Actual ransomware attack.
- Different tools and exploits used: Sage, Swaqp, CobalStrike, PingCastle, EternalBlue, Meterpreter, PowerSploit, etc.
- Why Maastricht? Random.
- New business model:
  - Service hostage, not data.
  - Single target, big ransom.
- 2 new malware families.
- ServHelper backdoor with two variants and FlawedGrace remote access trojan (RAT)

**Tunnel campaign**
- Delivered new variant of ServHelper
- Malware in MS Word macros by phishing emails.

**Downloader campaign**
- Similar to Tunnel but larger.
- Malware in documents via phishing emails.

**FlawedGrade campaign**
- Malware in fake Adobe PDF plugin, word documents, etc.

**ServHelper Analysis**
- Best classified as backdoor.
- Tunnel variant: set up reverse SSH tunnels, infect host via RDP. Establishes remote desktop access and then hijacks legitimate users.

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

**Mitigation**
- Screening of red team
- Clear coordination between teams
- Rules of engagement
- Ethical code of conduct
- Switching toa acceptance environment

**Purple Teaming**
- Integration of offense (red) and defense (blue) teams.

**Trends**
- Spear phishing
- Watering hole
- Supply chain
- Off-the-shelf capabilities
- Living off the land
- Codification of OT knowledge
- Attack amplification (damaging infrastructure, disrupting incident response)

**Supply chain attacks**
- Infiltration of well-protected orgs by using a trusted channel.
- Fast distribution as users upgrade the software.
- Targeting specific regions or sectors.
- Infiltration of isolated targets, such as industrial environments.
- Difficult for victims to identify attacks as trusted processed as misused.
- May provide attacker with elevated privileges during installation.

## IoT and detection

**IoT**
- Potential for physical damage
- Move to IP increased risk
- Commonly targeted for botnets

**Rejection-based detection (knowledge-based/blacklisting)**
- Methods: signatures, heuristics.
- Pros: low false positives; intrusion prevention; when detected, have info on what it is; no reconfiguration needed when system is reconfigured.
- Cons: false negatives problem; no signatures for 0-days; timely to deploy; easy to evade signatures and heuristics.

**Acceptance-based detection (behavior-based/whitelisting)**
- Allowlist (manual)
- Anomaly detection (automatic)
- Only effective for predictable environments (such as OT)
- Pros: don't need to know the attack; low false positives if correctly configured.
- Cons: easy to deceive unless very accurate; expensive to setup and maintain; reconfiguration needed if system is reconfigured; gives little info about attack.

**Anomaly detection**
- Quantitative (flows): analyse patterns in network
  - False positives
  - Situational awareness
  - Cannot tell what's going on
  - "If there's too many things happening, there is something fishy going on".
- Qualitative (payloads): analyse individual packets
- Pros: little setup cost, may see 0-day attacks. Quantitative: gives interesting info. Qualitative: when it works is ideal.
- Cons: applicability depends heavily on particular instance of target system, buckets of false positives; give less information than whitelisting.

Both rejection and acceptance-based can be configured with *different accuracy levels* to balance false positives and false negatives.

**Where can you detect things?**
- Analyse the host data and processes.
- Analyse incoming and outgoing traffic.

## Monitorability

**Criticism on defense methods**
- Prevention: there will always be bugs
- Knowledge-based detection: you don't have all the knowledge
- Specification-based detection: only useful for unchanging environments (IoT)
- Black box anomaly detection: poor actionability, false positives problem

**How to evaluate intrusion detection systems**
- False positives, false negatives
- Actionability: how much info is given to prepare response.
- Adaptability: adapt to changing systems.
- Scalability: cost according to scale.

**Anomaly Detection (2)**
- Blackbox: ML approaches, too many false positives.
- Whitebox: works but on specific systems, good useability for SCADA. Not about intrusion detection, about understanding what happens in the target system.

**Supervisable software**
- Allows people who monitor it to understand what it's doing.
- Only way to make systems more secure.
- Supervisability x 

**What should we do**
- Write software to make it easier to monitor (supervise)
- How? We don't know
- But it should be easier than writing secure software

## Defensive policies

**Example of policies**
- Password: change often, length, composition, do not share, do not write down, do not reuse.
- Encryption

**Encryption in ICS networks**
- No extra security in SCADA
- Can negatively affect security
- Complicated troubleshooting
- Why: the endpoint is much more vulnerable than the cable

**Needed**
- User/device authentication
- Message authenticity

**E2E for**
- Long haul connection over untrusted networks.
- Confidentiality when it is crucial.

**Attacks**
- Online: no way to try all possibilities
- Offline: can eavesdrop and look at the password
- **Cost/benefit of attack**
  - Direct cost: zero sum
  - Indirect cost: high to masive

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
  - Add metadata: owner, security contact, data type, relevance score, etc.
  - Iterative process.
  - Demilitarized Zone is NOT a zero trust segment.
- Enforce policies
- Monitor
- Deny all by default
- Detect attacks most likely to cause damage (negative model, known vs unknown).
- Nothing allowed unless explicitly allowed (positive model, good vs unknown).
- Indicators of Compromise (IoC): known artifacts that indicate intrusion.
- Behavioral Indicator of Compromise (BIoC): detect process behavior, registry filed, network activity.
- Configurations: visibility and control, policy controls, inspection, validation of control coverage.

## Cybercrime markets

**Cybercrime market operations**
- Tech systems can be vehicle/target to crime. Migration of some offline crime to online.
- Problem? everything is illegal so you can't enforce contracts.

**Fair trade**
- Contracts between agents => market only works if contracts are valid/satisfied.

**Agency theory**
- Principal: asks for services
- Agent: provides services
- Principal X Agent: The information they have is key for market equilibrium.

**Information assymetry**
- Problem?
  - Agent knows more about the product than the principal.
  - Principal has no way of verifying that agents respected the contract.
- Information must be shared between buyer and seller
- Information must be verifiable
- Otherwise all good sellers are pushed out of the market

**Adverse selection**
- Buyer/seller cannot evaluate each other

**Moral hazard**
- Buyer/seller change their behavior after sale (break of trust)

**Markets**
- Competition leads to technological advancement.
- **Forum based**
  - Malware: niche market, repeated trade limited, vulnerability & exploit are complex.
  - Products hard to evaluate.
  - Closed access forums may enforce contracts.
  - Moral hazards
    - Fear of punishment
    - High cost of entry
    - History of trade
    - Reputation system
  - Adverse selection
    - Product samples
    - Feedback mechanism
- **E-commerce**
  - Drugs and illegal goods: larger market, customers come back, repeated purchases.
  - Anonymity is key.

**Onion (TOR) Services**
- Ensure network anonymity of both servers and participants.
- Requests pass through many onion routers.
- Circuits of requests always different.
- Example
  - Bob picks an introduction point and builds circuits to them.
  - Bob advertises his service (xyz.onion) at the DB.
  - Alice hears about xyz.onion and she requests more info from the DB. She sets up a rendezvous point (could be done before).
  - Alice writes a message to Bob (encrypted) listing the rendezvous point and a one time secret. Asks for an introduction point to deliver it to Bob.
  - Bob connects to Alice's rendezvous point and provides her with one one-time secret.
  - Bob and Alice proceed toi use their Tor circuits like normal.

**Mitigation**
- Reputation systems
- Third party moderation
- Escrowing

**Multi-signature escrow**
- Need 2 out of 3 parties to approve
- Reduce risk of exit scam (by market owners)

**Emergence of underground markets**
- A single entity cannot provide all aspects of a service usually since products nowadays and attacks are complex and require many different things.
- Spam to sell counterfeit products: victims tricked into buying counterfeit goods.
- Spam techniques are used to advertise: stolen email accounts, social networks, mobile phone/calls.
- **Click fraud**
  - Attackers register with ad network.
  - Infected systems to generate clicks as secure advertisement.
  - Hard to distinguish between legitimate and fake click.
- **Scareware**: uses social engineering + malware infection to scare users to buy a product.
- **Booter services**: DDoS attacks hired!
- **Exploit as a service and PPIs**: platforms to deliver malware. Self replicating malware is not attractive for monetization due to high visibility and visible effects.
  - Full infrastructure that
    - Selects potential targets with specific characteristics.
    - Redirects victim to an exploit kit.
    - Drops malware.
  - PPI:  pay per install

**Exploit Kits (EK)**
- Websites that serve vulnerability exploits and ultimately malware.
- Client side vulnerabilities affected.
- Drop malware and successful exploitation => fully controlable.
- Typically < 10 exploits.
- Defensive components
  - IP Blocking (majority)
  - Crawler aware
  - Obfuscation
  - Neither (minority)

**Third party traffic**
- Exploit kit only works if they receive victim traffic.
- Underground markets have services that trade connections.
- Attackers "buy" connections from specific users with specific configurations.
- EK owner buys connections from a traffic broker/hacker.
- Traffic broker attacks iframes on popular websites (e.g. through ads).
- User visits popular website and gets attacked.

## Human factor in cybercrime (Leukfeldt)

**Rule factors**
- background characteristics
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

**Social Engineering**
- Identified set of attack techniques to persuade humans to perform actions solicited by the attackers.

**Prescreening**
- Mediocre written email to check if victim is manipulatable.

**Elaboration Likelihood Model (ELM)**
- How humans change their attitude
- **Peripheral route** aka *System 1*
  - Unconscious communication
  - Susceptible to cognitive biases
- **Central Route** aka *System 2*
  - Stimuli carefully processed
  - Complex reasoning
  - Rational
  - Controlled

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
2. **Perception**: translates the stimulus into "percepts" and fetches memories from LTM. Passed on in the computation process and can influence its outcome.
3. **Attention**: modulates access to consciousness.
  - Exogenous: controlled by stimulus => automatic process
    - Exploited by attackers to leave our rationality and consciousness
  - Endogenous: consciously good oriented => By central executive
4. **System 1**/**System 2**: fast/slow thinking.
5. **Behavior**

**Most SE attacks try to exploit system 1**
- Match target parameters (timing, language)
- Poisoning perception (priming)
- Competing with system 2 (scarcity, authority)
- Avoiding anomalies (typos, detection of spoofing)

**Can be targeted**
- Extensive reconnaissance
- Privileged access to victim network

## People are not the weakest link (Wetzer)

- How to influence behavior?

**To change behavior**
- Behavior = Ability X Motivation X Opportunity
- Define expected behavior
- Assess what is withholding people
- All conditions must be present to obtain desired behavior.
- To change conditions, it is needed to perform evaluation of the conditions in an organization, for the specific employees whom behavior one wants to change.

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
- **Exploit-as-a-service**: exploit kits

## Impersonation in Email

**Impersonation Model**
- Address spoofs allowed by the STMP protocol
- Name spoofer
- Lateral attackers spoofed real identity

**DomainKeys Identified Mail (DKIM)**
- Designed to detected forged sender address (address **spoofing**)
- DKIM works by:
  - Add signature to the headers of an email message
  - Signature can be validated against a public key that is located in the domain's DNS in a TXT record
  - The domain owner must publish the key

**DMARC (Domain-based Message Authentication, Reporting and Conformance)**
- DMARC policy allows the sender to indicate that their email is protected by DKIM (address **spoofing**)
- Tells the receiver what to do if the checks don't pass
- Published in DNS records

## Others

- MITRE ATT&CK os a globally accessible knowdlege base of adversary tactics and techniques based on real-world observations.

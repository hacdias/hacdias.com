---
title: Verification of Security Protocols
lastmod: 2021-03-06T08:14:48.602411188Z
---

<div class="box yellow word" data-word="Disclaimer">
	These are notes for the 2IMS15 course at TU/e. This content may be based on the course material, and thus, copyrighted. This notes are not extensive.
</div>

**Agents**
- **Honest**: participate in the protocol in cooperation to achieve the protocol goal.
- **Dishonest** (aka **attackers**): claim to be regular participants, but try to subvert the protocol or act on their own advantage against the protocol rules. Examples:
	- Compromised machines where attackers got hold of cryptographic keys.
	- Compromised users that somehow got their cryptographic keys certified.
	- Electronic merchants that falsely deny receiving a payment, clients of electronic merchant that falsely deny making an order.

**Channels**
- **Trusted**: no hostile agents have access to the communication medium to interfere with the protocol.
- **Untrusted**: hostile agents that do not participate in the regular protocol have access to the communication medium and have an interest in subverting the protocol.
	- How?
		- Eavesdropping.
		- Redirecting messages.
		- Modifying messages.
	- Examples:
		- Internet.
		- Internet banking.

**Communication Protocol**
- Set of rules that governs the interaction between agents.
- Examples:
	- TCP governs computer interactions over an IP network.
	- HTTP governs the exchange of data in HTML format.
	- SMTP governs the exchange of e-mail.
- Usually assume:
	- Trusted channels.
	- Honest participants.

**Security Protocol**
- Communication protocol
- Assumes:
	- Untrusted channels; and/or
	- Among untrusted agents.
- Often to provide security services, such as authentication.
- Use cryptographic primitives:
	- Symmetric and asymmetric encryption.
	- Digital signatures.
	- Cryptographic hash functions.
	- Message authentication codes (keyed hash functions).
	- Random number generation.
- Defined by standards: TLS is defined by RFC2246 (80 pages) for example.

**‌Cryptographic Algorithms**
- Symmetric encryption: DES, AES, IDEA, etc.
- Public key encryption: RSA, etc.
- Digital signing: ElGamal, DSA, etc.
- Cryptographic hash functions: SHA256, MD5, etc.
- Cryptographic algorithms alone is not enough. Even with the perfect crypto algorithm, things may go wrong.

**Security Protocol Goals**
1. **Secrecy** (aka confidentiality): prevention of unauthorized disclosure of information. Weak version: attackers cannot deduce content of messages. Strong version: attackers cannot deduce content, length or any other information of the messages.
2. **! Authentication**: verify that claimed identity of a user (user auth); verify that a message comes from the agent it claims to come from (message auth).
3. **! Integrity**: prevention of unauthorized modification of information. Can be seen as an instance of message authentication.
4. **Anonymity**: prevent identification specific properties of individual events within a set of events. Examples: voter anonymity, anonymous network.
5. **Unlinkability**: attacker cannot make connections between events. Example: attacker cannot understand whether an RFID tag he has seen is now communicating with the base station or not.
6. **Non-repudiation**: preventing a sender (receiver) of a message from falsely denying that he has sent (received) the message. Example: a merchant may deny that he has received a payment, a client may deny that he made an order.
	- **Fairness**: no participant can gain advantage over another by aborting a protocol. Example: online payments.
	- **Availability**: prevention of unauthorized withholding of services and resources. More related to safety than security. Except DoS which is security.
		- Safety: things don't go wrong when no attacker is present.
		- Security: things don't go wrong when an attacker is present.
7. **Privacy**: outside of the scope of the course. Complex notion. Can involve secrecy, but more complex. Also related to unlikability. Not about **who** may want to use the data, but for **which purposes**.
8. Others... this list is non-exhaustive.
	- Overlap: anonymity and strong secrecy, message authentication and integrity.
	- Incompatible: anonymity and authentication.
	- Etc.

**Common Security Protocols**
- Transport Layer Security (SSL/TLS): secrecy, authentication, message integrity.
- Network Layer Security (IPsec): secrecy, authentication, message integrity. Example: VPN.
- Application Layer Security (S/Mime, PGP): secrecy, authentication and message integrity
- Wireless Security (WEP, WPA): (partial) secrecy, user authentication, message integrity.
- Distributed computing environment (Kerberos): user authentication in distributed computing at university for example.
- Smart card authentication.

**How to find attacks**
- Fully automatic
	- **Model checking**: finite state machine whose states are all possible intermediate states of protocol runs. Limited by black box secret protocols due to infinite state (possible parallel sessions).
	- **Theorem proving**: search for safety proof for the protocol. If a safety proof is found, then the protocol is indeed safe. Limitations:
		- Tools do not always terminate or terminate without finding proof.
		- Sometimes they can't find a proof.
		- Sometimes a protocol even if no poof exists.
- Interactive
	- **Interactive Theorem Proving**: we find a proof ourselves and the tool checks its correctness.
	- **Type Checking**: annotate the protocol with types. An automatic type checker checks if the protocol is well-types. Type systems for security protocols are designed so that well-types protocols are robustly safe for secrecy and authenticity. Limitation: there are safe protocols that cannot be proven safe by type checkers.

**Attacker model (Dolev-Yao DY)**
- Security verification thus also requires an attacker model.
- The attacker controls the communication medium. They an: eavesdrop, redirect and inject messages, apply cryptographic operation on the data, etc.
- Perfect cryptography assumptions
	- No message information without key.
	- No message modification without a key.
	- Perfect keys: cannot be guessed or extracted from ciphertexts.
	- Perfect random numbers: cannot be guessed.
	- Perfect hashes: one-way and collision-free.
	- "Injectivity" for all primitives.

**Threat models**
- **External threat model**
	- There are intruders.
	- All regular protocol participants are honest.
- **Internal threat model**
	- Possible external attacks.
	- Compromised participants.
	- Modeled by publishing the secrets of one of the agents (compromised user or machine, spy).

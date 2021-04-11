---
title: Verification of Security Protocols
lastmod: 2021-04-06T14:43:11.724828334Z
math: true
---

<div class="box yellow word" data-word="Disclaimer">
	These are notes for the 2IMS15 course at TU/e. This content may be based on the course material, and thus, may be copyrighted. This notes are not extensive.
</div>

## Agents

- **Honest**: participate in the protocol in cooperation to achieve the protocol goal.
- **Dishonest**: claim to be regular participants, but try to subvert the protocol or act on their own advantage against the protocol rules. Examples:
	- Compromised machines where attackers got hold of cryptographic keys.
	- Compromised users that somehow got their cryptographic keys certified.
	- Electronic merchants that falsely deny receiving a payment, clients of electronic merchant that falsely deny making an order.
- **Hostile agents** are both dishonest participants and outsiders are called **attackers**.

## Channels

- **Trusted**: no hostile agents have access to the communication medium to interfere with the protocol.
- **Untrusted**: hostile agents that do not participate in the regular protocol have access to the communication medium and have an interest in subverting the protocol.
	- How?
		- Eavesdropping.
		- Redirecting messages.
		- Modifying messages.
	- Examples:
		- Internet.
		- Internet banking.

## Communication Protocol

- Set of rules that governs the interaction between agents.
- Examples:
	- TCP governs computer interactions over an IP network.
	- HTTP governs the exchange of data in HTML format.
	- SMTP governs the exchange of e-mail.
- Usually assumes: trusted channels, honest participants.

## Security Protocol

- Communication protocol.
- Usually assumes: untrusted channels and/or dishonest agents.
- Often to provide security services, such as authentication.
- Use cryptographic primitives:
	- Symmetric and asymmetric encryption.
	- Digital signatures.
	- Cryptographic hash functions.
	- Message authentication codes (keyed hash functions).
	- Random number generation.
- Defined by standards: TLS is defined by RFC2246 (80 pages) for example.

### Cryptographic Algorithms

- Symmetric encryption: DES, AES, IDEA, etc.
- Public key encryption: RSA, etc.
- Digital signing: ElGamal, DSA, etc.
- Cryptographic hash functions: SHA256, MD5, etc.
- Cryptographic algorithms alone is not enough. Even with the perfect crypto algorithm, things may go wrong.

### Security Protocol Goals

1. **Secrecy** (confidentiality): prevention of unauthorized disclosure of information.
2. **Authentication**: verify claimed identity of a user (user authentication); or verify that message comes from agent it claims to come from (message authentication).
	-	**Integrity**: prevention of unauthorized modification of information. Can be seen as an instance of message authentication.
3. **Anonymity**: prevent identification specific properties of individual events within a set of events. Examples: voter anonymity, anonymous network.
4. **Unlinkability**: attacker cannot make connections between events. Example: attacker cannot understand whether an RFID tag he has seen is now communicating with the base station or not.
5. **Non-repudiation**: preventing a sender (receiver) of a message from falsely denying that he has sent (received) the message. Example: a merchant may deny that he has received a payment, a client may deny that he made an order.
	- **Fairness**: no participant can gain advantage over another by aborting a protocol. Example: online payments.
	- **Availability**: prevention of unauthorized withholding of services and resources. More related to safety than security. Except DoS which is security.
		- Safety: things don't go wrong when no attacker is present.
		- Security: things don't go wrong when an attacker is present.
7. **Privacy**: outside of the scope of the course. Complex notion. Can involve secrecy, but more complex. Also related to unlikability. Not about **who** may want to use the data, but for **which purposes**.
8. Others... this list is non-exhaustive.
	- Overlap: anonymity and strong secrecy, message authentication and integrity.
	- Incompatible: anonymity and authentication.
	- Etc.

### Common Security Protocols

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

## Attacker model (Dolev-Yao DY)
- Security verification thus also requires an attacker model.
- The attacker controls the communication medium. They an: eavesdrop, redirect and inject messages, apply cryptographic operation on the data, etc.
- Perfect cryptography assumptions
	- No message information without key.
	- No message modification without a key.
	- Perfect keys: cannot be guessed or extracted from ciphertexts.
	- Perfect random numbers: cannot be guessed.
	- Perfect hashes: one-way and collision-free.
	- "Injectivity" for all primitives.

## Threat models
- **External threat model**
	- There are intruders.
	- All regular protocol participants are honest.
- **Internal threat model**
	- Possible external attacks.
	- Compromised participants.
	- Modeled by publishing the secrets of one of the agents (compromised user or machine, spy).

## Secrecy

- **Safe for secrecy**: a closed process $P$ is safe for secrecy iff $P \rightarrow^* Q$ implies that Q is not an error state. 
- **Error state**: when $Q$ = new $n_1$, ..., $n_i$; (secret($M$); | out $c$ $M$; $Q'$ | $Q''$ )
- **Robustly safe for secrecy**: a closed process $P$ is robustly safe for secrecy iff $P|O$ is safe for secrecy for all opponent processes $O$.
- **Notation**
  - $P \Downarrow c$: $P$ outputs on $c$.
  - $(P|O) \Downarrow c$: $P$ passes test $(O, c)$.
  - $P \simeq Q$: $P$ tests equivalent to $Q$ when $\forall O, c: (P|O) \Downarrow c \Leftrightarrow (Q|O) \Downarrow c$ .
- **Strong secrecy** (non-interference): $P$ preserves strong secrecy of its arguments iff $P(\overline M) \simeq P(\overline N)$ for all closed messages $\overline M$, $\overline N$.
  - Intuitive: attackers cannot deduce any information about the messages.
- **Conditional secrecy**: if not talking to spy, then message remains secret; is used to check for attackers in internal threats.

## Correspondence Assertions

Correspondence assertions are assertions added in the beginning and end of a session. Authenticity fails when an `end` does not correspond to any `begin`. An `end` must always have a `begin`. 

- `begin!(M); P -> !begun(M) | P`
- `begun(M) | end(M) -> stop`

## Safe for authenticity

A closed process P is safe for authenticity if P→<sub>*</sub>...(end(M) | Q) implies that Q ≡ begun(M) | Q'.

It is called **robustly** safe for authenticity if P | O is safe for authenticity for any opponent process O.

## Injective agreements

- A non-injective agreement is a many-to-one correspondence. There may be multiple "end" for one "begin". This allows for replay, which is not always a bad thing. However, it opens the door for replay attacks.
	- begin!(M); P -> !begun(M) | P
- An injective agreement is a one-to-one correspondence.
	- begin(M); P -> begun(M) | P

Example of protocol that is safe for authentication but not robustly safe for authentication:

- A begins Send(A, m, B)
- A → S: {|(A, B, m)|}<sub>kas</sub>
- S → B: {|(A, m)|}<sub>kbs</sub>
- B ends Send(A, m, B)
## Timeliness

Timeliness prevents accepting messaged that are older than acceptable. We usually use this with injective arguments and nonces.

## Tagging

Tagging is used to give messages a type. It allows preventing type flaw attacks by attaching a type to each message. That way, both sender and receiver can correctly parse it. Also known as dynamic types.

**Tagging**

- M ::= ∙ ∙ ∙ | L(M) | ∙ ∙ ∙
- Message M tagged by L.

**Untagging**

- P ::= ∙ ∙ ∙ | untag M is L(x); P | ∙ ∙ ∙
- Match the tag L and bind the tagged message to x.


## Types

- **Type Checking**: Checking that a program follows a certain set of rules.
- **Type Soundness**: If P is well-typed for secrecy, then P is robustly safe for secrecy. Being well-typed for secrecy means that n<sub>1</sub> : Un, ..., n<sub>i</sub> : Un ⊢ P : ok with n<sub>1</sub> : Un, ..., n<sub>i</sub> being the free names in P, holds in the type system.

Other:

- When typing in Abadi's type system for strong secrecy:
  - The names get a message in addition to a type.
  - The environment is ordered (sequence, not set).
  - The confounder (e.g. nonce), required for non-deterministic encryption, can only be used for one message so it needs to be linked to that message.
  - Lack of key-types, uses secret instead. 
  - Encryption only supports one type of message. We can think of it as implicitly tagged with sec-pub-any-confounder.
  - Split only allows Secret and Untrusted messages to be split, just like the rule Cond.
    - If not there would be the risk to distinguish n and (n, n). Example:
    - P(x) = split x is (y, z); out c pair
    - The process P would not output pair if x was not actually a pair. This breaks strong secrecy of x.
    - Arguments are of type Any.

## Confounder

- Each agent keep track of their own nonces.
- Secrecy:
  - Symmetric encryption: confounder does not need to be secret. Attacker cannot cypher text themselves so knowing the nonce won't help.
  - Asymmetric encryption: confounder must remain secret. Attacker can cypher text with public key so they cannot have nonce.

## Proverif

Proverif is a verification protocol software.

- **Phases**: global synchronization point. Processes start in phase 0.
  - `query attacker: x phase n` checks if `x` remains secret up to the end of phase `n`.
  - After moving to a new phase, all steps from previous phases are blocked.
- **Fairness**: for (x, y), both x and y occur or neither occur.
- **TTP**: a trusted third party.

## Example Protocols

- **eVoting protocol**
  - **Goals**: fairness, eligibility, privacy, individual verifiability, universal verifiability, receipt freeness.
  - **Phases**:
    - Legitimization phase: admin legitimizes the votes.
    - Voting phase: voters send votes to collectors.
    - Opening phase: collector publishes votes.
- **Certified email protocol**
  - **Goals**: fairness, non-repudiation of origin and receipt.
  - Sender should get receipt iff receiver gets message.
  - Problem? Fairness requires reliability of messages!

## (Some) Attacks

### Type Flaw Attack

A type flaw attack happens when there is margin for misinterpretation of formats, i.e., when the types are not well defined and that makes it easy for an attacker to manipulate the requests.

**Protocol example**

- A → B: ({s, p}<sub>k</sub>, {p', s'}<sub>k</sub>)
- B → A: (p, p')

**Attack**

- A → I: ({s, p}<sub>k</sub>, {p', s'}<sub>k</sub>)
- I → B: ({p', s'}<sub>k</sub>, {s, p}<sub>k</sub>) (Elements swapped)
- B → A: (s', s)

### Basic Attack

- A → B: A
- B → A: {|(Nb)|}<sub>pkA</sub>
- A → B: {|(Nb)|}<sub>pkB</sub>

**Attack**

- A → I: A
- I → B: A
- B → I: {|(Nb)|}<sub>pkA</sub>
- I → A: {|(Nb)|}<sub>pkA</sub>
- A → I: {|(Nb)|}<sub>pkI</sub>
- I → B: {|(Nb)|}<sub>pkB</sub>

### Needham-Schroeder Protocol (1978)

- A → B: {|(A, Na)|}<sub>pkB</sub>
- B → A: {|(Na, Nb)|}<sub>pkA</sub>
- A → B: {|(Nb)|}<sub>pkB</sub>

Problem:

- Na and Nb are disclosed

**Attack** (only found in 1995)

C "thinks" it's talking to A, while it's talking to B.

- A → B: {|(A, Na)|}<sub>pkB</sub>
- B(A) → C: {|(A, Na)|}<sub>pkC</sub>
- C → A: {|(Na, Nb)|}<sub>pkA</sub>
- A → B: {|(Nb)|}<sub>pkB</sub>
- B(A) → C: {|(Nb)|}<sub>pkC</sub>

**Solution**

- A → B: {|(A, Na)|}<sub>pkB</sub>
- B → A: {|(Na, Nb, B)|}<sub>pkA</sub> (add a B on the message)
- A → B: {|(Nb)|}<sub>pkB</sub>

### Denning-Sacco Key Distribution Attack

Goal: establish a symmetric key between A and B.

- A → B: {|{|kAB|}<sub>skA</sub>|}<sub>pkB</sub>
- B → A: {s}<sub>kAB</sub>

**Attack**

- A → M: {|{|k|}<sub>skA</sub>|}<sub>pkM</sub>
- M(A) → B: {|{|k|}<sub>skA</sub>|}<sub>pkB</sub>
- B → M(A): {s}<sub>k</sub>

**Solution**

- A → B: {|{|pkB, kAB|}<sub>skA</sub>|}<sub>pkB</sub>
- B → A: {s}<sub>kAB</sub>

**No Attack**

- A → M: {|{|pkM,k|}<sub>skA</sub>|}<sub>pkM</sub>
- M(A) → B: {|{|pkM,k|}<sub>skA</sub>|}<sub>pkB</sub>
- Will fail because pkM != pKB

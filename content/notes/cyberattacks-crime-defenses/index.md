---
title: Cyberattacks, Crime and Defenses
date: 2021-02-20T08:37:05.738832052Z
lastmod: 2021-02-24T16:37:41.015178055Z
---

Notes for the course [2IMS20](https://www.win.tue.nl/~setalle/CCD.html).
## Lecture 1

**GET Parameters**:
- Passed in the URL
- Vulnerable to XSS[^eavesdropping]
- Only tor request data, not modify[^eavesdropping]
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
5. **Broken Access Control**
6. **Security Misconfiguration**
7. **Cross-Site Scripting (XSS)**
8. **Insecure Deserialization**
9. **Using Components with Known Vulnerabilities**\
10. **Insufficient Logging & Monitoring**

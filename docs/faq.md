---
layout: page
title: F.A.Q.
---

### 1. Can I install only a Aspia Router or only a Aspia Relay to bypass NAT?
No. Both of these components must be installed. The Router is designed to issue address IDs, and it also helps the Host and Client agree on which Relay server to use.
The Relay is designed to relay traffic between the Host and the Client. There can be many Relay servers, but there is always one Router.

### 2. Can I install Aspia Router and Aspia Relay on one computer?
Yes. There are no obstacles to this, however, if there is a large number of computers (more than 500-1000) or if many simultaneous connections to Hosts are planned,
then it is recommended to place the Relay and Router on different computers (in this case, more than one Relay server may be required).

### 3. When connecting to the Host, a notification panel appears. How to hide it?
It's impossible to do. When connecting to a computer, the user must be explicitly notified that his computer is under remote control.
Aspia is not an application for hidden tracking of users. Antivirus companies also require this notification in order for the application to be on the antivirus white lists.

### 4. Is data transmitted over the network encrypted?
Yes. All data transmitted over the network is encrypted using encryption algorithms AES256-GCM or ChaCha20-Poly1305.
If both sides of the connection support hardware AES encryption, then AES256-GCM is used. Otherwise, ChaCha20-Poly1305 is used.

### 5. Is my connection protected from MITM attacks?
Yes. Algorithm [SRP](https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol) is used for authentication and authorization, which is resistant to man-in-the-middle attacks.
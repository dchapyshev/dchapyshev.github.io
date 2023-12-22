---
layout: page
title: Configuration for Mikrotik
---

If you are configuring port forwarding on your network router, then an example of setting for the Mikrotik router may come in handy:

```bash
/ip firewall nat
add action=netmap chain=dstnat comment="Aspia Relay" dst-port=8070 in-interface=WAN protocol=tcp to-addresses=RELAY_IP to-ports=8070
add action=netmap chain=dstnat comment="Aspia Router" dst-port=8060 in-interface=WAN protocol=tcp to-addresses=ROUTER_IP to-ports=8060
add action=dst-nat chain=dstnat comment="Aspia Relay" dst-address=EXTERNAL_IP dst-port=8070 protocol=tcp src-address=LOCAL_NETWORK to-addresses=RELAY_IP to-ports=8070
add action=dst-nat chain=dstnat comment="Aspia Router" dst-address=EXTERNAL_IP dst-port=8060 protocol=tcp src-address=LOCAL_NETWORK to-addresses=ROUTER_IP to-ports=8060
add action=masquerade chain=srcnat comment="Aspia Relay" dst-address=RELAY_IP dst-port=8070 protocol=tcp src-address=LOCAL_NETWORK
add action=masquerade chain=srcnat comment="Aspia Router" dst-address=ROUTER_IP dst-port=8060 protocol=tcp src-address=LOCAL_NETWORK
```

<br/>
Replace the following with your data:

```ROUTER_IP``` - IP address of the computer on which the Router is installed.

```RELAY_IP``` - IP address of the computer on which the Relay is installed.

```LOCAL_NETWORK``` – your local network (for example 192.168.1.0/24).

```EXTERNAL_IP``` - your external IP address

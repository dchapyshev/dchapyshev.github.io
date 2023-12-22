---
layout: page
title: Configuration for iptables
---

```bash
iptables -t nat -A PREROUTING -p tcp -m multiport --dports 8060,8070 -j DNAT --to-destination ROUTER_AND_RELAY_IP
iptables -t nat -A POSTROUTING  -s LOCAL_NETWORK -d ROUTER_AND_RELAY_IP -p tcp -m multiport --dports 8060,8070 -j SNAT --to-source EXTERNAL_IP
```

Replace the following with your data:

```ROUTER_AND_RELAY_IP``` - IP address of the computer on which the Router/Relay is installed.

```LOCAL_NETWORK``` – your local network (for example 192.168.1.0/24).

```EXTERNAL_IP``` - your external IP address

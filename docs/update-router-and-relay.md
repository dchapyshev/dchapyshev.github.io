---
layout: page
title: Updating Router and Relay
---

This article discusses the process of updating up the Router and Relay. It is important to keep your software updated because new versions fix problems, including security issues.

The Router and Relay configuration is not part of the installation packages and will not be overwritten or deleted when uninstalling or updating, but it is highly recommended to make [backup](/docs/backup-router-and-relay) copies of the configurations before updating.

## Windows
Download msi installation packages from the [downloads](https://github.com/dchapyshev/aspia/releases) page and install them.

## Linux
In this example, the update is carried out from a computer running Windows. If you are using a different operating system, some changes may apply.
To connect to the server over SSH you need to download [Putty](https://www.putty.org).

1. Connect to your server via SSH using Putty.

2. Stop and remove the Router and Relay services. To do this, run the commands sequentially:
```bash
service aspia-router stop
service aspia-relay stop
dpkg --remove aspia-router
dpkg --remove aspia-relay
```
<br/>
3. Download deb packages from the [downloads](https://github.com/dchapyshev/aspia/releases) page to directory ```C:\temp``` (or to any other directory, but further in the instructions this path will be used).

4. Go to the directory with Putty in the terminal and run the commands to upload installation packages to the server
```bash
./pscp -l user -pw <password> C:/temp/aspia-router-<version>-x86_64.deb <user_name>@<address>:/tmp/aspia-router.deb
./pscp -l user -pw <password> C:/temp/aspia-relay-<version>-x86_64.deb <user_name>@<address>:/tmp/aspia-relay.deb
```
<br/>
5. Install new versions of packages by running the commands in Putty
```bash
dpkg --install /tmp/aspia-router.deb
dpkg --install /tmp/aspia-relay.deb
systemctl daemon-reload
service aspia-router start
service aspia-relay start
```
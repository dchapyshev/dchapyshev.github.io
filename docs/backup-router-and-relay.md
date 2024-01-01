---
layout: page
title: Backuping Router and Relay
---

This article discusses the process of backing up the Router and Relay.
Backup is very important to maintain stable operation and painless data recovery in case of software or hardware failures.
It is recommended to perform these actions regularly or automate them based on the steps below.

The backup process is described using the example of a Router and Relay installed in Linux. The update is performed remotely from Windows.

To connect to the server over SSH you need to download [Putty](https://www.putty.org).

### 1. Connect to your server via SSH using Putty.

### 2. Stop the Router and Relay services. To do this, run the commands sequentially:
```bash
service aspia-router stop
service aspia-relay stop
```

<br/>
### 3. Go to the directory with Putty in the terminal and run the commands:
```bash
./pscp -l user -pw <password> <user_name>@<address>:/etc/aspia/router.pub C:/backup/router.pub
./pscp -l user -pw <password> <user_name>@<address>:/etc/aspia/router.json C:/backup/router.json
./pscp -l user -pw <password> <user_name>@<address>:/var/lib/aspia/router.db3 C:/backup/router.db3
./pscp -l user -pw <password> <user_name>@<address>:/etc/aspia/relay.json C:/backup/relay.json
```

Replace these lines with your real connection data:

```<address>``` - the address of your server where the Router and Relay are installed;

```<user_name>``` - the username you use to log in;

```<password>``` - the password you use to log in.

After executing these commands, the configuration files and database from the remote server will be loaded into directory ```C:/backup```.
If you want the files to be uploaded to a different directory, then change the paths shown in the example to yours.

### 4. Start the Router and Relay services. To do this, run the commands:
```bash
service aspia-router start
service aspia-relay start
```
---
layout: page
title: Backuping Router and Relay
---

This article discusses the process of backing up the Router and Relay.
Backup is very important to maintain stable operation and painless data recovery in case of software or hardware failures.
It is recommended to perform these actions regularly or automate them based on the steps below.

## Backup with a script
The script connects to the server over SSH as root, stops the Relay and the Router, copies the data
base and the configuration files into a new directory named after the date and time of the backup,
and starts the services again. The course of the backup is written to the file backup.log next to the
copied files. The script works on Windows, Linux and macOS and can be run on a schedule, for example
from the Task Scheduler of Windows or from cron.

The server must run Linux with systemd and have Aspia Router (and, optionally, Aspia Relay)
installed. The SSH login as root must be allowed with a password, or with the public key of `--key`
in `/root/.ssh/authorized_keys`.

Save the script below to the file `aspia_backup.py`, install Python 3 (on Windows, tick "Add
python.exe to PATH" when installing it) and the paramiko library and run the script:

```bash
python -m pip install paramiko
python aspia_backup.py <address> <directory> [--password <password>] [--port 22]
python aspia_backup.py <address> <directory> --key <private key file> [--port 22]
```

The password is asked for when neither `--password` nor `--key` is given. With `--key`, `--password`
is the passphrase of the key, when it has one.

The files are copied into a new subdirectory of the given directory, for example:

```text
<directory>\2026-09-26_23-43-21\
  backup.log, router.db3, router.conf, host.pub, relay.pub, relay.conf
```

`router.db3` and `router.conf` are required, the other files are copied when they exist. The exit
code is 0 on success and 1 otherwise.

```python
#!/usr/bin/env python
"""Backs up the router database and the router and relay configuration from a Linux server."""
import argparse
import datetime
import getpass
import logging
import os
import sys

import paramiko

SERVICES = ["aspia-relay", "aspia-router"]

# The file and whether the backup fails without it.
FILES = [
    ("/var/lib/aspia/router.db3", True),
    ("/etc/aspia/router.conf", True),
    ("/etc/aspia/host.pub", False),
    ("/etc/aspia/relay.pub", False),
    ("/etc/aspia/relay.conf", False),
]

log = logging.getLogger("backup")


def run(client, command):
    _, stdout, stderr = client.exec_command(command)
    code = stdout.channel.recv_exit_status()
    return code, stderr.read().decode("utf-8", "replace").strip()


def backup(client, directory, stopped):
    for service in SERVICES:
        code, _ = run(client, "systemctl is-active --quiet %s" % service)
        if code != 0:
            log.info("%s is not running", service)
            continue
        log.info("Stopping %s", service)
        code, errors = run(client, "systemctl stop %s" % service)
        if code != 0:
            raise RuntimeError("unable to stop %s: %s" % (service, errors))
        stopped.append(service)

    sftp = client.open_sftp()
    for path, required in FILES:
        try:
            sftp.stat(path)
        except FileNotFoundError:
            if required:
                raise RuntimeError("%s not found" % path)
            log.info("%s not found, skipped", path)
            continue
        target = os.path.join(directory, os.path.basename(path))
        sftp.get(path, target)
        log.info("%s -> %s", path, target)
    sftp.close()


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("host")
    parser.add_argument("directory")
    parser.add_argument("--password")
    parser.add_argument("--key", help="private key file")
    parser.add_argument("--port", type=int, default=22)
    args = parser.parse_args()

    password = args.password
    if password is None and args.key is None:
        password = getpass.getpass("Password for root@%s: " % args.host)

    directory = os.path.join(args.directory, datetime.datetime.now().strftime("%Y-%m-%d_%H-%M-%S"))
    os.makedirs(directory, mode=0o700)

    logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s",
                        handlers=[logging.FileHandler(os.path.join(directory, "backup.log")),
                                  logging.StreamHandler(sys.stdout)])
    log.info("Backup of %s into %s", args.host, directory)

    client = paramiko.SSHClient()
    client.load_system_host_keys()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect(args.host, port=args.port, username="root", password=password,
                       key_filename=args.key, allow_agent=False, look_for_keys=False, timeout=30)
    except Exception as error:
        log.error("Unable to connect: %s", error)
        return 1

    succeeded = True
    stopped = []
    try:
        backup(client, directory, stopped)
    except Exception as error:
        log.error("%s", error)
        succeeded = False
    finally:
        for service in reversed(stopped):
            log.info("Starting %s", service)
            code, errors = run(client, "systemctl start %s" % service)
            if code != 0:
                log.error("Unable to start %s: %s", service, errors)
                succeeded = False
        client.close()

    log.info("Backup %s", "done" if succeeded else "FAILED")
    return 0 if succeeded else 1


if __name__ == "__main__":
    sys.exit(main())
```

<br/>

## Manual backup
The backup process is described using the example of a Router and Relay installed in Linux. The backup
is performed remotely from Windows.

To connect to the server over SSH you need to download [Putty](https://www.putty.org).

### 1. Connect to your server via SSH using Putty.

### 2. Stop the Relay and Router services. To do this, run the commands sequentially:
```bash
aspia_relay --stop
aspia_router --stop
```

<br/>
### 3. Go to the directory with Putty in the terminal and run the commands:
```bash
./pscp -pw <password> <user_name>@<address>:/var/lib/aspia/router.db3 C:/backup/router.db3
./pscp -pw <password> <user_name>@<address>:/etc/aspia/router.conf C:/backup/router.conf
./pscp -pw <password> <user_name>@<address>:/etc/aspia/host.pub C:/backup/host.pub
./pscp -pw <password> <user_name>@<address>:/etc/aspia/relay.pub C:/backup/relay.pub
./pscp -pw <password> <user_name>@<address>:/etc/aspia/relay.conf C:/backup/relay.conf
```

Replace these lines with your real connection data:

```<address>``` - the address of your server where the Router and Relay are installed;

```<user_name>``` - the username you use to log in;

```<password>``` - the password you use to log in.

After executing these commands, the configuration files and database from the remote server will be loaded into directory ```C:/backup```.
If you want the files to be uploaded to a different directory, then change the paths shown in the example to yours.

### 4. Start the Router and Relay services. To do this, run the commands:
```bash
aspia_router --start
aspia_relay --start
```

---
layout: page
title: Updating Router and Relay
---

This article discusses the process of updating the Router and Relay. It is important to keep your
software updated because new versions fix problems, including security issues.

The Router and Relay configuration is not part of the installation packages and will not be
overwritten or deleted when uninstalling or updating, but it is highly recommended to make
[backup](/docs/backup-router-and-relay) copies of the configurations before updating.

## Automatic update
The Router and Relay can download and install the update themselves. Run the commands with
administrator rights (on Linux with `sudo`):

```bash
aspia_router --install-update
aspia_relay --install-update
```

The update is taken from the stable channel; another channel is selected with the
`--update-channel beta` or `--update-channel alpha` argument. The `--check-update` argument only
checks whether an update is available.

<br/>

## Manual update

### Windows
Download msi installation packages from the [downloads](https://github.com/dchapyshev/aspia/releases)
page and install them.

### Linux
In this example, the update is carried out from a computer running Windows. If you are using a
different operating system, some changes may apply. To connect to the server over SSH you need to
download [Putty](https://www.putty.org).

1. Download the installation packages from the
   [downloads](https://github.com/dchapyshev/aspia/releases) page to directory ```C:\temp``` (or to
   any other directory, but further in the instructions this path will be used).

2. Go to the directory with Putty in the terminal and run the commands to upload the installation
   packages to the server:

   ```bash
   ./pscp -pw <password> C:/temp/aspia-router-<version>-x86_64.deb <user_name>@<address>:/tmp/
   ./pscp -pw <password> C:/temp/aspia-relay-<version>-x86_64.deb <user_name>@<address>:/tmp/
   ```

   On RHEL and compatible systems upload the rpm packages instead.

3. Connect to your server via SSH using Putty and install the new versions of the packages. The
   services are stopped before the update and started again after it automatically.

   ```bash
   Ubuntu
     sudo apt install /tmp/aspia-router-<version>-x86_64.deb
     sudo apt install /tmp/aspia-relay-<version>-x86_64.deb

   RHEL and compatible
     sudo dnf install /tmp/aspia-router-<version>-x86_64.rpm
     sudo dnf install /tmp/aspia-relay-<version>-x86_64.rpm
   ```

---
layout: page
title: Aspia Router
---

## Table of contents
1. [Purpose](#purpose)
2. [Installing](#installing)
3. [Creating a default configuration](#create-config)
4. [Configuration file](#config-file)
5. [Ports](#ports)
6. [Data base](#db-file)
7. [Public key](#public-key)
8. [Logs](#logs)
9. [Command line](#command-line)
10. [Notes](#notes)

## 1. Purpose <a name="purpose"></a>
Gives IDs to hosts and allows peers (Hosts and Clients) to agree on how they will bypass NAT.
All Hosts and Relays are permanently connected to the Router. When the Client wants to connect to the Host, it also connects to the Router.
The Router server must have a public IP address. Router and Relay can only work together. Don't forget to install Relay.
<br/>

## 2. Installing <a name="installing"></a>

```bash
Windows x86
  Run aspia-router-3.0.0-x86.msi and follow the instructions on the screen.

Windows x86_64
  Run aspia-router-3.0.0-x86_64.msi and follow the instructions on the screen.

Ubuntu
  sudo apt install ./aspia-router-3.0.0-x86_64.deb

RHEL and compatible
  sudo dnf install ./aspia-router-3.0.0-x86_64.rpm
```

<br/>
Installing the package does not register the service yet: there is no configuration on a clean
system. Create the configuration as described below and then install the service:

```bash
Windows
  aspia_router --install

Linux
  sudo aspia_router --install
```

<br/>
The service is registered and enabled at the system startup. On an upgrade the package refreshes the
already registered service itself.

<br/>
To start and stop the service, use the following commands:

```bash
Windows
  net start aspia-router
  net stop aspia-router

Linux
  sudo service aspia-router start
  sudo service aspia-router stop
```

<br/>
The service runs under a low-privilege account that is created during the installation. It has
access only to the directories of the Router.

<br/>

## 3. Creating a default configuration <a name="create-config"></a>
**WARNING!** There must be no existing configuration file or database in the destination directory.
The router never overwrites the current configurations and creating a new configuration is possible only if the previous one does not exist.

**WARNING!** Administrator rights are required to create a configuration.

**WARNING!** Default username and password: admin/admin. Don't forget to change this after installation! To manage users, use the Router management in the [Client](/docs/client#router-manage).

```bash
Windows x86
  cd /d "C:\Program Files (x86)\Aspia\Router"
  aspia_router --create-config

Windows x64
  cd /d "C:\Program Files\Aspia\Router"
  aspia_router --create-config

Linux
  sudo aspia_router --create-config
```

<br/>
The command creates the configuration file, the data base with the "admin" user, two pairs of keys
(one for Hosts and one for Relays) and writes the public keys to files. The paths of the created
files are displayed in the terminal.

<br/>

## 4. Configuration file <a name="config-file"></a>
The configuration file contains parameters that do not change while the application is running.

**Important!** Perform regular configuration file backups to avoid the risk of data loss.

The Router configuration file is located in the following paths:

```bash
Windows
  C:\ProgramData\aspia\router.conf

Linux
  /etc/aspia/router.conf
```

<br/>
Description of configuration file fields:

| Parameter         | Values                                              | Description                                                                                                                                                              |
|-------------------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| host_private_key  | Hexadecimal string, required                        | The private key used for connections with Hosts. It is automatically generated when the configuration is created. Do not change this setting unless you really need to.  |
| relay_private_key | Hexadecimal string, required                        | The private key used for connections with Relays. It is automatically generated when the configuration is created. Do not change this setting unless you really need to. |
| seed_key          | Hexadecimal string of 64 bytes, required            | It is automatically generated when the configuration is created. Do not change this setting unless you really need to.                                                   |
| router_guid       | UUID string without braces                          | The unique identifier of the Router. It is automatically generated when the configuration is created. Do not change this setting unless you really need to.              |
| host_port         | Number from 1 to 65535, default 8061                | The port for Hosts of version 3.0.0 and above.                                                                                                                           |
| client_port       | Number from 1 to 65535, default 8062                | The port for Clients.                                                                                                                                                    |
| relay_port        | Number from 1 to 65535, default 8063                | The port for Relays.                                                                                                                                                     |
| legacy_host_port  | Number from 1 to 65535, default 8060                | The port for Hosts of versions below 3.0.0.                                                                                                                              |
| stun              | Boolean (`true` or `false`), default `true`         | Enables the built-in STUN server. It is used by Clients and Hosts to determine their external addresses when a direct connection is established.                         |
| stun_port         | Number from 1 to 65535, default 8065                | The port of the built-in STUN server.                                                                                                                                    |
| listen_interface  | IPv4 or IPv6 address, empty by default              | Interface address on which the server will listen for incoming connections. Specify empty string if you want to listen for connections on all interfaces.                |
| client_white_list | Addresses separated by semicolons, empty by default | The list of Clients who are allowed to connect to the Router.                                                                                                            |
| host_white_list   | Addresses separated by semicolons, empty by default | The list of Hosts who are allowed to connect to the Router.                                                                                                              |
| relay_white_list  | Addresses separated by semicolons, empty by default | The list of Relays who are allowed to connect to the Router.                                                                                                             |

<br/>

**White lists.** A white list can contain IP addresses and subnets, for example `192.168.1.10;10.0.0.0/8`. If the list is
empty, then connections from all peers of this type are allowed. If the list contains items, then only the
peers specified in it can connect. Entries that are neither a valid address nor a valid subnet are ignored
and reported in the log.

<br/>

## 5. Ports <a name="ports"></a>
The Router listens on several ports. Each type of a peer has its own listener:

| Port | Purpose                                 |
|------|-----------------------------------------|
| 8060 | Hosts of versions below 3.0.0           |
| 8061 | Hosts of version 3.0.0 and above        |
| 8062 | Clients                                 |
| 8063 | Relays                                  |
| 8065 | Built-in STUN server                    |

The Router does not add rules to the firewall automatically.

<br/>

## 6. Data base <a name="db-file"></a>
The database file contains information about users, workspaces and issued IDs for Hosts. Currently the **sqlite** database is used.

**Important!** Perform regular database file backups to avoid the risk of data loss.

The database file is located in the following paths:

```bash
Windows
  C:\ProgramData\aspia\router.db3

Linux
  /var/lib/aspia/router.db3
```

<br/>

## 7. Public key <a name="public-key"></a>
The Router uses two pairs of keys: one for Hosts and one for Relays. The contents of the public key
files are needed to configure Hosts and Relays.

The public key files are located in the following paths:

```bash
Windows
  C:\ProgramData\aspia\host.pub
  C:\ProgramData\aspia\relay.pub

Linux
  /etc/aspia/host.pub
  /etc/aspia/relay.pub
```

<br/>

## 8. Logs <a name="logs"></a>
By default the Router writes the log to a file on Windows and to stdout on Linux, where the messages are collected by systemd. To configure the Router logging parameters, use the following recommendations:
  - To set the log level, declare an environment variable ASPIA_LOG_LEVEL with a value from 0 to 4 (0 - trace, 1 - info, 2 - warning, 3 - error, 4 - fatal). Decreasing the value increases the number of messages in the log.
  - To enable logging to a file (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_FILE with a value other than 0. If the environment variable is declared with a value of 0, then logging to file will be disabled.
  - To enable logging to stdout (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_STDOUT with a value other than 0. If the environment variable is declared with a value of 0, then logging to stdout will be disabled.
  - By default, log files older than 14 days are automatically deleted. If you want to change this value, then declare environment variable ASPIA_MAX_LOG_FILE_AGE with a numeric value in days. The variable can take a value from 0 to 366. If the variable is set to 0, then the log files will not be automatically deleted.

The log files for Windows are located in the following path:

```bash
C:\ProgramData\aspia\logs\aspia_router-*.log
```

<br/>
For Linux, you can enable log output to a file through environment variables or use the command to output the log:

```bash
sudo journalctl -u aspia-router
```

<br/>

## 9. Command line <a name="command-line"></a>
The Router supports the following command line arguments:

| Argument          | Description                                                                                                                                                |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--install`       | Installs the Router service and enables its start at the system startup. Requires an existing configuration. Administrator rights are required to execute. |
| `--remove`        | Removes the Router service. Administrator rights are required to execute.                                                                                  |
| `--start`         | Starts the Router service. Administrator rights are required to execute.                                                                                   |
| `--stop`          | Stops the Router service. Administrator rights are required to execute.                                                                                    |
| `--keygen`        | Generates a pair of private and public keys and displays them in the terminal. Running the command does not affect the current configuration.              |
| `--create-config` | Creates an initial configuration, the data base and the keys. Administrator rights are required to execute.                                                |
| `--version`       | Displays the version of the application.                                                                                                                   |
| `--help`          | Displays help about command line arguments.                                                                                                                |

<br/>

## 10. Notes <a name="notes"></a>
  - Hosts and Relays connect to the Router using a public key. Hosts use the key from `host.pub`, Relays use the key from `relay.pub`.
  - Clients connect using a username, a password and a code of two-factor authentication.
  - It is recommended that you set up regular backups of your configuration files and database.
  - Don't forget to add rules in your firewall to access the Router. The Router does not add rules automatically.
  - It is recommended to limit the list of Relays that can be connected to the Router. Whitelist the required Relays.
  - When uninstalling, the Router does not delete its configuration files and database.
  - When updating the Router, do not forget to back up the configuration files and database. The configuration of version 2.7 is migrated automatically, see [Migration from version 2.7](/docs/migration#router).
  - After changing the configuration files, you must restart the Router service. The Router reads the configuration at startup!

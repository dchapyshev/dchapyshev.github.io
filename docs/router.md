---
layout: page
title: Aspia Router
---

## Table of contents
1. [Purpose](#purpose)
2. [Installing](#installing)
3. [Creating a default configuration](#create-config)
4. [Configuration file](#config-file)
5. [Data base](#db-file)
6. [Public key](#public-key)
7. [Logs](#logs)
8. [Command line](#command-line)
9. [Notes](#notes)

## Purpose <a name="purpose"></a>
Gives IDs to hosts and allows peers (Hosts and Clients) to agree on how they will bypass NAT.
All Hosts and Relays are permanently connected to the Router. When the Client wants to connect to the Host, it also connects to the Router.
The Router server must have a public IP address. Router and Relay can only work together. Don't forget to install Relay.
<br/>

## Installing <a name="installing"></a>

```bash
Windows x86
  Run aspia-router-2.7.0-x86.msi and follow the instructions on the screen.

Windows x86_64
  Run aspia-router-2.7.0-x86_64.msi and follow the instructions on the screen.

Linux
  sudo apt install ./aspia-router-2.7.0-x86_64.deb
  sudo systemctl enable aspia-router
```

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

## Creating a default configuration <a name="create-config"></a>
**WARNING!** There must be no existing configuration file or database in the destination directory.
The router never overwrites the current configurations and creating a new configuration is possible only if the previous one does not exist.

**WARNING!** Administrator rights are required to create a configuration.

**WARNING!** Default username and password: admin/admin. Don't forget to change this after installation!

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

## Configuration file <a name="config-file"></a>

The Router configuration file is located in the following paths:

```bash
Windows
  C:\ProgramData\aspia\router.json

Linux
  /etc/aspia/router.json
```

<br/>
Description of configuration file fields:

  - **PrivateKey (REQUIRED FIELD)** If you already have a private key, then write it here. This option is automatically generated when the configuration is created using command line option “--create-config”. Do not change this setting unless you really need to.
  - **SeedKey (REQUIRED FIELD)** This option is automatically generated when the configuration is created using command line option “--create-config”. Do not change this setting unless you really need to.
  - **Port** The port on which incoming connections will be accepted. You can leave the default value. Do not change this parameter unless you do so consciously. The default value is 8060.
  - **ListenInterface** Interface address on which the server will listen for incoming connections. Specify empty string if you want to listen for connections on all interfaces. Do not change this setting unless you really need to.
  - **ClientWhiteList** The IP address (not hostnames) list of clients who are allowed to connect to the router. Addresses are separated by semicolons. If the list is empty, then connections from all clients are allowed. If the list contains items, then only the clients specified in this list can connect. Do not change this setting unless you really need to.
  - **HostWhiteList** The IP address (not hostnames) list of Hosts who are allowed to connect to the router. Addresses are separated by semicolons. If the list is empty, then connections from all Hosts are allowed. If the list contains items, then only the Hosts specified in this list can connect. Do not change this setting unless you really need to.
  - **AdminWhiteList** The IP address (not hostnames) list of admins who are allowed to connect to the Router. Addresses are separated by semicolons. If the list is empty, then connections from all admins are allowed. If the list contains items, then only the admins specified in this list can connect. Do not change this setting unless you really need to.
  - **RelayWhiteList** The IP address (not hostnames) list of relays who are allowed to connect to the Router. Addresses are separated by semicolons. If the list is empty, then connections from all Relays are allowed. If the list contains items, then only the Relays specified in this list can connect. Do not change this setting unless you really need to.

## Data base <a name="db-file"></a>
The database file is located in the following paths:

```bash
Windows
  C:\ProgramData\aspia\router.db3

Linux
  /var/lib/aspia/router.db3
```

<br/>

## Public key <a name="public-key"></a>
The contents of the public key file are needed to configure Relays and Hosts.
The public key file is located in the following paths:

```bash
Windows
  C:\ProgramData\aspia\router.pub

Linux
  /etc/aspia/router.pub
```

<br/>

## Logs <a name="logs"></a>
Logging for the Router is disabled by default. To configure the Router logging parameters, use the following recommendations:
  - To set the log level, declare an environment variable ASPIA_LOG_LEVEL with a value from 0 to 2. Decreasing the value increases the number of messages in the log.
  - To enable logging to a file (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_FILE with a value other than 0. If the environment variable is declared with a value of 0, then logging to file will be disabled.
  - To enable logging to stdout (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_STDOUT with a value other than 0. If the environment variable is declared with a value of 0, then logging to stdout will be disabled.
  - Log files can have a limited size and after reaching the maximum file size a new log file will be created. By default, the maximum log file size is limited to 2 MB. If you need to change this size, then declare environment variable ASPIA_MAX_LOG_FILE_SIZE with a numeric value in bytes. The variable can take a value from 1024 (1 KB) to 10485760 (10 MB).
  - By default, log files older than 14 days are automatically deleted. If you want to change this value, then declare environment variable ASPIA_MAX_LOG_FILE_AGE with a numeric value in days. The variable can take a value from 0 to 366. If the variable is set to 0, then the log files will not be automatically deleted.

The log file for Windows is located in the following path:

```bash
C:\Windows\Temp\aspia\aspia_router-*.log
```

<br/>
For Linux, you can enable log output to a file through environment variables or use the command to output the log:

```bash
sudo journalctl -u aspia-router
```

<br/>

## Command line <a name="command-line"></a>
The Router supports the following command line arguments:

| Argument          | Description                                                                                                                               |
|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `--install`       | Performs a Router service installation. Administrator rights are required to execute. The command is only available in Windows.           |
| `--remove`        | Performs removal of the Router service. Administrator rights are required to execute. The command is only available in Windows.           |
| `--start`         | Starts the Router service. Administrator rights are required to execute. The command is only available in Windows.                        |
| `--stop`          | Stops the Router service. Administrator rights are required to execute. The command is only available in Windows.                         |
| `--keygen`        | Generates private and public keys. The keys are displayed in the terminal. Running the command does not affect the current configuration. |
| `--create-config` | Creates an initial configuration.                                                                                                         |
| `--help`          | Displays help about command line arguments.                                                                                               |

<br/>

## Notes <a name="notes"></a>
  - Hosts and Relays connect to the Router using a public key.
  - Clients and the Console connect using a username and password. You can add additional users when managing Routers in the Console.
  - It is recommended that you set up regular backups of your configuration files and database.
  - Don't forget to add rules in your firewall to access the Router. The Router does not add rules automatically.
  - It is recommended to limit the list of Relays that can be connected to the Router. Whitelist the required Relays.
  - When uninstalling, the Router does not delete its configuration files and database.
  - When updating the Router, do not forget to back up the configuration files and database.
  - After changing the configuration files, you must restart the Router service. The Router reads the configuration at startup!

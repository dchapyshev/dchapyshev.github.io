---
layout: page
title: Aspia Relay
---

## Table of contents
1. [Purpose](#purpose)
2. [Installing](#installing)
3. [Creating a configuration](#create-config)
4. [Service](#service)
5. [Configuration file](#config-file)
6. [Logs](#logs)
7. [Command line](#command-line)
8. [Notes](#notes)

## 1. Purpose <a name="purpose"></a>
Passes traffic between peers (Hosts and Clients) through itself. The Relay server must have a public IP address.
There can be a lot of Relay and they can be placed on separate machines from Router. The number of Relay servers can be from one or more.
You must install at least one Relay server. Router and Relay can only work together.

## 2. Installing <a name="installing"></a>

```bash
Windows x86
  Run aspia-relay-3.0.0-x86.msi and follow the instructions on the screen.

Windows x86_64
  Run aspia-relay-3.0.0-x86_64.msi and follow the instructions on the screen.

Ubuntu
  sudo apt install ./aspia-relay-3.0.0-x86_64.deb

RHEL and compatible
  sudo dnf install ./aspia-relay-3.0.0-x86_64.rpm
```

<br/>
The package installs the files of the Relay. To make the Relay ready for work, create the
configuration and register the service as described below.

<br/>

## 3. Creating a configuration <a name="create-config"></a>
**WARNING!** There must be no existing configuration file in the destination directory. The Relay
never overwrites the current configuration and creating a new configuration is possible only if the
previous one does not exist.

**WARNING!** Administrator rights are required to create a configuration.

```bash
Windows x86
  cd /d "C:\Program Files (x86)\Aspia\Relay"
  aspia_relay --create-config

Windows x64
  cd /d "C:\Program Files\Aspia\Relay"
  aspia_relay --create-config

Linux
  sudo aspia_relay --create-config
```

<br/>
The created configuration contains the default values only. Before starting the service you have to
specify the address of the Router, its public key and the address of the Relay for peers.

<br/>

## 4. Service <a name="service"></a>
The service is registered after the configuration has been created. Administrator rights are
required to execute the commands below.

```bash
Windows
  aspia_relay --install

Linux
  sudo aspia_relay --install
```

<br/>
The service is registered and enabled at the system startup. On an upgrade the package refreshes the
already registered service itself.

<br/>
To start and stop the service, use the following commands:

```bash
Windows
  aspia_relay --start
  aspia_relay --stop

Linux
  sudo aspia_relay --start
  sudo aspia_relay --stop
```

<br/>
The service runs under a low-privilege account that is created during the installation. It has
access only to the directories of the Relay.

<br/>

## 5. Configuration file <a name="config-file"></a>
The Relay configuration file is located in the following paths:

```bash
Windows
  C:\ProgramData\aspia\relay.conf

Linux
  /etc/aspia/relay.conf
```

<br/>
Description of configuration file fields:

| Parameter           | Values                                       | Description                                                                                                                                                           |
|---------------------|----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| router_address      | Host name or IP address, required            | Router address. At this address the Relay server connects to the Router. It can be equal to localhost (or 127.0.0.1) if the Router is installed on the same computer. |
| router_port         | Number from 1 to 65535, default 8063         | The port of the Router for Relays. If you did not change the port in the Router configuration file, then the field must be left with the default value.               |
| router_public_key   | Hexadecimal string, required                 | The public key of the Router. Enter here the key that is contained in the file relay.pub, which created by the Router.                                                |
| listen_interface    | IPv4 or IPv6 address, empty by default       | Interface address on which the server will listen for incoming connections. Specify empty string if you want to listen for connections on all interfaces.             |
| peer_address        | Host name or IP address, required            | The address that peers will receive to connect to the Relay server. See the warning below.                                                                            |
| peer_port           | Number from 1 to 65535, default 8070         | The port through which peers will connect to the Relay server.                                                                                                        |
| peer_idle_timeout   | Number of minutes from 1 to 60, default 5    | If during this time no data comes from the peers, the connection is terminated. A value outside of this range stops the Relay from serving peers.                     |
| max_peer_count      | Number, default 100                          | The maximum number of simultaneous connections established between peers.                                                                                             |
| statistics_enabled  | Boolean (`true` or `false`), default `false` | Enable or disable automatic sending of statistics to the Router.                                                                                                      |
| statistics_interval | Number of seconds from 1 to 3600, default 5  | Interval for automatically sending statistics to the Router. A value outside of this range stops the Relay from serving peers when the statistics are enabled.        |

<br/>

**WARNING!** The address specified in `peer_address` must be accessible to all participants in the
connection (Client and Host). You should keep in mind that both peers must be able to connect to this
address. Consider this when setting up your network hardware if you are setting up port forwarding on
your network router. If your network router is behind NAT, then you must provide access to this address
for external and internal connections. See the documentation for your network equipment for more
information on how to do this.

<br/>

## 6. Logs <a name="logs"></a>
By default the Relay writes the log to a file on Windows and to stdout on Linux, where the messages are collected by systemd. To configure the Relay logging parameters, use the following recommendations:
  - To set the log level, declare an environment variable ASPIA_LOG_LEVEL with a value from 0 to 4 (0 - trace, 1 - info, 2 - warning, 3 - error, 4 - fatal). Decreasing the value increases the number of messages in the log.
  - To enable logging to a file (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_FILE with a value other than 0. If the environment variable is declared with a value of 0, then logging to file will be disabled.
  - To enable logging to stdout (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_STDOUT with a value other than 0. If the environment variable is declared with a value of 0, then logging to stdout will be disabled.
  - By default, log files older than 14 days are automatically deleted. If you want to change this value, then declare environment variable ASPIA_MAX_LOG_FILE_AGE with a numeric value in days. The variable can take a value from 0 to 366. If the variable is set to 0, then the log files will not be automatically deleted.

The log files for Windows are located in the following path:

```bash
C:\ProgramData\aspia\logs\aspia_relay-*.log
```

<br/>
For Linux, you can enable log output to a file through environment variables or use the command to output the log:

```bash
sudo journalctl -u aspia-relay
```

<br/>

## 7. Command line <a name="command-line"></a>
The Relay supports the following command line arguments:

| Argument          | Description                                                                                                                                               |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--install`       | Installs the Relay service and enables its start at the system startup. Requires an existing configuration. Administrator rights are required to execute. |
| `--remove`        | Removes the Relay service. Administrator rights are required to execute.                                                                                  |
| `--start`         | Starts the Relay service. Administrator rights are required to execute.                                                                                   |
| `--stop`          | Stops the Relay service. Administrator rights are required to execute.                                                                                    |
| `--create-config` | Creates an initial configuration. Administrator rights are required to execute.                                                                           |
| `--version`       | Displays the version of the application.                                                                                                                  |
| `--help`          | Displays help about command line arguments.                                                                                                               |

<br/>

## 8. Notes <a name="notes"></a>
  - Don't forget to add rules in your firewall to access the Relay. The Relay does not add rules automatically.
  - When uninstalling, the Relay does not delete its configuration files.
  - After changing the configuration files, you must restart the Relay service. The Relay reads the configuration at startup!
  - The configuration of version 2.7 is migrated automatically, see [Migration from version 2.7](/docs/migration#relay).

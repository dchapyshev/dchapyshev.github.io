---
layout: page
title: Aspia Relay
---

## Table of contents
1. [Purpose](#purpose)
2. [Installing](#installing)
3. [Creating a default configuration](#create-config)
4. [Configuration file](#config-file)
5. [Logs](#logs)
6. [Command line](#command-line)
7. [Notes](#notes)

## 1. Purpose <a name="purpose"></a>
Passes traffic between peers (Hosts and Clients) through itself. The Relay server must have a public IP address.
There can be a lot of Relay and they can be placed on separate machines from Router. The number of Relay servers can be from one or more.
You must install at least one Relay server. Router and Relay can only work together.

## 2. Installing <a name="installing"></a>
```bash
Windows x86
  Run aspia-relay-2.7.0-x86.msi and follow the instructions on the screen.

Windows x86_64
  Run aspia-relay-2.7.0-x86_64.msi and follow the instructions on the screen.

Linux
  sudo apt install ./aspia-relay-2.7.0-x86_64.deb
  sudo systemctl enable aspia-relay
```

<br/>

To start and stop the service, use the following commands:

```bash
Windows
  net start aspia-relay
  net stop aspia-relay

Linux
  sudo service aspia-relay start
  sudo service aspia-relay stop
```

<br/>

## 3. Creating a default configuration <a name="create-config"></a>
**WARNING!** There must be no existing configuration file in the destination directory.
The Relay never overwrites the current configurations and creating a new configuration is possible only if the previous one does not exist.

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

## 4. Configuration file <a name="config-file"></a>
The Relay configuration file is located in the following paths:

```bash
Windows
  C:\ProgramData\aspia\relay.json

Linux
  /etc/aspia/relay.json
```

<br/>
Description of configuration file fields:

  - **RouterAddress (REQUIRED FIELD)** Router address. At this address, the Relay server connects to the Router. It can be equal to localhost (or 127.0.0.1) if the router is installed on the same computer.
  - **RouterPort** If you did not change the port in the Router configuration file, then the field must be left with the default value. If you changed the configuration of the Router, then write the required value. You can leave the default value. Do not change this parameter unless you do so consciously. The default value is 8060.
  - **RouterPublicKey (REQUIRED FIELD)** Should contain the public key of the Router that you received when installing it. Enter here the public key that is contained in file router.pub, which created by the Router.
  - **ListenInterface** Interface address on which the server will listen for incoming connections. Specify empty string if you want to listen for connections on all interfaces. Do not change this setting unless you really need to.
  - **PeerAddress (REQUIRED FIELD)** The address that peers will receive to connect to the Relay server. This is the Relay server's own address, through which both peers (Client/Console and Host) can access it.
**WARNING!** This address must be accessible to all participants in the connection (Client/Console/Host). You should keep in mind that both peers (Host and Client/Console) must be able to connect to this address. Consider this when setting up your network hardware if you are setting up port forwarding on your Router. If your Router is behind NAT, then you must provide access to this address for external and internal connections. See the documentation for your network equipment for more information on how to do this. An example of a configuration for Mikrotik and iptables routers is at the end of this document.
  - **PeerPort** The port through which peers will connect to the Relay server. You can leave the default value. Do not change this parameter unless you do so consciously. The default value is 8070.
  - **PeerIdleTimeout** Time in minutes. If during this time no data comes from the peers, the connection is terminated. You can leave the default value. Do not change this parameter unless you do so consciously. The default value is 5.
  - **MaxPeerCount** The maximum number of simultaneous connections established between peers. You can leave the default value. Do not change this parameter unless you do so consciously. The default value is 100.
  - **StatisticsEnabled** Enable or disable automatic sending of statistics to the router. You can leave the default value. Can take values: true or false. The default value is false.
  - **StatisticsInterval** Interval in seconds for automatically sending statistics to the router. You can leave the default value. Can take a value from 1 to 60. The default value is 5.

## 5. Logs <a name="logs"></a>
Logging for the Relay is disabled by default. To configure the Relay logging parameters, use the following recommendations:
  - To set the log level, declare an environment variable ASPIA_LOG_LEVEL with a value from 0 to 2. Decreasing the value increases the number of messages in the log.
  - To enable logging to a file (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_FILE with a value other than 0. If the environment variable is declared with a value of 0, then logging to file will be disabled.
  - To enable logging to stdout (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_STDOUT with a value other than 0. If the environment variable is declared with a value of 0, then logging to stdout will be disabled.
  - Log files can have a limited size and after reaching the maximum file size a new log file will be created. By default, the maximum log file size is limited to 2 MB. If you need to change this size, then declare environment variable ASPIA_MAX_LOG_FILE_SIZE with a numeric value in bytes. The variable can take a value from 1024 (1 KB) to 10485760 (10 MB).
  - By default, log files older than 14 days are automatically deleted. If you want to change this value, then declare environment variable ASPIA_MAX_LOG_FILE_AGE with a numeric value in days. The variable can take a value from 0 to 366. If the variable is set to 0, then the log files will not be automatically deleted.

The log file for Windows is located in the following path:

```bash
C:\Windows\Temp\aspia\aspia_relay-*.log
```

<br/>
For Linux, you can enable log output to a file through environment variables or use the command to output the log:

```bash
sudo journalctl -u aspia-relay
```

<br/>

## 6. Command line <a name="command-line"></a>
The Relay supports the following command line arguments:

| Argument          | Description                                                                                                                    |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `--install`       | Performs a Relay service installation. Administrator rights are required to execute. The command is only available in Windows. |
| `--remove`        | Performs removal of the Relay service. Administrator rights are required to execute. The command is only available in Windows. |
| `--start`         | Starts the Relay service. Administrator rights are required to execute. The command is only available in Windows.              |
| `--stop`          | Stops the Relay service. Administrator rights are required to execute. The command is only available in Windows.               |
| `--create-config` | Creates an initial configuration.                                                                                              |
| `--help`          | Displays help about command line arguments.                                                                                    |

<br/>

## 7. Notes <a name="notes"></a>
  - Don't forget to add rules in your firewall to access the Relay. The Relay does not add rules automatically.
  - When uninstalling, the Relay does not delete its configuration files.
  - After changing the configuration files, you must restart the Relay service. The Relay reads the configuration at startup!

---
layout: page
title: Aspia Client
---

## Table of contents
1. [Purpose](#purpose)
2. [Installing](#installing)
3. [Command line](#command-line)
4. [Environment variables](#env-vars)
5. [Logs](#logs)

## Purpose <a name="purpose"></a>
Allows you to connect to and control hosts.

## Installing <a name="installing"></a>
```bash
Windows x86
  Run aspia-client-2.7.0-x86.msi and follow the instructions on the screen.

Windows x86_64
  Run aspia-client-2.7.0-x86_64.msi and follow the instructions on the screen.

MacOSX x86_64
  Open aspia-client-2.7.0-x86_64.dmg and move “Aspia Client” to “Applications”.

Linux
  sudo apt install ./aspia-client-2.7.0-x86_64.deb
```
<br/>

## Command Line <a name="command-line"></a>

| Argument                     | Description                                                                                         |
|------------------------------|-----------------------------------------------------------------------------------------------------|
| -? -h --help                 | Displays help on command line options.                                                              |
| -v -version                  | Displays version information.                                                                       |
| --address <address>          | Remote computer address or ID.                                                                      |
| --port <port>                | Remote computer port.                                                                               |
| --name <name>                | Display name of host.                                                                               |
| --username <username>        | Name of user.                                                                                       |
| --password <password>        | Password of user.                                                                                   |
| --session-type <type>        | Session type. Possible values: desktop-manage, desktop-view, file-transfer, system-info, text-chat. |
| --codec <codec>              | Type of codec. Possible values: vp8, vp9, zstd.                                                     |
| --color-depth <value>        | Color depth. Possible values: 3, 6, 8, 16, 32.                                                      |
| --compress-ratio <value>     | Compression ratio. Possible values: 1-22.                                                           |
| --audio <value>              | Enable or disable audio. Possible values: 0 or 1.                                                   |
| --cursor-shape <value>       | Enable or disable cursor shape. Possible values: 0 or 1.                                            |
| --cursor-position <value>    | Enable or disable cursor position. Possible values: 0 or 1.                                         |
| --clipboard <value>          | Enable or disable clipboard. Possible values: 0 or 1.                                               |
| --desktop-effects <value>    | Enable or disable desktop effects. Possible values: 0 or 1.                                         |
| --desktop-wallpaper <value>  | Enable or disable desktop wallpaper. Possible values: 0 or 1.                                       |
| --font-smoothing <value>     | Enable or disable font smoothing. Possible values: 0 or 1.                                          |
| --clear-clipboard <value>    | Clear clipboard at disconnect. Possible values: 0 or 1.                                             |
| --lock-at-disconnect <value> | Lock computer at disconnect. Possible values: 0 or 1.                                               |
| --block-remote-input <value> | Block remote input. Possible values: 0 or 1.                                                        |
| --router-address <address>   | Router address.                                                                                     |
| --router-port <port>         | Router port.                                                                                        |
| --router-username <username> | Router name of user.                                                                                |
| --router-password <password> | Router password of user.                                                                            |

<br/>
## Environment variables <a name="env-vars"></a>
  - **ASPIA_NO_VERIFY_TLS_PEER** - If the variable is declared, then the validity of the TLS certificate is not checked when checking for updates.
  It is not recommended to declare this variable unnecessarily. Declaring this variable can help solve the problem with checking for updates in Windows 7/2008R2,
  where root certificates are not updated.

## Logs <a name="logs"></a>
To configure the Router logging parameters, use the following recommendations:
  - To set the log level, declare an environment variable ASPIA_LOG_LEVEL with a value from 0 to 2. Decreasing the value increases the number of messages in the log.
  - To enable logging to a file (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_FILE with a value other than 0. If the environment variable is declared with a value of 0, then logging to file will be disabled.
  - To enable logging to stdout (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_STDOUT with a value other than 0. If the environment variable is declared with a value of 0, then logging to stdout will be disabled.
  - Log files can have a limited size and after reaching the maximum file size a new log file will be created. By default, the maximum log file size is limited to 2 MB. If you need to change this size, then declare environment variable ASPIA_MAX_LOG_FILE_SIZE with a numeric value in bytes. The variable can take a value from 1024 (1 KB) to 10485760 (10 MB).
  - By default, log files older than 14 days are automatically deleted. If you want to change this value, then declare environment variable ASPIA_MAX_LOG_FILE_AGE with a numeric value in days. The variable can take a value from 0 to 366. If the variable is set to 0, then the log files will not be automatically deleted.

The log file for Windows is located in the following path:
```bash
C:\Users\<user_name>\AppData\Local\Temp\aspia\aspia_client-*.log
```
<br/>
For Linux and MacOS:
```bash
Logs are written to the terminal.
```
<br/>
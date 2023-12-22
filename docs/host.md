---
layout: page
title: Aspia Host
---

## Table of contents
1. [Purpose](#purpose)
2. [Installing](#installing)
3. [Command line](#command-line)
4. [Environment variables](#env-vars)
5. [Logs](#logs)
6. [Notes](#notes)

## Purpose <a name="purpose"></a>
Allows accepts incoming connections from Clients and Consoles to manage the computer on which it is installed.

## Installing <a name="installing"></a>
The Host is only available for Windows.
```bash
Windows x86
  Run aspia-host-2.7.0-x86.msi and follow the instructions on the screen.

Windows x86_64
  Run aspia-host-2.7.0-x86_64.msi and follow the instructions on the screen.
```
<br/>

## Command Line <a name="command-line"></a>

**aspia_host_service**

| Argument   | Description                                                                         |
|------------|-------------------------------------------------------------------------------------|
| --host-id  | Displays the current Host ID. Note that the console and RDP sessions have separate IDs and the output of the command will depend on which session the process is running in. Displays the last received ID (cached ID). This means that the ID must be obtained at least once for the command to work. |
| --version  | Displays the current version of the application.                                    |
| --install  | Performs a Host service installation. Administrator rights are required to execute. |
| --remove   | Performs removal of the Host service. Administrator rights are required to execute. |
| --start    | Starts the Host service. Administrator rights are required to execute.              |
| --stop     | Stops the Host service. Administrator rights are required to execute.               |
| --help     | Displays help about command line arguments.                                         |

<br/>
**aspia_host**

| Argument                         | Description                                      |
|----------------------------------|--------------------------------------------------|
| --import=<config_file_path.json> | Imports a configuration file.                    |
| --export=<config_file_path.json> | Exports a configuration file.                    |
| --silent                         | Enables silent mode for importing or exporting a configuration file. When this option is enabled, no messages are displayed. |
| --version                        | Displays the current version of the application. |
| --update                         | Displays an update check dialog.                 |
| --config                         | Displays the host configuration dialog.          |

<br/>
## Environment variables <a name="env-vars"></a>
  - **ASPIA_NO_OVERFLOW_DETECTION** - If the variable exists (with any value), then the automatic network stack overflow detection mechanism is disabled. If the variable does not exist, then Aspia tries to automatically adjust to the change in bandwidth by changing the FPS, scaling the image or other actions.
  - **ASPIA_DEFAULT_FPS** - Determines the FPS with which the connection starts. If variable ASPIA_NO_OVERFLOW_DETECTION is not declared, then in the future the FPS can be lowered or increased. If variable ASPIA_NO_OVERFLOW_DETECTION is declared, then this FPS value will be used for the duration of the connection. It can take values from 1 to 60. The default value is 20.
  - **ASPIA_MIN_FPS** - Determines the value to which the FPS can be reduced during automatic bandwidth adjustment. If variable ASPIA_NO_OVERFLOW_DETECTION is declared, then this value is ignored. It can take values from 1 to 60. The default value is 1.
  - **ASPIA_MAX_FPS** - Determines the maximum value up to which the FPS can be increased during automatic bandwidth control. If variable ASPIA_NO_OVERFLOW_DETECTION is declared, then this value is ignored. It can take values from 1 to 60. For computers with more than 2 processor cores, the default value is 30. Otherwise, the default value is 20.
  - **ASPIA_NO_VERIFY_TLS_PEER** - If the variable is declared, then the validity of the TLS certificate is not checked when checking for updates. It is not recommended to declare this variable unnecessarily. Declaring this variable can help solve the problem with checking for updates in Windows 7/2008R2, where root certificates are not updated.

## Logs <a name="logs"></a>
To configure the Router logging parameters, use the following recommendations:
  - To set the log level, declare an environment variable ASPIA_LOG_LEVEL with a value from 0 to 2. Decreasing the value increases the number of messages in the log.
  - To enable logging to a file (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_FILE with a value other than 0. If the environment variable is declared with a value of 0, then logging to file will be disabled.
  - To enable logging to stdout (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_STDOUT with a value other than 0. If the environment variable is declared with a value of 0, then logging to stdout will be disabled.
  - Log files can have a limited size and after reaching the maximum file size a new log file will be created. By default, the maximum log file size is limited to 2 MB. If you need to change this size, then declare environment variable ASPIA_MAX_LOG_FILE_SIZE with a numeric value in bytes. The variable can take a value from 1024 (1 KB) to 10485760 (10 MB).
  - By default, log files older than 14 days are automatically deleted. If you want to change this value, then declare environment variable ASPIA_MAX_LOG_FILE_AGE with a numeric value in days. The variable can take a value from 0 to 366. If the variable is set to 0, then the log files will not be automatically deleted.

The log file for Windows is located in the following path:
```
C:\Users\<user_name>\AppData\Local\Temp\aspia\aspia_host-*.log
C:\Windows\Temp\aspia\aspia_host_service-*.log
C:\Windows\Temp\aspia\aspia_desktop_agent-*.log
C:\Windows\Temp\aspia\aspia_file_transfer _agent-*.log
```
<br/>

## Notes <a name="notes"></a>
  - The ID is linked to a computer using file C:\ProgramData\aspia\host_key.json. This file does not contain the computer ID, but it allows you to obtain the ID when connecting to the Router. The computer ID is assigned upon first connection. If you delete this file, the computer ID will change. This can be used to restore the computer ID after reinstalling the operating system (make a backup copy of this file before reinstalling the operating system).
  - Important! If you are cloning an operating system to other computers, make sure that file C:\ProgramData\aspia\host_key.json is removed from the image of the operating system being cloned. If you do not do this, then computers containing the same key file will one by one receive the same ID, pushing each other out of the server.
  - The Host configuration is contained in file C:\ProgramData\aspia\host.json. If you need to transfer the configuration, use command line parameters (or similar options in the GUI) to import and export. Do not copy this file as is. This may work "now", but may break your Host later.
  - If you want to automate the installation, then set up the first computer. After configuration, export the configuration to file aspia-host-config.json (this file name and extension is required). If you place this file in the same directory as installation MSI package, the configuration will be automatically imported during installation. This may not work when installing from network locations or when deploying using AD.

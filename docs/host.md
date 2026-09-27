---
layout: page
title: Aspia Host
---

## Table of contents
1. [Purpose](#purpose)
2. [Installing](#installing)
3. [Automation of installation](#automation)
4. [Settings](#settings)
    1. [General tab](#settings-general)
    2. [Security tab](#settings-security)
    3. [Router tab](#settings-router)
    4. [Users tab](#settings-users)
5. [Command line](#command-line)
6. [Environment variables](#env-vars)
7. [Logs](#logs)
8. [Notes](#notes)

## 1. Purpose <a name="purpose"></a>
Accepts incoming connections from Clients to manage the computer on which it is installed.

## 2. Installing <a name="installing"></a>
```bash
Windows x86
  Run aspia-host-<version>-x86.msi and follow the instructions on the screen.

Windows x86_64
  Run aspia-host-<version>-x86_64.msi and follow the instructions on the screen.

macOS
  Run aspia-host-<version>-universal.pkg and follow the instructions on the screen.

Ubuntu
  sudo apt install ./aspia-host-<version>-x86_64.deb

RHEL and compatible
  sudo dnf install ./aspia-host-<version>-x86_64.rpm

Android
  Open aspia-host-<version>-arm64.apk on the device and follow the instructions on the screen.
```
<br/>

## 3. Automation of installation <a name="automation"></a>
On Windows the parameters of the Host and its users can be applied automatically during the
installation. To do this:
  - Install the Host on one of the computers, configure the parameters and add the users.
  - Export the configuration with the **Export settings** button on the **General** tab of the
    settings, or with the `aspia_host --export <file>` command.
  - Name the file **aspia-host.json** and place it in the same directory as the MSI package.

During the installation the configuration is imported from this file automatically. The
installation must be started from a local location (a local disk or a flash drive); it may not work
when installing from network locations or when deploying with AD.

## 4. Settings <a name="settings"></a>
To change Host parameters, the application has a Settings dialog. Below is an overview of the possible options.

### 4.1. General tab <a name="settings-general"></a>
On the "General" tab, you can configure basic application settings, as well as import and export settings.
<p align="center"><img src="/images/host-settings-general.png" width="400"/></p>

**Incoming port**

TCP port on which the Host accepts incoming connections, 8050 by default.

**Preferred video capturer**

The method of capturing the screen. With "Default" the Host chooses it itself. Not displayed on Linux.

**Allow hardware video encoding**

Allows to encode the video with the graphics adapter. Not displayed on Linux.

**Updates**

The automatic checking and installation of updates with the selected frequency, the update channel and the button to check for updates immediately.

**Import/Export**

Import and export settings allow you to save the current configuration to an JSON file for later recovery (for backup purposes) or automatic deployment.
Import and export of parameters can be done through a graphical user interface and from the command line.
To perform import and export via a graphical interface, use the **Import settings** and **Export settings** buttons in the **Settings** group.
To perform import and export via the command line, use the following commands (for "silent" import and export without displaying messages or dialogs, add argument ```--silent```):
```bash
aspia_host --import <file>
aspia_host --export <file>
```
<br/>

### 4.2. Security tab <a name="settings-security"></a>
On the "Security" tab, you can configure settings for additional protection of the application.

<p align="center"><img src="/images/host-settings-security.png" width="400"/></p>

**Password Protection of Settings**

This option allows you to set a password that will be requested when you try to open the Host Settings dialog.
The password is stored in the secure data base of the Host, which only administrators can read and change.

**One-time Password**

When this option is enabled, the Host interface will display a one-time password, which the user can dictate to the connector for a one-time connection.
You can also configure the frequency of automatic change of this password (or disable automatic change, then the password will change only when the service is restarted),
specify the characters that the password can contain and the length of the password.

**Connection Confirmation**

When this option is enabled, a connection confirmation dialog will be displayed to allow the user to accept or reject the incoming connection.
You can also configure the time interval after which the incoming connection will be automatically confirmed and the action that will be performed if there is no active user in the computer's
operating system when connecting (the connection can be automatically accepted or rejected).

**Other**

The **Disable Aspia shutdown** option blocks the exit command in the window of the Host, so the user cannot close the application.

### 4.3. Router tab <a name="settings-router"></a>
On the "Router" tab you can specify parameters for connecting to the [Aspia Router](/docs/router). Enter the server address and public key and apply the settings.
<p align="center"><img src="/images/host-settings-router.png" width="400"/></p>

### 4.4. Users tab <a name="settings-users"></a>
To manage users, you need to run the Aspia Host Settings and go to the "Users" tab.
<p align="center"><img src="/images/host-settings-users.png" width="400"/></p>

To add a user, use the <img src="/images/icons/add.svg" width="24" height="24" alt="add"/> **Add** button. To edit a user, use the <img src="/images/icons/pencil-drawing.svg" width="24" height="24" alt="pencil-drawing"/> **Modify** button, and to delete a user, the <img src="/images/icons/cancel.svg" width="24" height="24" alt="cancel"/> **Delete** button.
When adding a new user, you need to enter a username and password, as well as select the types of sessions that this user can connect to.

**Warning!** When you change your username, you also need to re-enter the password.

The dialog for adding or editing a user is as follows:

<p align="center"><img src="/images/host-settings-user.png" width="300"/></p>

## 5. Command Line <a name="command-line"></a>

| Argument          | Description                                                              |
|-------------------|--------------------------------------------------------------------------|
| `--install`       | Installs the Host service. Administrator rights are required to execute. |
| `--remove`        | Removes the Host service. Administrator rights are required to execute.  |
| `--start`         | Starts the Host service. Administrator rights are required to execute.   |
| `--stop`          | Stops the Host service. Administrator rights are required to execute.    |
| `--import <file>` | Imports the configuration from a JSON file.                              |
| `--export <file>` | Exports the configuration to a JSON file.                                |
| `--silent`        | Imports or exports the configuration without displaying any messages.    |
| `--config`        | Opens the settings of the Host.                                          |
| `--security-log`  | Opens the security log.                                                  |
| `--hidden`        | Starts the application without displaying its window.                    |
| `--version`       | Displays the version of the application.                                 |
| `--help`          | Displays help about command line arguments.                              |

<br/>

## 6. Environment variables <a name="env-vars"></a>

  - **ASPIA_NO_OVERFLOW_DETECTION** - If the variable exists (with any value), then the automatic network stack overflow detection mechanism is disabled. If the variable does not exist, then Aspia tries to automatically adjust to the change in bandwidth by changing the FPS, scaling the image or other actions.
  - **ASPIA_DEFAULT_FPS** - Determines the FPS with which the connection starts. If variable ASPIA_NO_OVERFLOW_DETECTION is not declared, then in the future the FPS can be lowered or increased. If variable ASPIA_NO_OVERFLOW_DETECTION is declared, then this FPS value will be used for the duration of the connection. It can take values from 1 to 60. The default value is 24.
  - **ASPIA_MIN_FPS** - Determines the value to which the FPS can be reduced during automatic bandwidth adjustment. If variable ASPIA_NO_OVERFLOW_DETECTION is declared, then this value is ignored. It can take values from 1 to 60. The default value is 10.
  - **ASPIA_MAX_FPS** - Determines the maximum value up to which the FPS can be increased during automatic bandwidth control. If variable ASPIA_NO_OVERFLOW_DETECTION is declared, then this value is ignored. It can take values from 1 to 60. For computers with more than 2 logical processors, the default value is 30. Otherwise, the default value is 20.
  - **ASPIA_NO_VERIFY_TLS_PEER** - If the variable is declared, then the validity of the TLS certificate is not checked when checking for updates and downloading them. It is not recommended to declare this variable unnecessarily. Declaring this variable can help solve the problem with checking for updates in Windows 7/2008R2, where root certificates are not updated.
  - **ASPIA_SMALL_ICON_SIZE** - Sets the size of the small icons of the interface in pixels, from 16 to 48, default 24.

## 7. Logs <a name="logs"></a>
To configure the Router logging parameters, use the following recommendations:
  - To set the log level, declare an environment variable ASPIA_LOG_LEVEL with a value from 0 to 2. Decreasing the value increases the number of messages in the log.
  - To enable logging to a file (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_FILE with a value other than 0. If the environment variable is declared with a value of 0, then logging to file will be disabled.
  - To enable logging to stdout (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_STDOUT with a value other than 0. If the environment variable is declared with a value of 0, then logging to stdout will be disabled.
  - Log files can have a limited size and after reaching the maximum file size a new log file will be created. By default, the maximum log file size is limited to 2 MB. If you need to change this size, then declare environment variable ASPIA_MAX_LOG_FILE_SIZE with a numeric value in bytes. The variable can take a value from 1024 (1 KB) to 10485760 (10 MB).
  - By default, log files older than 14 days are automatically deleted. If you want to change this value, then declare environment variable ASPIA_MAX_LOG_FILE_AGE with a numeric value in days. The variable can take a value from 0 to 366. If the variable is set to 0, then the log files will not be automatically deleted.

The log file for Windows is located in the following path:

```text
C:\Users\<user_name>\AppData\Local\Temp\aspia\aspia_host-*.log
C:\Windows\Temp\aspia\aspia_host_service-*.log
C:\Windows\Temp\aspia\aspia_desktop_agent-*.log
C:\Windows\Temp\aspia\aspia_file_transfer _agent-*.log
```

<br/>

## 8. Notes <a name="notes"></a>
  - The ID is linked to a computer using file C:\ProgramData\aspia\host_key.json. This file does not contain the computer ID, but it allows you to obtain the ID when connecting to the Router. The computer ID is assigned upon first connection. If you delete this file, the computer ID will change. This can be used to restore the computer ID after reinstalling the operating system (make a backup copy of this file before reinstalling the operating system).
  - Important! If you are cloning an operating system to other computers, make sure that file C:\ProgramData\aspia\host_key.json is removed from the image of the operating system being cloned. If you do not do this, then computers containing the same key file will one by one receive the same ID, pushing each other out of the server.
  - The Host configuration is contained in file C:\ProgramData\aspia\host.json. If you need to transfer the configuration, use command line parameters (or similar options in the GUI) to import and export. Do not copy this file as is. This may work "now", but may break your Host later.
  - It is recommended to disable HDR mode for correct color rendering.

---
layout: page
title: Aspia Client
---

## Table of contents
1. [Purpose](#purpose)
2. [Installing](#installing)
3. [Session types](#session-types)
    1. [Desktop manage and view](#session-desktop)
    2. [File transfer](#session-filetransfer)
    3. [System information](#session-sysinfo)
    4. [Text chat](#session-textchat)
3. [Command line](#command-line)
4. [Environment variables](#env-vars)
5. [Logs](#logs)

## Purpose <a name="purpose"></a>
Allows you to connect to and control Hosts.

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

## Session types <a name="session-types"></a>

### Desktop manage and view <a name="session-desktop"></a>
Allows to connect to a remote computer to interact with desktop (or view desktop).
<p align="center"><img src="/images/desktop-window.png"/></p>

At the top of the desktop control window is a toolbar that allows you to perform a number of actions.
<p align="center"><img src="/images/desktop-toolbar.png"/></p>

This panel appears when you hover the mouse cursor and hides when the mouse cursor leaves the toolbar area (you can dock the toolbar, then it will be permanently displayed).

The toolbar can be moved around the top of the window. To do this, hold down the right mouse button above the toolbar and move it left or right.

**Toolbar buttons**

| Name                                                     | Description                                                                                                                                                         |
|----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ![pin](/images/pin.png) Pin                              | If the button is checked, the toolbar will always be displayed. Otherwise, after a few seconds after moving the mouse pointer outside the panel, it will be hidden. |
| ![settings](/images/settings.png) Settings               | Invokes the dialog to change session parameters.                                                                                                                    |
| ![monitor](/images/monitor.png) Screen resolution        | Allows to change screen resolution.                                                                                                                                 |
| ![mon1](/images/monitor-1.png) Select screen             | Allows to select the monitor to be displayed.                                                                                                                       |
| ![mon1](/images/monitors.png) Full desktop               | Selecting this option will display all monitors.                                                                                                                    |
| ![power](/images/lightning.png) Power management         | Allows to shut down or restart the computer, end or block a user session.                                                                                           |
| ![cad](/images/ctrl-alt-del.png) Ctrl+Alt+Del            | Sends Ctrl+Alt+Del key combination to a remote computer.                                                                                                            |
| ![autosize](/images/autosize.png) Automatic size         | Changes the window size to the optimal one based on the size of the monitors of the remote and local computers.                                                     |
| ![fullscreen](/images/fullscreen.png) Full screen        | Switches the control window to full screen or returns the original state.                                                                                           |
| ![filetransfer](/images/ft-icon.png) File transfer       | Starts file transfer.                                                                                                                                               |
| ![sysinfo](/images/computer-info.png) System information | Displays a window with information about the remote computer.                                                                                                       |
| ![chat](/images/text-chat.png) Text chat                 | Starts text chat.                                                                                                                                                   |
| ![taskmgr](/images/task-manager.png) Task manager        | Starts task manager.                                                                                                                                                |
| ![update](/images/update.png) Remote update              | Runs an application update on a remote computer. Displayed only when the host version is smaller than the Console.                                                  |
| ![menu](/images/menu.png) Extended menu                  | Displays an extended menu of advanced features.                                                                                                                     |

<br/>

**Extended menu**

| Name                          | Description                                                                                                                                                    |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Paste clipboard as keystrokes | Pastes the contents of the clipboard on the remote computer in the form of keyboard key presses.                                                               |
| Scale                         | Allows to change the scaling mode (window filling or specified percentage scale).                                                                              |
| Automatic scrolling           | The contents of the window will automatically scroll as the cursor approaches the window borders.                                                              |
| Send key combinations         | Enables sending key combinations to the remote computer.                                                                                                       |
| Pause video when minimizing   | When you minimize the window, video transmission over the network will pause.                                                                                  |
| Pause audio when minimizing   | When you minimize the window, audio transmission over the network will pause.                                                                                  |
| Save screenshot...            | Allows to save the current remote desktop image to a file.                                                                                                     |
| Recording settings...         | Allows to configure the path in which the video recording of the session will be saved and enable or disable the automatic start of recording upon connection. |
| Start recording               | Starts or stops recording the session to a video file.                                                                                                         |
| Statistics                    | Opens the statistics dialog to view service connection metrics.                                                                                                |

<br/>

**Session settings**

In the session settings dialog you can change the parameters used in the current session. These settings only affect the current connection and will not be used for the next one.
<p align="center"><img src="/images/desktop-settings.png"/></p>


### File transfer <a name="session-filetransfer"></a>
Allows to transfer a file between local and remote computers, delete, rename files, create directories.
When connected to a remote computer lists of disks are displayed that allow you to estimate the amount of free space on them.
<p align="center"><img src="/images/file-transfer-window.png"/></p>

**Hot keys**

| Key combination | Description                   |
|-----------------|-------------------------------|
| Backspace       | Go to parent directory        |
| F2              | Rename selected item          |
| F4              | View list of disks            |
| F5              | Refresh                       |
| F11             | Send selected item or items   |
| Delete          | Delete selected item or items |

<br/>

### System information <a name="session-sysinfo"></a>
Allows to view basic information about the remote computer. The resulting information can be saved to an HTML file or printed out on a printer.
Double-clicking on any line with information about the system will be copied to the clipboard. In the context menu, you can selectively copy the name of the parameter, its value or a string in its entirety.
<p align="center"><img src="/images/system-info-window.png"/></p>

**Hot keys**

| Key combination | Description                      |
|-----------------|----------------------------------|
| Ctrl+S          | Save information to file         |
| Ctrl+P          | Print information on the printer |
| Ctrl+C          | Copy current line of information |
| F5              | Refresh                          |

<br/>

### Text chat <a name="session-textchat"></a>
Allows you to open a text chat with a user on a remote computer.
<p align="center"><img src="/images/text-chat-window.png"/></p>

## Command Line <a name="command-line"></a>

| Argument                       | Description                                                                                         |
|--------------------------------|-----------------------------------------------------------------------------------------------------|
| `-? -h --help`                 | Displays help on command line options.                                                              |
| `-v -version`                  | Displays version information.                                                                       |
| `--address <address>`          | Remote computer address or ID.                                                                      |
| `--port <port>`                | Remote computer port.                                                                               |
| `--name <name>`                | Display name of host.                                                                               |
| `--username <username>`        | Name of user.                                                                                       |
| `--password <password>`        | Password of user.                                                                                   |
| `--session-type <type>`        | Session type. Possible values: desktop-manage, desktop-view, file-transfer, system-info, text-chat. |
| `--codec <codec>`              | Type of codec. Possible values: vp8, vp9, zstd.                                                     |
| `--color-depth <value>`        | Color depth. Possible values: 3, 6, 8, 16, 32.                                                      |
| `--compress-ratio <value>`     | Compression ratio. Possible values: 1-22.                                                           |
| `--audio <value>`              | Enable or disable audio. Possible values: 0 or 1.                                                   |
| `--cursor-shape <value>`       | Enable or disable cursor shape. Possible values: 0 or 1.                                            |
| `--cursor-position <value>`    | Enable or disable cursor position. Possible values: 0 or 1.                                         |
| `--clipboard <value>`          | Enable or disable clipboard. Possible values: 0 or 1.                                               |
| `--desktop-effects <value>`    | Enable or disable desktop effects. Possible values: 0 or 1.                                         |
| `--desktop-wallpaper <value>`  | Enable or disable desktop wallpaper. Possible values: 0 or 1.                                       |
| `--font-smoothing <value>`     | Enable or disable font smoothing. Possible values: 0 or 1.                                          |
| `--clear-clipboard <value>`    | Clear clipboard at disconnect. Possible values: 0 or 1.                                             |
| `--lock-at-disconnect <value>` | Lock computer at disconnect. Possible values: 0 or 1.                                               |
| `--block-remote-input <value>` | Block remote input. Possible values: 0 or 1.                                                        |
| `--router-address <address>`   | Router address.                                                                                     |
| `--router-port <port>`         | Router port.                                                                                        |
| `--router-username <username>` | Router name of user.                                                                                |
| `--router-password <password>` | Router password of user.                                                                            |

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
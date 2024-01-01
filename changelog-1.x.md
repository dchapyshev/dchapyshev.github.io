---
layout: page
title: Change Log
---

### Version 1.1.2 (Mar 24, 2019)
  * This release is digitally signed again
  * Fixed display of network adapters in system information
  * Fixes tab pinning for read-only address books
  * Fixed handling of network paths (now it is possible to go to the desktop folder if it is redirected to the network folder)
  * Qt updated to 5.12.2

### Version 1.1.1 (Mar 13, 2019)
**This release is not digitally signed. The certification authority (StartCom) was deprived of the root certificate; now we are awaiting the receipt of a digital signature from another certification authority.**

  * Added session validation check (in command line parameters)
  * Fixed port check in computer properties (now you can enter port 65535)
  * OpenSSL updated to 1.1.1b
  * Protobuf updated to 3.7.0


### Version 1.1.0 (Feb 10, 2019)
#### General
  * Authorization and key exchange using SRP
  * Using AES256 GCM encryption if it is supported by both sides at the hardware level
  * Separated installers for console and host
  * Added tabs "License" and "Service information" in the dialog "About"
  * Ability to enter "weak" passwords (but a warning will be displayed)
  * Many bugs fixed

#### Console
  * Automatic check for updates at startup
  * Added hotkey support
  * Implemented ability to minimize to system tray
  * Implemented the ability to "pin" tabs with address books
  * Implemented a list of recent open address books
  * Implemented the ability to select the displayed columns in the address book
  * Added "Creation Time" and "Time Change" columns
  * The state of the address book tabs is saved (selection of displayed columns, their sorting, position and dimensions)
  * Added buttons "Save All" and "Close All"
  * Displaying the file path in the address book properties
  * Ability to connect to computers using command line parameters
  * Ability to display a connection dialog from the command line

#### Host
  * The ability to automatically import settings from a file during installation
  * Service management from configurator
  * Import and export of parameters in the configurator (via UI and command line)
  * Remote update capability

#### Desktop Management
  * The ability to switch monitors in multi-monitor configurations
  * System information (operating system, motherboard, BIOS, processor, logical drives, network connections, printers)
  * Power management
  * Screen scaling (local and host side)
  * The ability to block input on a remote computer
  * Ability to turn off effects and desktop wallpaper on a remote computer
  * Ability to start file transfer from desktop management
  * Ability to disable automatic scrolling desktop image
  * Capture system key combinations (with the ability to disable)
  * Saving screenshot
  * Button to close the session in full screen mode
  * Migrating from ZLIB to ZSTD

#### File Transfer
  * Display a list of disks
  * Added hotkey support
  * Saving the window state (dimensions, position, column sorting)
  * Displaying the progress of the transfer and deletion of files on the taskbar

### Version 1.0.1 (Jul 18, 2018)
  * Bug fixes.

### Version 1.0.0 (Jul 9, 2018)
  * The first public release of the application.
---
layout: page
title: Change Log
---

The change log for versions 1.x is available [here](/changelog-1.x).

### Version 2.6.5 (Nov 26, 2023)
  * Fixed checking user status when starting a file transfer session
  * Fixed address reuse when opening sockets
  * Fixed minimizing the window from full screen mode
  * Updated translations
  * Updated third-party components

### Version 2.6.4 (Nov 11, 2023)
  * Fixed getting the listening interface if empty address specified for relay

### Version 2.6.3 (Nov 11, 2023)
  * Fixed address converting to string
  * Fixed getting listening address in relay

### Version 2.6.2 (Nov 11, 2023)
  * Show remote update button only if desktop is available
  * Disabled full screen buttons for MacOS (use system buttons for this)
  * Fixed scrolling with high-resolution mouse/touchpad
  * Fixed crash when canceling a connection if there were multiple addresses for a hostname
  * Fixed crash in online checker
  * Fixed TCP/IP v6 connections
  * Fixed desktop session blocking when transferring and deleting files
  * Fixed NumLock state for MacOS
  * Fixed capture of global hotkeys for MacOS

### Version 2.6.1 (Nov 6, 2023)
  * Fixed state update when selecting update check frequency
  * Added check for older version (fixes screen image in UAC)
  * Fixed potential crash in online checker
  * Enable channel id support for router (fixes online checker issue)
  * Fixed target directory for x64 installer

### Version 2.6.0 (Nov 6, 2023)
  * Releases for Windows are now also available for x64 architecture
  * Implemented display of capture errors in the Client
  * Reworked switching monitors in the Client (the ability to switch monitors without entering the drop-down menu)
  * Implemented adjustment to bandwidth (due to automatic adjustment of FPS and image quality)
  * Implemented automatic checking for Host updates with the ability to fully automatically update
  * Expanded the ability to configure logging through environment variables
  * Implemented the ability to export and import to JSON in the address book
  * Identification of DDR5 RAM in System Information
  * File transfer speed display
  * Ability to set access rights for connections using one-time passwords
  * Natural sorting of computer names for the address book
  * Fixed a bug that caused the GUI process to not start when restarting a service with a locked user session
  * Fixed Console crashing when closing tabs
  * Fixed getting data on physical memory usage in the task manager
  * Implemented version checking (Client/Console can no longer connect to Hosts of a newer version)
  * Support for connecting to Hosts versions below 2.0.0 has ended
  * Fixed restoration of the position of the remote control window when exiting full screen mode (in Windows 11)
  * Fixed connection to laptops with the lid closed

### Version 2.5.2 (Dec 26, 2022)
  * Update check issue fixed

### Version 2.5.1 (Dec 25, 2022)
  * Fixed incorrect behavior when backing up configuration files

### Version 2.5.0 (Dec 25, 2022)
  * Implemented saving properties of computers and groups of computers via the key combination Ctrl+Enter
  * Implemented support for mouse buttons Back/Forward in desktop management
  * Implemented saving a pinned position for the toolbar in the Client
  * Implemented task manager
  * Implemented the ability to check the status of computers in the address book (online/offline)
  * Implemented automatic creation of backup copies for configuration files
  * Implemented the ability to pause the transmission of video and sound when the Client is minimized
  * Implemented the ability to save lists of Hosts and Relays to a JSON file in the router management
  * Implemented the ability to copy lines and individual values in the router management
  * Implemented display of statistics for Relays in router management (sending statistics is disabled by default in the Relay configuration)
  * Implemented menu item for clearing connection history in the Client
  * Implemented display of the current ID and IP addresses of the computer in the tooltip for the icon in the Host tray
  * Implemented output of the current host ID from the command line (aspia_host_service --host-id)
  * Call quick connect when pressing F8 in the Console
  * Sort groups of computers alphabetically
  * Fixed returning the current resolution on the Host after changing it in the Client
  * Fixed screen capture on laptops with discrete and integrated video cards
  * Fixed screen capture with HDR enabled
  * Fixed incorrect UI scaling when using DPI equal to or greater than 150%
  * Other fixes and improvements

### Version 2.4.0 (Apr 10, 2022)
  * Implemented ListenInterface parameter for Router/Relay.
  * Implemented the ability to move the toolbar in desktop management (by right mouse button).
  * Implemented connecting by permanent user name to RDP sessions.
  * Implemented the ability to place update server files in nested directories.
  * Implemented inheritance mechanism and default configurations for computers and groups of computers in the Aspia Console.
  * Implemented Applications, Licenses and Open Files categories in System Information.
  * Implemented recording of sessions.
  * Implemented text chat session.
  * Implemented saving the state of the address book properties dialog.
  * Added "version" command line flags.
  * Added "install/remove/start/stop" command line flags for Host service.
  * Added "cursor-position" command line option to Aspia Client.
  * Added revision to version info.
  * Added update checker to Aspia Client.
  * Updated third party components.
  * Fixed work if one of the video adapters does not support DirectX 11.
  * Fixed wallpaper restoring.
  * Fixed screen switching.

### Version 2.3.0 (Feb 26, 2022)
  * Cursor scaling according to DPI
  * Removed xfixes library from Router and Relay dependencies in Linux
  * Fixed installation of Console and Client in Ubuntu 20.04
  * Extended system information functionality
  * Ability to view system information without connecting to a desktop
  * Changing remote monitor resolutions
  * Ability to send the clipboard as keystrokes
  * UI exit prevention option in Host options
  * Displaying the position of the remote cursor
  * In Windows 10, cursor capture is now done via DXGI (when using DXGI screen capture)
  * Ability to clear the clipboard after disconnecting
  * All connection parameters (including the password) can now be passed in the Client command line
  * Ability to sort by columns in router management
  * Performance optimizations
  * Fixed display of the notification bar on the host at DPI > 96
  * Fixed display of the toolbar in the client when switching between menus
  * Fixed disabling / enabling desktop wallpaper when the screen saver is active
  * Fixed restoring desktop wallpaper after reboot
  * Fixed sticky keyboard keys on the client side

### Version 2.2.1 (Jan 11, 2022)
  * Fixed crash when outputting Qt messages to the log
  * Updated third party libraries

### Version 2.2.0 (Dec 27, 2021)
  * Implemented the ability to confirm the connection on the host
  * Ability to manage parameters of one-time passwords
  * In the parameters of the router, explanations have been made about what the router is for
  * Ability to suspend the connection, disable mouse and/or keyboard input at the initiative of the user on the host side
  * Administrator rights are automatically requested to open host settings
  * Returned support for ZSTD based video codec
  * For Windows 7 / 2008R2 implemented support for using the mirror-driver by UltraVNC or TightVNC
  * Updated third party libraries (asio, zstd, protobuf, openssl, libvpx, opus, sqlite)
  * Fixed "duplication" of host IDs on the router
  * Fixed the ability to connect by ID from the command line
  * Fixed display of router port in host settings
  * Fixed import of configuration file during installation if there are spaces in the path
  * Fixed language code in the installer (the main language is set to en-us)

### Version 2.1.0 (Sep 16, 2021)
  * Password protecting for host configuration
  * The ability to reboot the host in safe mode
  * Fixed import of host configuration when installing msi installer
  * Fixed problems when connecting RDP sessions to the host
  * Other improvements and fixes

### Version 2.0.0 (Sep 10, 2021)
  * Supports connection by ID and NAT traversal
  * Client and Console Versions for Linux / MacOSX
  * Support for capture using DXGI
  * Ability to create computers by copying in the address book
  * Support for audio transmission
  * Ability to automatically lock the computer when disconnected
  * Ability to enable / disable saving a list of recent address books
  * Implemented the ability to disable font smoothing
  * Added a button to minimize the window in full screen mode
  * Other improvements and fixes

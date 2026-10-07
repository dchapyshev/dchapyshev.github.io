---
layout: page
title: Change Log
---

The change log for versions 2.x is available [here](/changelog-2.x).

The change log for versions 1.x is available [here](/changelog-1.x).

### Version 3.0.28 (Oct 7, 2026)

**Client**

  * A comment of several lines no longer stretches the row in the list of router hosts. The whole comment is shown in the tooltip.

### Version 3.0.27 (Oct 7, 2026)

**Host**

  * Windows: fixed connections being rejected after an update when the session was locked on disconnect.

### Version 3.0.26 (Oct 7, 2026)

**Host**

  * Windows: fixed settings import from an exported installer when upgrading from version 2.x.

### Version 3.0.25 (Oct 6, 2026)

**Host**

  * Windows: fixed a crash of the host service when it stops.
  * Linux: reduced memory usage of the screen capture in GNOME sessions.
  * Reduced memory usage when there are no active connections.

**Client**

  * In the "Host" dialog of a local host, the "Address" field now gets the focus. When a host is added, the "Name" field is filled in from the address as you type until you change the name yourself.
  * In the "Host Properties" dialog of a router host, the "Display Name" field now gets the focus.

**Common**

  * The standard context menus of text and number fields (Undo, Redo, Cut, Copy, Paste, Delete, Select All) are now translated.

### Version 3.0.24 (Oct 5, 2026)

**Host**

  * Windows: the one-time password of Quick Support now changes every 15 minutes instead of 5.

**Client**

  * If the host refuses the user name or password, the authorization dialog now opens again to enter them once more.
  * F1 and F8 are no longer taken by the "Help" and "Quick Connect" actions while a session is open in a tab.
  * The settings of remote desktop sessions, of session recording and of UDP connections are now kept in the database and are no longer reset when the application is updated.

### Version 3.0.23 (Oct 3, 2026)

**Host**

  * Windows: Quick Support started in a Remote Desktop session with administrator rights now gives access to that session instead of the console session.
  * Windows: several copies of Quick Support can now run on one computer at the same time, for example in different Remote Desktop sessions.
  * Windows: Quick Support now has its own icon for the executable file, the windows and the tray.
  * Android: the status line no longer shows the address of the router.

**Client**

  * The list of unapproved hosts now has the "Connect Time" column, lets you choose the visible columns and marks Quick Support hosts with their own icon.
  * Connecting to a Quick Support host now offers only the one-time password in the authorization dialog.
  * A double click on a Quick Support host with a session type that Quick Support does not serve now shows a message instead of doing nothing.
  * The list of approved hosts of a router now has the session type selector on the toolbar, and a double click connects to the host with the selected session type instead of opening the host properties.

**Router**

  * The list of temporary hosts now includes the time each host connected.

### Version 3.0.22 (Oct 2, 2026)

**Host**

  * Windows: added Aspia Quick Support, a portable version of the host that runs without installation and works through a router. It is exported from the host settings with the settings of the host built in: the "Export" button now offers the settings, the installer or Quick Support.
  * Android: in the background mode the host now runs with a notification and stays reachable in the local network as well as through the router.
  * Android: the system Back button now closes dialogs and returns to the previous page of the settings instead of closing the application. In the background mode it moves the application to the background on the main screen.
  * Android: the floating session button is now shown over the system settings and is hidden on the lock screen.
  * Android: fixed the host disconnecting from the router while the application was on the screen after it was reopened from the launcher.

**Client**

  * The list of temporary hosts of the router shows the type of the host: installed or Quick Support. Quick Support hosts cannot be approved as permanent ones.

### Version 3.0.21 (Sep 30, 2026)

**Common**

  * Added the Bulgarian translation.
  * Added the ability to set a custom update server (its address and an optional public key of its packages).

**Host**

  * Windows: added the "Export installer" button to the host settings. It saves the installed package of the host with the current settings built in, so that already configured hosts can be installed on other computers.
  * macOS: added "Uninstall Application" to the "Aspia" menu of the host window.
  * macOS: fixed the restart of the host after a privacy permission is granted.
  * Android: added "Background mode": the host stays connected to the router while the app is not on the screen or the screen is off.
  * Android: added the option to confirm the screen capture request automatically.

**Client**

  * The host telemetry window now shows the update server of the host.

### Version 3.0.20 (Sep 29, 2026)

**Host**

  * The host window now shows the last permanent ID of the computer when it is not connected to the host service (for example, in an RDP session) and while the connection to the router is being restored.
  * The password dialog that protects the host settings is now shown on top of other windows.
  * Added support for macOS 27.
  * Linux: fixed the missing login screen after the user logs out on some systems.
  * Linux: fixed KMS screen capture on computers with several video cards.
  * Linux: a crashed host process now leaves a complete core dump for diagnostics.

**Client**

  * Added "Quick Connect" (F8): a one-time connection to a computer by its address or by its ID through a router, without adding it to the database.
  * Several hosts can now be moved to another group at once by drag and drop, for both local and router hosts.
  * Router administrators can now approve several temporary hosts at once.
  * Windows, macOS: added the "Unlock automatically on startup" option for the master password. The key of the database is then kept in the keystore of the system.

**Relay**

  * Fixed the error on a clean installation of the Relay on a computer without other Aspia components.

### Version 3.0.19 (Sep 28, 2026)

**Common**

  * Linux: automatic updates now work on systems based on ALT Linux (for example, Ximper Linux).

**Host**

  * Linux, macOS: the "aspia_host --version" command no longer needs a graphical session and prints only the version number.

**Client**

  * The workspace of a router host can now be changed in the host properties dialog (for router administrators). The dialog can also take a host out of its workspace or group.
  * Fixed a client crash when removing hosts from a workspace in the workspace properties dialog.
  * Fixed possible client crashes when the list shown behind an open dialog, question or context menu is updated at the same time.

### Version 3.0.18 (Sep 27, 2026)

**Common**

  * The text chat is now called "Chat" everywhere in the interface.
  * Fixed errors and typos in the Russian translation.

**Client**

  * The commands for editing and deleting a workspace are now shown only to administrators of the router.
  * Android: routers imported from a desktop backup with the Administrator or Manager access level now connect with the Operator access level, the only one supported on Android.

### Version 3.0.17 (Sep 26, 2026)

**Common**

  * Windows: the installation folder can no longer be changed. The applications are always installed to the default protected location.
  * The log level can now be changed with the ASPIA_LOG_LEVEL environment variable, previously it was ignored. The logs no longer contain the values of environment variables that are not needed for diagnostics.
  * Linux: services write their logs to /var/log/aspia, user applications to ~/.local/state/aspia/logs.

**Host**

  * Fixed a host crash in the Intel graphics driver during hardware H.264 encoding on some older Intel GPUs.
  * Added the "Allow hardware video encoding" option to the host settings (Windows).
  * The mouse and keyboard lock and the pause set in the host notifier are now reset when the last client disconnects.
  * Linux: fixed a black screen and a host crash when connecting to GNOME on Wayland on some systems (for example, Ximper Linux).
  * Linux: added support for the GNOME Console and Ptyxis terminals.

**Client**

  * Added the "Allow hardware video encoding" and "Allow hardware video decoding" options to the Desktop settings.
  * Local groups, routers and saved credentials are now sorted alphabetically. Numbers in the names of groups and workspaces in the sidebar are sorted by value.
  * Android: local hosts are now sorted alphabetically.

### Version 3.0.16 (Sep 25, 2026)

**Host**

  * Fixed a host crash when scaling the screen image.
  * Settings and the security log now open only with administrator privileges.
  * Fixed hardware H.264 encoding for screens with odd dimensions (for example, Windows running in a virtual machine window).
  * Linux: client and host shortcuts now display correctly and can be pinned to the GNOME dock.

**Client**

  * Operators can now change saved user names and passwords for router hosts.
  * Router hosts can now be edited from search results.
  * Android: fixed letter case switching on the keyboard in landscape orientation.

### Version 3.0.15 (Sep 25, 2026)

**Common**

  * Ported to Qt 6.
  * The Host is now available for Linux (X11 and Wayland), macOS and Android. Previously it was available for Windows only.
  * Added the Client for Android.
  * Added a new session type: Terminal.
  * The "Desktop view" session type has been removed.
  * Added tools and scripts that can be run on a remote computer.
  * The clipboard now supports HTML, RTF, CSV, PNG, SVG and files. Previously only plain text was supported.
  * Added new categories to system information: Processor, DMI, Drives and S.M.A.R.T.
  * The chat history is now saved and is shown again when connecting to the same computer.
  * Added switching between user sessions of a remote computer running Windows.
  * Added the H264 video codec. It is available only if the Host supports hardware encoding, the Client does not require it.
  * The ZSTD video codec has been removed.
  * The video codec is now chosen automatically and can be changed during a session. The manual selection of the codec and the color depth has been removed.
  * Added direct UDP connections between peers: directly in a local network, otherwise via UDP hole punching or port mapping (UPnP, NAT-PMP, PCP).
  * New connections now always use AES-256 GCM.
  * All icons are now vector, which improves their appearance on screens with high resolution.
  * Added support for themes.
  * Added Korean and Japanese translations.
  * Added estimation of the available bandwidth.
  * The minimum supported version is now 2.6.0.

**Router**

  * Added a built-in STUN server (port 8065 by default).
  * The Router now listens on separate ports: 8061 for hosts, 8062 for clients and 8063 for relays. Port 8060 is kept for hosts of previous versions.
  * Two-factor authentication (TOTP) is now mandatory for all Router users.
  * Router users now have three types of sessions: administrators, managers and clients. Previously there were only administrators and clients.
  * Added workspaces and access lists for users.
  * Added approving of hosts. A host that connects for the first time receives a temporary random ID and is shown as "Unassigned". After the administrator approves it, the host is stored in the database and receives a permanent ID.
  * White lists now support subnet masks.
  * The Router service now runs under a low-privilege account.

**Relay**

  * The default Router port has been changed to 8063.
  * The Relay service now runs under a low-privilege account.

**Host**

  * The Host is now a single binary file.
  * Added a security log that records connections, disconnections and authentication failures.
  * Added a menu item that shows the information about the system of the computer.
  * The choice of the preferred screen capturer is now available in the settings.
  * Settings are now separated by access level: personal settings of a user, system settings that only an administrator can change, and security-sensitive data available only to SYSTEM and administrators.

**Client**

  * Added an option to open sessions in tabs of a single window.
  * The address book is now stored in an encrypted database.
  * The master password is now always enabled.
  * Added search in the address book and on the Router.
  * Added the preferred screen resolution option.
  * Connection from the command line is now performed with an `aspia://` link. The other command line options have been removed.

**Console**

  * The Console has been removed. The address book and Router management are now part of the Client.

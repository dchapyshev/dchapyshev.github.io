---
layout: page
title: Aspia Client
---

## Table of contents
1. [Purpose](#purpose)
2. [Installing](#installing)
3. [Master password](#master-password)
4. [Main window](#main-window)
5. [Local address book](#address-book)
    1. [Computer groups](#computer-groups)
    2. [Computers](#computers)
    3. [Import and export](#import-and-export)
    4. [Online check](#online-check)
6. [Connection to a Router](#router-connect)
7. [Sections of a Router](#router-manage)
    1. [Unapproved hosts](#router-unapproved)
    2. [Approved hosts](#router-hosts)
    3. [Clients](#router-clients)
    4. [Relays](#router-relays)
    5. [Users](#router-users)
    6. [Workspaces](#router-workspaces)
8. [Session types](#session-types)
    1. [Desktop](#session-desktop)
    2. [Terminal](#session-terminal)
    3. [File transfer](#session-filetransfer)
    4. [System information](#session-sysinfo)
    5. [Text chat](#session-textchat)
9. [Settings](#settings)
10. [Command line](#command-line)
11. [Environment variables](#env-vars)
12. [Logs](#logs)

## 1. Purpose <a name="purpose"></a>
Allows you to connect to and control Hosts. It also contains the address book and the management of
Routers.

<br/>

## 2. Installing <a name="installing"></a>
```bash
Windows x86
  Run aspia-client-3.0.0-x86.msi and follow the instructions on the screen.

Windows x86_64
  Run aspia-client-3.0.0-x86_64.msi and follow the instructions on the screen.

macOS
  Open aspia-client-3.0.0.dmg and move "Aspia Client" to "Applications".

Ubuntu
  sudo apt install ./aspia-client-3.0.0-x86_64.deb

RHEL and compatible
  sudo dnf install ./aspia-client-3.0.0-x86_64.rpm
```

<br/>

## 3. Master password <a name="master-password"></a>
The addresses of the computers, their credentials and the parameters of the connections to Routers
are stored in the data base of the application in the encrypted form. The key of the encryption is
derived from the master password, therefore the password is mandatory: without it the application
cannot read its own data, and it cannot be disabled in the settings.

**Setting the password at the first start**

At the very first start the application has no data base yet and offers to create the master
password. The "Set Master Password" dialog contains the "New password" and "Confirm password"
fields. The password must be entered twice, because it cannot be recovered later.

<p align="center"><img src="/images/client-master-password-set.png" width="400"/></p>

After the password is set, the data base is created and the main window of the application is opened.

**Entering the password at the start**

At every next start the "Unlock" dialog is displayed. Enter the master password and press OK. The
button at the right side of the field shows the entered characters, so you can check what you
typed.

<p align="center"><img src="/images/client-master-password-unlock.png" width="400"/></p>

If the password is wrong, the application reports "Invalid master password" and asks for it again,
the number of attempts is not limited. Pressing Cancel closes the application, because without the
password it cannot read its data base.

**Changing the password**

Open the settings with the **Settings...** command of the **File** menu, find the **Master Password**
group and press **Change...**. The "Change Master Password" dialog contains the "Current password",
"New password" and "Confirm password" fields.

<p align="center"><img src="/images/client-master-password-change.png" width="400"/></p>

The current password is required, so the password can be changed only on a computer where the
application is already unlocked. After the change the data base is re-encrypted with the new key and
the next start requires the new password.

**WARNING!** The master password is not stored anywhere and cannot be recovered or reset. If it is
lost, the data base cannot be decrypted, and the only way to continue is to create it anew. This
means the loss of the address book, of the saved credentials and of the connections to Routers.

## 4. Main window <a name="main-window"></a>
The window of the application consists of tabs. The **Management** tab is always present, the
sessions are opened in the other tabs, unless the opening in tabs is disabled in the **View** menu.

The Management tab is used for:

  - the local address book with its groups and computers;
  - the workspaces of the Routers with the groups and the computers inside them;
  - the management of the Routers, available to the administrators: the users, the connected clients
    and relays, the approving of the hosts.

<p align="center"><img src="/images/client-main-window.png"/></p>

The left part of the tab contains the tree with the **Local** address book and with the added
Routers. The sections listed above are placed under the item of the corresponding Router.

Select an item in the tree to see its contents in the right part of the tab: a list of computers, of
users, of connected clients or of relays, with the set of the columns of that list. The status bar
under the list shows how many items the selected item contains.

The tool bar above the list contains the commands that are applicable to the selected item: for the
local address book these are the commands of the groups and of the computers, for the section of the
users of a Router these are the commands of the users. The **Edit**, **Session Type** and **Actions**
menus are filled the same way and are not displayed when the active tab has nothing to put in them.

The search field of the tool bar looks for computers by name and by address in the selected item.

The **File** menu contains the **Settings...** and **Exit** commands, the **Help** menu contains the
online help and the information about the application. The **View** menu changes the appearance of
the window:

| Command               | Description                                                  |
|-----------------------|--------------------------------------------------------------|
| Tool Bar              | Shows or hides the tool bar.                                 |
| Status Bar            | Shows or hides the status bar.                               |
| Search Field          | Shows or hides the search field in the tool bar.             |
| Large icons           | Switches the list of computers to large icons.               |
| Open Sessions in Tabs | If disabled, every session is opened in a separate window.   |
| Always on Top         | Keeps the window of the application above the other windows. |

<br/>

## 5. Local address book <a name="address-book"></a>
The **Local** section is the address book stored on this computer. Unlike the sections of a Router,
it does not require any connection: the entries are stored in the data base of the application and
are available immediately after the start.

Use the local address book when you connect to computers by their address, when a Router is not used
at all, or when you want to keep your own list of computers in addition to the list of a Router.

The address book is a tree of groups, and the computers are placed inside these groups. Select a
group in the left part of the window to see its computers in the right part. The status bar shows how
many groups and computers the selected group contains.

<br/>

### 5.1. Computer groups <a name="computer-groups"></a>
Groups allow you to organize the computers, for example by an office, a customer or a purpose. A
group can contain other groups, so the structure can be of any depth.

To create a group, select the group it should be placed in and use **Add Group**. The dialog
contains the following fields:

| Field        | Required | Description                                                                                     |
|--------------|----------|-------------------------------------------------------------------------------------------------|
| Parent Group | Yes      | The group the created group is placed in. The group selected in the tree is offered by default. |
| Name         | Yes      | The name displayed in the list, from 1 to 64 characters. Any characters are allowed.            |
| Comment      | No       | Any text up to 2048 characters, for example the purpose of the group.                           |

<br/>

**Commands for groups**

| Command                                                                                              | Description                                         |
|------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| <img src="/images/icons/add-folder.svg" width="24" height="24" alt="add-folder"/> Add Group          | Creates a new group.                                |
| <img src="/images/icons/change-folder.svg" width="24" height="24" alt="change-folder"/> Edit Group   | Changes the name, the comment and the parent group. |
| <img src="/images/icons/remove-folder.svg" width="24" height="24" alt="remove-folder"/> Delete Group | Deletes the group with all its contents.            |

<br/>

Deleting a group deletes everything inside it, including the nested groups and the computers, so the
application asks for a confirmation. To move a group or a computer to another place of the tree, drag
it with the mouse or change the parent group in the properties.

<br/>

### 5.2. Computers <a name="computers"></a>
An entry of a computer stores everything that is needed to connect to it, so a session can be started
without entering the address and the credentials every time.

To create an entry, select a group and use **Add Host**. The dialog contains the following fields:

| Field    | Required | Description                                                                                                                                                                            |
|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Group    | Yes      | The group the entry is placed in. The group selected in the tree is offered by default.                                                                                                |
| Name     | Yes      | The name displayed in the list, from 1 to 64 characters. Any characters are allowed.                                                                                                   |
| Router   | Yes      | Either "Without Router" for a direct connection, or one of the Routers added to the address book.                                                                                      |
| Address  | Yes      | The address of the Host for a direct connection, or the Host ID on the selected Router. See the formats below.                                                                         |
| Username | No       | The name of the user of the Host, up to 64 characters. Letters, digits and the `. _ - @` characters are allowed. If the field is empty, the credentials are asked at every connection. |
| Password | No       | The password of the user of the Host, up to 64 characters. Any characters are allowed.                                                                                                 |
| Comment  | No       | Any text up to 2048 characters, for example the location of the computer or the name of its owner.                                                                                     |

<br/>

If a Router is not selected, the field contains a domain name, an IPv4 or an IPv6 address. The port
is specified after a colon; when it is omitted, the default port 8050 is used. An IPv6 address is
always enclosed in square brackets. Examples of correct input:

```bash
IPv4 (without port)
  192.168.1.10

IPv4 (with port)
  192.168.1.10:8050

IPv6 (without port)
  [2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d]

IPv6 (with port)
  [2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d]:8050

Computer or domain name (without port)
  home-pc

Computer or domain name (with port)
  home-pc:8050
```

<br/>

If a Router is selected, the field contains the Host ID issued by that Router, and the connection is
established through it.

<p align="center"><img src="/images/client-host-properties.png" width="400"/></p>

**Commands for computers**

| Command                                                                                                 | Description                          |
|---------------------------------------------------------------------------------------------------------|--------------------------------------|
| <img src="/images/icons/add-computer.svg" width="24" height="24" alt="add-computer"/> Add Host          | Creates a new entry.                 |
| <img src="/images/icons/change-computer.svg" width="24" height="24" alt="change-computer"/> Edit Host   | Changes the parameters of the entry. |
| <img src="/images/icons/copy-computer.svg" width="24" height="24" alt="copy-computer"/> Copy Host       | Creates a copy of the entry.         |
| <img src="/images/icons/remove-computer.svg" width="24" height="24" alt="remove-computer"/> Delete Host | Deletes the entry.                   |

<br/>

**Copy Host** is convenient when several computers differ only in the address: create one entry, fill
in the credentials and then copy it the required number of times.

### 5.3. Import and export <a name="import-and-export"></a>
The address book is one of the parts of the data base of the application, and the data base is
encrypted, so it cannot be copied to another computer as a file. Use the export and the import to
transfer the address book between computers and to make backups of it.

**Commands**

| Command                                                                                              | Description                                                        |
|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| <img src="/images/icons/export.svg" width="24" height="24" alt="export"/> Export Address Book...     | Saves the address book to a JSON file.                             |
| <img src="/images/icons/import.svg" width="24" height="24" alt="import"/> Import Address Book...     | Restores the address book from a JSON file.                        |
| <img src="/images/icons/import.svg" width="24" height="24" alt="import"/> Import Old Address Book... | Imports an address book of a previous version from an `.aab` file. |

<br/>

At the export the application asks for a password and encrypts the file with it. This password is
not the master password: it is entered every time and is asked again at the import of the file, so
remember it or store it separately. A file exported on one computer can be imported on another one,
where the master password is a different one.

If you are updating from version 2.7, use **Import Old Address Book...** after the first start: the
`.aab` files of the previous versions are not converted automatically. The file remains untouched, so
the import can be repeated.

<br/>

### 5.4. Online check <a name="online-check"></a>
The **Status** column of the list shows whether a computer is available. When
**Auto-refresh Status** is enabled, the state of the computers displayed in the list is checked
automatically. The state can also be refreshed at any moment with the
<img src="/images/icons/reload.svg" width="24" height="24" alt="reload"/> **Reload** command.

The way the check is performed depends on the entry: a computer with an address is checked by a
connection to that address, and a computer that is connected through a Router is checked by a request
to that Router. A result is remembered for about a minute, so switching between the groups does not
start a new check every time. **Reload** discards the remembered results of the displayed computers
and checks them again.

## 6. Connection to a Router <a name="router-connect"></a>
A Router is a server that keeps the list of the Hosts registered on it and helps the Client and the
Host to find each other. A connection to a Router gives the following:

  - **A connection without an address of the Host.** A Host registered on a Router is connected to it
    permanently and is identified by its Host ID. The Client asks the Router for that Host, and the
    peers agree on the way they will reach each other: directly when it is possible, or through a
    Relay when the direct connection cannot be established. Neither the Host nor the Client needs a
    public address or a forwarded port.
  - **A common list of computers.** The hosts, the groups and the credentials are stored on the
    Router, so the same list is available from any computer where you connect with your account, and
    a change made by one user is seen by the others.
  - **Access control.** The hosts are distributed among workspaces, and every user gets access only
    to the workspaces that are granted to them.
  - **Management of the Router**, if the account has the rights of an administrator: the users, the
    connected clients and relays, the approving of the hosts and the remote check for updates of the
    hosts.

A Router is added to the address book as a separate item. The connection to it requires an account
created on that Router.

**Commands for Routers**

| Command                                                                                               | Description                               |
|-------------------------------------------------------------------------------------------------------|-------------------------------------------|
| <img src="/images/icons/router-add.svg" width="24" height="24" alt="router-add"/> Add Router          | Adds a Router to the address book.        |
| <img src="/images/icons/router-edit.svg" width="24" height="24" alt="router-edit"/> Edit Router       | Changes the parameters of the connection. |
| <img src="/images/icons/router-delete.svg" width="24" height="24" alt="router-delete"/> Delete Router | Removes the Router from the address book. |

<br/>

The dialog of a Router contains the following fields:

| Field        | Required | Description                                                                                                                                                                                                                                                    |
|--------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Address      | Yes      | The address of the Router. The port is specified after a colon; when it is omitted, the default port 8062 is used.                                                                                                                                             |
| Display Name | No       | The name under which the Router is displayed in the tree. When the field is empty, the address of the Router is displayed instead. Give a name to the Routers when there are several of them or when the address says nothing about the purpose of the server. |
| Access Level | Yes      | The type of the session the connection is established with: Administrator, Manager or Client. The account must have the rights of the selected type on the Router.                                                                                             |
| User Name    | Yes      | The name of the account on the Router.                                                                                                                                                                                                                         |
| Password     | Yes      | The password of the account on the Router.                                                                                                                                                                                                                     |

<br/>

The icon of a Router in the tree shows the state of the connection to it: offline, connecting or
online.

<p align="center"><img src="/images/client-router-add.png" width="400"/></p>

<br/>

**Two-factor authentication**

Two-factor authentication is mandatory for all users of a Router and cannot be disabled.

At the first connection the "Enable Two-Factor Authentication" dialog is displayed. It contains a QR
code that must be scanned with an authenticator application, and the same key in the text form for
the case when the code cannot be scanned. The enrollment is completed by entering the six-digit code
shown by the application.

At the next connections the "Two-Factor Authentication" dialog asks for the six-digit code. After a
successful authentication the computer receives a token and the code is not requested at the
connections from it any more. If an administrator resets the authentication of the user, the
enrollment is performed again.

<p align="center"><img src="/images/client-2fa-enroll.png" width="260"/></p>

<br/>

**Rights of a user**

The set of the sections available after the connection depends on the type of the sessions of the
user:

| Type          | Available sections                                                               |
|---------------|----------------------------------------------------------------------------------|
| Administrator | All the sections, including the users, the clients and the relays of the Router. |
| Manager       | The workspaces available to the user, their hosts and the unapproved hosts.      |
| Client        | The workspaces available to the user and their hosts.                            |

<br/>

The rights are inherited: an administrator has the rights of a manager and a client, a manager has
the rights of a client.

<br/>

## 7. Sections of a Router <a name="router-manage"></a>
The sections listed below are displayed under the item of the Router.

<br/>

### 7.1. Unapproved hosts <a name="router-unapproved"></a>
A Host that connects to the Router for the first time is not stored in the data base of the Router
and receives a temporary Host ID. Such hosts are displayed in the **Unapproved Hosts** section.

The section is available to the users of all the types, and the users of all the types can connect to
the hosts of this section: unlike the approved hosts, these hosts do not belong to any workspace yet,
so the access to them is not limited by the workspaces granted to a user. The list displays the Host
ID, the name of the computer, the operating system and the version; the address of a host is
displayed to the administrators only.

You can connect to an unapproved host as usual: all the types of the sessions are available for it.
The difference is that the host has no entry in the data base yet, so its parameters cannot be
stored: the display name, the group, the comment and the credentials cannot be specified, and the
user name and the password are asked at every connection. The temporary Host ID is not permanent
either and changes when the host reconnects to the Router.

Approve the host to make these parameters available. After that it is stored in the data base,
receives a permanent Host ID and can be edited like any other host.

**Commands**

| Command                                                                                               | Description                                                                                                               |
|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| <img src="/images/icons/computer-approve.svg" width="24" height="24" alt="computer-approve"/> Approve | Approves the host: it is stored in the data base, receives a permanent Host ID and moves to the "Approved Hosts" section. |

<br/>

<p align="center"><img src="/images/client-router-unapproved.png" width="700"/></p>

<br/>

### 7.2. Approved hosts <a name="router-hosts"></a>
The **Approved Hosts** section contains all the hosts stored in the data base of the Router and is
available to an administrator. For every host the list displays its Host ID, the display name, the
name of the computer, the address, the user name, the comment, the workspace, the operating system,
the version, the architecture, the time of the last connection and of the last modification.

**Commands**

| Command                                                                                                       | Description                                                                                                                                                |
|---------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <img src="/images/icons/change-computer.svg" width="24" height="24" alt="change-computer"/> Edit Host         | Changes the group inside the workspace, the display name, the credentials and the comment of the host. Available for the hosts that belong to a workspace. |
| <img src="/images/icons/computer-update.svg" width="24" height="24" alt="computer-update"/> Check for Updates | Makes the host check for updates immediately. The host must be online.                                                                                     |
| <img src="/images/icons/remove-computer.svg" width="24" height="24" alt="remove-computer"/> Remove            | Uninstalls the Host on the remote computer and deletes its entry from the data base.                                                                       |
| <img src="/images/icons/save.svg" width="24" height="24" alt="save"/> Save...                                 | Saves the list displayed in the section to a JSON file.                                                                                                    |

<br/>

**WARNING!** **Remove** is not just a deletion of a record. The Router sends the command to the Host,
and the Host disables the use of the Router, erases the address and the public key of the Router, its
Host ID and its key, and then uninstalls the application from the computer. The remote computer
becomes unavailable for connections, and the Host has to be installed and configured again to return
it.

If the host is offline at the moment of the command, the removal is scheduled and is performed when
the host connects to the Router the next time.

<br/>

<p align="center"><img src="/images/client-router-hosts.png" width="700"/></p>

<br/>

### 7.3. Clients <a name="router-clients"></a>
The **Clients** section displays the clients connected to the Router at the moment and is available
to an administrator. For every client the list displays the name of the computer, the IP address, the
time of the connection, the version, the architecture and the operating system.

**Commands**

| Command                                                                                                  | Description                                                           |
|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| <img src="/images/icons/disconnect-one.svg" width="24" height="24" alt="disconnect-one"/> Disconnect     | Disconnects the selected session.                                     |
| <img src="/images/icons/disconnect-all.svg" width="24" height="24" alt="disconnect-all"/> Disconnect All | Disconnects all the sessions.                                         |
| <img src="/images/icons/save.svg" width="24" height="24" alt="save"/> Save...                            | Saves the list displayed in the section to a JSON file.               |
| <img src="/images/icons/copy.svg" width="24" height="24" alt="copy"/> Copy Row                           | Copies the whole line of the list to the clipboard.                   |
| <img src="/images/icons/copy.svg" width="24" height="24" alt="copy"/> Copy Value                         | Copies the value of the cell the menu was called on to the clipboard. |

<br/>

### 7.4. Relays <a name="router-relays"></a>
The **Relays** section displays the Relays connected to the Router at the moment and is available to
an administrator. For every Relay the list displays its address, the time of the connection, the size
of the pool of the keys, the version, the name of the computer, the architecture and the operating
system, and for every connection passing through it the user name, the Host ID and the address of
the host, the address of the client and the amount of the transferred data.

**Commands**

| Command                                                                                                  | Description                                                           |
|----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| <img src="/images/icons/disconnect-one.svg" width="24" height="24" alt="disconnect-one"/> Disconnect     | Disconnects the selected Relay.                                       |
| <img src="/images/icons/disconnect-all.svg" width="24" height="24" alt="disconnect-all"/> Disconnect All | Disconnects all the Relays.                                           |
| <img src="/images/icons/save.svg" width="24" height="24" alt="save"/> Save...                            | Saves the list displayed in the section to a JSON file.               |
| <img src="/images/icons/copy.svg" width="24" height="24" alt="copy"/> Copy Row                           | Copies the whole line of the list to the clipboard.                   |
| <img src="/images/icons/copy.svg" width="24" height="24" alt="copy"/> Copy Value                         | Copies the value of the cell the menu was called on to the clipboard. |

<br/>

### 7.5. Users <a name="router-users"></a>
The **Users** section contains the users of the Router and is available to an administrator. The list
displays the name of a user, whether the account is enabled and the types of its sessions.

**Commands**

| Command                                                                                         | Description                         |
|-------------------------------------------------------------------------------------------------|-------------------------------------|
| <img src="/images/icons/user-add.svg" width="24" height="24" alt="user-add"/> Add User          | Creates a new user of the Router.   |
| <img src="/images/icons/user-edit.svg" width="24" height="24" alt="user-edit"/> Edit User       | Changes the parameters of the user. |
| <img src="/images/icons/user-delete.svg" width="24" height="24" alt="user-delete"/> Delete User | Deletes the user.                   |

<br/>

The properties of a user contain the name and the password, the access level, the switch that
disables the account and the button that resets the two-factor authentication. The button is
displayed only if the enrollment has already been performed. A separate tab lists the current
sessions of the user with the time of the sign in, the last activity and the address.

<br/>

<p align="center"><img src="/images/client-router-users.png" width="700"/></p>

<br/>

### 7.6. Workspaces <a name="router-workspaces"></a>
A workspace has a name and a comment. Hosts are added to a workspace and users are given access to
it: a user sees the hosts of the workspaces to which they have access. Groups of computers can be
created inside a workspace; a host can be placed into a group or can stay at the root of the
workspace.

A host is not required to belong to a workspace. Right after the approval a host belongs to no
workspace and is displayed only in the **Approved Hosts** section, which is available to an
administrator. Hosts are added to a workspace and removed from it in the properties of the
workspace, by the **Edit Workspace** command. A host belongs to one workspace at a time, and only a
host without a workspace can be added, so a host is moved to another workspace by removing it from
the current one first.

The comments and the credentials of the hosts are encrypted with the key of the workspace, so the
Router itself has no access to their contents. The names of the hosts are stored as they are: the
Router uses them for the search. When a host is removed from a workspace and when a workspace is
deleted, the hosts themselves are not deleted, but their comments and credentials are cleared.

**Rights of the users**

When a workspace is created, all the administrators of the Router are included in the list of its
users automatically, so the administrators see all the workspaces. The managers and the clients see
only the workspaces to which they are given access in the properties of a workspace.

An administrator cannot exclude themselves from the list of the users of a workspace: without access
the key of the workspace is not available and the workspace cannot be managed any more.

| Operation                                             | Administrator | Manager | Client |
|-------------------------------------------------------|---------------|---------|--------|
| Viewing the workspaces, the groups and the hosts      | +             | +       | +      |
| Connecting to the hosts                               | +             | +       | +      |
| Creating, editing and deleting the workspaces         | +             | -       | -      |
| Adding hosts to a workspace and removing them from it | +             | -       | -      |
| Granting and revoking the access of the users         | +             | -       | -      |
| Creating, editing and deleting the groups             | +             | +       | -      |
| Editing the hosts and moving them between the groups  | +             | +       | -      |

<br/>

**Commands**

| Command                                                                                                        | Description                                                                                        |
|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| <img src="/images/icons/workspace-add.svg" width="24" height="24" alt="workspace-add"/> Add Workspace          | Creates a new workspace.                                                                           |
| <img src="/images/icons/workspace-edit.svg" width="24" height="24" alt="workspace-edit"/> Edit Workspace       | Changes the name and the comment, the list of the users who have access and the list of the hosts. |
| <img src="/images/icons/workspace-delete.svg" width="24" height="24" alt="workspace-delete"/> Delete Workspace | Deletes the workspace.                                                                             |

<br/>

The commands above are available to an administrator only. The properties of a workspace contain its
name and comment, the list of the users who have access to it and the list of its hosts.

Groups of computers inside a workspace are created, edited and deleted with the same commands as the
groups of the local address book. A host is moved to another group by dragging it in the list of the
computers or with the **Edit Host** command.

<br/>

<p align="center"><img src="/images/client-workspace-properties.png" width="400"/></p>

<br/>

## 8. Session types <a name="session-types"></a>
A session is started from any list of computers: from the local address book, from a workspace of a
Router or from the section of the approved hosts.

Double click a computer to start a session of the type that is selected in the **Session Type** menu.
This type is remembered and is used for all the following connections until it is changed. If another
type is needed only once, use the corresponding command of the tool bar instead of the double click:

**Commands of the connection**

| Command                                                                                                              | Description                                         |
|----------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| <img src="/images/icons/workstation.svg" width="24" height="24" alt="workstation"/> Desktop                          | Control of the desktop of the remote computer.      |
| <img src="/images/icons/terminal.svg" width="24" height="24" alt="terminal"/> Terminal                               | Command line of the remote computer.                |
| <img src="/images/icons/file-explorer.svg" width="24" height="24" alt="file-explorer"/> File Transfer                | Transfer of files between the computers.            |
| <img src="/images/icons/system-information.svg" width="24" height="24" alt="system-information"/> System Information | Information about the hardware and the software.    |
| <img src="/images/icons/chat.svg" width="24" height="24" alt="chat"/> Chat                                           | Text messages with the user of the remote computer. |

<br/>

If the user name and the password are not filled in the entry of the computer, they are asked at the
start of the session. Several sessions with different computers, as well as several sessions of
different types with the same computer, can be opened at the same time.

<br/>


### 8.1. Desktop <a name="session-desktop"></a>
Allows to connect to a remote computer to interact with its desktop.

At the top of the desktop window there is a toolbar that allows you to perform a number of actions.
It appears when you hover the mouse cursor and hides when the cursor leaves the toolbar area. The
<img src="/images/icons/pin.svg" width="24" height="24" alt="pin"/> button locks the toolbar so that
it is displayed permanently.

<p align="center"><img src="/images/client-desktop-window.png"/></p>

**Toolbar buttons**

| Name                                                                                                                 | Description                                                                         |
|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| <img src="/images/icons/pin.svg" width="24" height="24" alt="pin"/> Lock toolbar                                     | If the button is checked, the toolbar is always displayed.                          |
| <img src="/images/icons/move.svg" width="24" height="24" alt="move"/> Auto size                                      | Changes the window size to the optimal one based on the size of the remote desktop. |
| <img src="/images/icons/expand.svg" width="24" height="24" alt="expand"/> Full screen                                | Switches the window to full screen or returns the original state.                   |
| <img src="/images/icons/ctrl-alt-del.svg" width="24" height="24" alt="ctrl-alt-del"/> Ctrl+Alt+Delete                | Sends the Ctrl+Alt+Delete key combination to the remote computer.                   |
| <img src="/images/icons/flash-on.svg" width="24" height="24" alt="flash-on"/> Power control                          | Opens the menu of the power management of the remote computer.                      |
| <img src="/images/icons/user-account.svg" width="24" height="24" alt="user-account"/> Switch Session                 | Switches to another user session of the remote computer. Available for Windows.     |
| <img src="/images/icons/terminal.svg" width="24" height="24" alt="terminal"/> Terminal                               | Starts a terminal session with the same computer.                                   |
| <img src="/images/icons/file-explorer.svg" width="24" height="24" alt="file-explorer"/> File transfer                | Starts a file transfer session with the same computer.                              |
| <img src="/images/icons/system-information.svg" width="24" height="24" alt="system-information"/> System Information | Starts a system information session with the same computer.                         |
| <img src="/images/icons/chat.svg" width="24" height="24" alt="chat"/> Text Chat                                      | Starts a text chat with the user of the remote computer.                            |
| <img src="/images/icons/system-task.svg" width="24" height="24" alt="system-task"/> Task Manager                     | Opens the task manager of the remote computer.                                      |
| <img src="/images/icons/tools.svg" width="24" height="24" alt="tools"/> Tools                                        | Runs a tool or a script on the remote computer.                                     |
| <img src="/images/icons/paste.svg" width="24" height="24" alt="paste"/> Paste clipboard as keystrokes                | Pastes the contents of the clipboard as keyboard key presses.                       |
| <img src="/images/icons/record.svg" width="24" height="24" alt="record"/> Start recording                            | Starts or stops the recording of the session to a video file.                       |
| <img src="/images/icons/minimize-window.svg" width="24" height="24" alt="minimize-window"/> Minimize                 | Minimizes the window of the session.                                                |
| <img src="/images/icons/close-window.svg" width="24" height="24" alt="close-window"/> Close                          | Closes the session.                                                                 |
| <img src="/images/icons/menu.svg" width="24" height="24" alt="menu"/> Advanced menu                                  | Displays the menu with the rest of the actions.                                     |

<br/>

If the remote computer has more than one monitor, the buttons for the selection of a monitor and of
its resolution are displayed in the toolbar as well.

<p align="center"><img src="/images/client-desktop-toolbar.png"/></p>

<br/>

**Power control menu**

| Command                                                                                        | Description                                           |
|------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| <img src="/images/icons/shutdown.svg" width="24" height="24" alt="shutdown"/> Shutdown         | Shuts down the remote computer.                       |
| <img src="/images/icons/restart.svg" width="24" height="24" alt="restart"/> Reboot             | Restarts the remote computer.                         |
| <img src="/images/icons/restart.svg" width="24" height="24" alt="restart"/> Reboot (Safe mode) | Restarts the remote computer in the safe mode.        |
| <img src="/images/icons/logoff.svg" width="24" height="24" alt="logoff"/> Logoff               | Ends the session of the user of the remote computer.  |
| <img src="/images/icons/lock.svg" width="24" height="24" alt="lock"/> Lock                     | Locks the session of the user of the remote computer. |

<br/>

**Advanced menu**

| Name                | Description                                                                                 |
|---------------------|---------------------------------------------------------------------------------------------|
| Scale               | Allows to change the scaling mode (fit to the window or a scale in percent).                |
| Fit window          | Changes the size of the window so that the whole remote desktop fits in it.                 |
| Automatic scrolling | The contents of the window scroll automatically as the cursor approaches the window border. |
| Save screenshot...  | Saves the current image of the remote desktop to a file.                                    |
| Statistics          | Opens the dialog with the metrics of the connection.                                        |

<br/>

### 8.2. Terminal <a name="session-terminal"></a>
Gives access to the command line of the remote computer. The command interpreter of the operating
system is used: on Windows it is PowerShell, on Linux and macOS it is the shell of the user.

At the start of the session the name and the password of an account of the operating system of the
remote computer are requested. The terminal is started on behalf of this account, so its rights
determine what can be done in the session.

<p align="center"><img src="/images/client-terminal.png"/></p>

<br/>

### 8.3. File transfer <a name="session-filetransfer"></a>
Allows to transfer files between the local and the remote computer, delete and rename files, create
directories. When connected to a remote computer lists of disks are displayed that allow you to
estimate the amount of free space on them.

<p align="center"><img src="/images/client-file-transfer.png"/></p>

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

### 8.4. System information <a name="session-sysinfo"></a>
Allows to view the information about the remote computer: the processor, the memory, the disks and
their S.M.A.R.T., the devices, the installed applications, the network parameters, the users and so
on. The resulting information can be saved to a file or printed out.

A double click on a line copies it to the clipboard. In the context menu you can copy the name of a
parameter, its value or the whole line.

<p align="center"><img src="/images/client-system-info.png"/></p>

<br/>

### 8.5. Text chat <a name="session-textchat"></a>
Allows to exchange text messages with the user of the remote computer. The history of the
correspondence is saved and is displayed again at the next connection to the same computer.

<br/>

## 9. Settings <a name="settings"></a>
The settings are opened with the **Settings...** command of the **File** menu.

| Group           | Parameters                                                                                                                                                                                                                                                           |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Interface       | The language of the interface, the theme and the name displayed to the user of the remote computer.                                                                                                                                                                  |
| UDP Connections | Enables direct connections and the methods of the passage of NAT: UDP hole punching, PCP, NAT-PMP and UPnP.                                                                                                                                                          |
| Master Password | Changes the master password.                                                                                                                                                                                                                                         |
| Features        | The parameters of a desktop session: the audio, the clipboard, the display of the remote cursor, the disabling of the effects and of the wallpaper, the locking of the computer at disconnect, the blocking of the remote input and the sending of key combinations. |
| Screen          | The preferred resolution of the remote desktop.                                                                                                                                                                                                                      |
| Recording       | The automatic start of the recording of a session and the directory for the files.                                                                                                                                                                                   |
| Update          | The check for updates at the start and the address of the update server.                                                                                                                                                                                             |

<br/>

<p align="center"><img src="/images/client-settings.png"/></p>

<br/>

## 10. Command line <a name="command-line"></a>
The Client accepts a link of the form `aspia://` as the only argument. Such a link is copied in the
address book and allows to start a session at once. If the application is already running, the link
is opened in it.

| Argument    | Description                                 |
|-------------|---------------------------------------------|
| `--version` | Displays the version of the application.    |
| `--help`    | Displays help about command line arguments. |

<br/>

## 11. Environment variables <a name="env-vars"></a>
  - **ASPIA_NO_VERIFY_TLS_PEER** - If the variable is declared, then the validity of the TLS certificate is not checked when checking for updates. It is not recommended to declare this variable unnecessarily.
  - **ASPIA_SMALL_ICON_SIZE** - Sets the size of the small icons of the interface in pixels.

<br/>

## 12. Logs <a name="logs"></a>
By default the Client writes the log to a file on Windows and to stdout on Linux and macOS. To configure the logging parameters, use the following recommendations:
  - To set the log level, declare an environment variable ASPIA_LOG_LEVEL with a value from 0 to 4 (0 - trace, 1 - info, 2 - warning, 3 - error, 4 - fatal). Decreasing the value increases the number of messages in the log.
  - To enable logging to a file (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_FILE with a value other than 0. If the environment variable is declared with a value of 0, then logging to file will be disabled.
  - To enable logging to stdout (if it is not enabled by default for platform), declare environment variable ASPIA_LOG_TO_STDOUT with a value other than 0. If the environment variable is declared with a value of 0, then logging to stdout will be disabled.
  - By default, log files older than 14 days are automatically deleted. If you want to change this value, then declare environment variable ASPIA_MAX_LOG_FILE_AGE with a numeric value in days. The variable can take a value from 0 to 366. If the variable is set to 0, then the log files will not be automatically deleted.

The log files are located in the following paths:

```bash
Windows
  %TEMP%\aspia\aspia_client-*.log

Linux and macOS
  $TMPDIR/aspia/aspia_client-*.log
```

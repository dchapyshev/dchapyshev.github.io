---
layout: page
title: Migration from version 2.7
---

## Table of contents
1. [Before you start](#before)
2. [Aspia Router](#router)
3. [Aspia Relay](#relay)
4. [Aspia Host](#host)
5. [Aspia Client](#client)

## 1. Before you start <a name="before"></a>
Version 3.0.0 keeps working with Hosts of previous versions, so the whole network does not have to be
updated at once. The minimum supported version is 2.6.0.

The recommended order is: Router, then Relay, then Clients and Hosts. Until a Host is updated it
keeps connecting to the Router as before.

**WARNING!** Before updating, make a backup of the configuration files and of the data base. See
[Backuping Router and Relay](/docs/backup-router-and-relay).

<br/>

## 2. Aspia Router <a name="router"></a>

**Configuration**

The configuration is migrated automatically at the first start of the new version. The white lists,
the private key, the seed key and the listening interface are taken from the old configuration file.

The old configuration had a single port for everyone. It is migrated as the port for Hosts of
previous versions, and the new listeners get their default ports:

| Port | Purpose |
|------|---------|
| 8060 | Hosts of versions below 3.0.0 |
| 8061 | Hosts of version 3.0.0 |
| 8062 | Clients |
| 8063 | Relays |
| 8065 | STUN server |

<br/>

Do not forget to allow the new ports in the firewall.

**Keys**

The old configuration had a single private key, while Hosts and Relays are separate entities now.
During the migration the old key is copied into both of them, so the public key of the Router does
not change and existing Hosts and Relays keep working without any changes on their side.

**Data base**

The existing data base is used as is, the missing columns are added automatically. Users, their
passwords and the list of hosts are preserved.

**Two-factor authentication**

Two-factor authentication is mandatory in version 3.0.0. At the first connection every user,
including the administrator, is asked to enroll: the Router shows a QR code that must be scanned
with an authenticator application. After that a code is requested at every connection from a new
device.

**Users**

In addition to administrators and clients there are now managers. An administrator has the rights of
a manager and a client, a manager has the rights of a client. Existing users keep the rights they
had.

**Hosts**

Hosts that connect to the Router for the first time are not stored in the data base and receive a
temporary random ID. They are shown as "Unassigned" until an administrator approves them. Hosts that
are already in the data base are not affected.

**Service account**

The service now runs under a low-privilege account that is created during the installation and has
access only to its own directories.

<br/>

## 3. Aspia Relay <a name="relay"></a>

The configuration is migrated automatically at the first start of the new version: the address and
the public key of the Router, the listening interface, the port for peers, the idle timeout and the
maximum number of peers are taken from the old configuration file.

The port of the Router is not taken from the old configuration. Previously it was the port of the
single listener the Router used for everyone, so the migration always sets the new port for
relays - 8063.

The service now runs under a low-privilege account, like the Router service.

<br/>

## 4. Aspia Host <a name="host"></a>

The settings of the previous version are migrated automatically at the first start: the parameters
of the Host, its key and the parameters of the connection to the Router.

After the migration the settings are separated by the level of access: personal settings of a user,
system settings that only an administrator can change, and security-sensitive data (the list of
users, the parameters of the Router, one-time passwords and connection confirmation) that is
available only to SYSTEM and administrators.

A Host of version 2.7 does not have to be updated together with the Router. It keeps connecting to
the Router on port 8060 and can be updated later.

On Windows the rules for the firewall are added by the installer.

<br/>

## 5. Aspia Client <a name="client"></a>

**The Console is not installed any more**

The Console has been removed. Its functions are performed by the Client: the address book, groups of
computers and the management of the Router are now tabs of its window.

**Address book**

Address books of previous versions are not converted automatically. Open the Client and use
"Import Old Address Book..." to import an existing `.aab` file. The address book of version 3.0.0 is
stored in an encrypted data base.

**Master password**

The master password is now mandatory. At the first start the Client asks to set it, and it is
requested at every start after that.

**Connection to the Router**

The connection to the Router requires a code of two-factor authentication. See the section about
[the Router](#router).

**Command line**

The command line options of the Client have been removed. A connection from the command line is
performed with an `aspia://` link that can be copied in the address book.

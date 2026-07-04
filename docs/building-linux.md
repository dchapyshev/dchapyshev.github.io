---
layout: page
title: Building for Linux
---

**Attention!** A positive result is guaranteed only if the building instructions are strictly followed.
Read each point carefully and strictly follow the instructions.
If you do not follow any of the points of these instructions and the project is not builded, then it is entirely your fault.

The build for Linux was tested only in Ubuntu 22.04. If you have a different distribution kit or its version, then additional steps may be required.
1. Install [QtCreator](https://download.qt.io/official_releases/online_installers/).

2. Download and install [vcpkg4aspia](https://github.com/dchapyshev/vcpkg4aspia) (forked from Microsoft repository). To do this, go to the directory where you want to install and run the commands:
```bash
git clone https://github.com/dchapyshev/vcpkg4aspia.git
cd vcpkg4aspia
./bootstrap-vcpkg.sh
```
<br/>
3. Install the following packages in your package manager (**packages must be installed before installing vcpkg and its packages**):
The first column lists the package name for Debian/Ubuntu (`apt`), the second the corresponding package for RHEL/AlmaLinux 8 (`dnf`).

For RHEL/AlmaLinux, enable the **EPEL** and **PowerTools** (CRB) repositories first, since some of the packages below live there:
```bash
sudo dnf install -y epel-release
sudo dnf config-manager --set-enabled powertools
```

| Debian / Ubuntu (apt)   | RHEL / AlmaLinux 8 (dnf)   |
| ----------------------- | -------------------------- |
| ninja-build             | ninja-build                |
| autoconf                | autoconf                   |
| autoconf-archive        | autoconf-archive           |
| autopoint               | gettext-devel              |
| pkg-config              | pkgconf-pkg-config         |
| python3                 | python3.11                 |
| python3-jinja2          | python3.11-jinja2          |
| python3-venv            | python3.11 (venv bundled)  |
| bison                   | bison                      |
| gperf                   | gperf                      |
| dpkg-dev                | dpkg-dev                   |
| rpm                     | rpm-build                  |
| libtool                 | libtool                    |
| libgbm-dev              | mesa-libgbm-devel          |
| libegl1-mesa-dev        | mesa-libEGL-devel          |
| libdrm-dev              | libdrm-devel               |
| libharfbuzz-dev         | harfbuzz-devel             |
| libfontconfig1-dev      | fontconfig-devel           |
| libfreetype6-dev        | freetype-devel             |
| libatspi2.0-dev         | at-spi2-core-devel         |
| libprocps-dev           | procps-ng-devel            |
| xkb-data                | xkeyboard-config-devel     |
| libpam0g-dev            | pam-devel                  |
| libpulse-dev            | pulseaudio-libs-devel      |
| libltdl-dev             | libtool-ltdl-devel         |
| flite1-dev              | flite-devel                |
| libspeechd-dev          | speech-dispatcher-devel    |
| libsystemd-dev          | systemd-devel              |
| libpipewire-0.3-dev     | pipewire-devel             |
| speech-dispatcher       | speech-dispatcher          |
| nasm                    | nasm                       |
| gcc                     | gcc-toolset-12-gcc         |
| g++                     | gcc-toolset-12-gcc-c++     |
| git                     | git                        |
| cmake                   | cmake                      |
| curl                    | curl                       |
| flex                    | flex                       |
| perl                    | perl-core                  |

On RHEL/AlmaLinux the compiler comes from `gcc-toolset-12`; it requires the base `gcc` package, so do not remove it. Enable the toolset in the shell you build from (or launch QtCreator from):
```bash
scl enable gcc-toolset-12 bash
```

Also make `python3` point to 3.11 (the build tool `meson` requires Python >= 3.7, while the platform `python3` is 3.6):
```bash
sudo ln -sf /usr/bin/python3.11 /usr/local/bin/python3
```
<br/>
4. Make sure that the version of CMake in your Linux is greater than or equal to 4.0.0. To do this, run the command:
```bash
cmake --version
```
If the version does not match, then remove the package. Run the following commands to build the required version of CMake:
```bash
sudo apt-get install libcrypt-dev
sudo apt-get install libssl-dev
git clone https://github.com/Kitware/CMake
cd CMake
git checkout tags/v4.0.0
./configure
make -j4
sudo make install
```

On RHEL/AlmaLinux the base `autoconf` is 2.69, but some dependencies (e.g. `gperf`) require version 2.70 or higher. Build a newer one from source (`automake` from the package manager is fine):
```bash
curl -fsSL https://ftp.gnu.org/gnu/autoconf/autoconf-2.71.tar.gz -o autoconf-2.71.tar.gz
tar xzf autoconf-2.71.tar.gz
cd autoconf-2.71
./configure --prefix=/usr/local
make -j4
sudo make install
```

On RHEL/AlmaLinux the `ninja-build` package (1.8.2) is too old and fails with `multiple outputs aren't (yet?) supported by depslog`. Install a newer binary:
```bash
curl -fsSL https://github.com/ninja-build/ninja/releases/latest/download/ninja-linux.zip -o ninja-linux.zip
unzip ninja-linux.zip
sudo install -m755 ninja /usr/local/bin/ninja
```

On RHEL/AlmaLinux 8 the `bison` package (3.0.4) is too old to build libxkbcommon, which requires
version 3.6 or higher. Build a newer one from source:
```bash
curl -fsSL https://ftp.gnu.org/gnu/bison/bison-3.8.2.tar.gz -o bison-3.8.2.tar.gz
tar xzf bison-3.8.2.tar.gz
cd bison-3.8.2
./configure --prefix=/usr/local
make -j4
sudo make install
```
<br/>
5. In vcpkg, you need to install the following libraries (for example: **./vcpkg install asio**):
```bash
asio
curl
gtest
icu
libvpx
libyuv
openssl
opus
protobuf
qtbase
qtsvg
qttools
sqlite3
zstd
```
<br/>
6. Launch QtCreator

   6.1. Go to menu **Edit** -> **Preferences...**

   6.2. Go to **Kits** -> **Qt Versions**. Click the "Add" button and specify the path to file **qmake**
   (**vcpkg4aspia\installed\x64-linux\tools\qt6\bin\qmake**).

   6.3. Go to **Kits** -> **Kits**. Click the "Add" button.

     - In the **Name** field, enter **vcpkg-aspia-x64**.

     - In the **Qt version** field, select the Qt version that you added in the previous step.

     - In the **CMake Configuration** field, add variables **-DVCPKG_TARGET_TRIPLET:STRING=x64-linux** and **-DQT_CREATOR_SKIP_VCPKG_SETUP:BOOL=ON**.

     - In the **Environment** field, add variable **VCPKG_ROOT_DIRECTORY=/home/user/vcpkg4aspia** (replace the path with the real path to the vcpkg root directory).

     - In the **Compiler** field, specify the compiler for C and C++ (it should be an x64 or x86 compiler, depending on what architecture you are building the project for).


7. Open the root **CMakeLists.txt** file of Aspia in QtCreator. When configuring, select the Kit that you added earlier (**vcpkg-aspia-x64**).

8. Build the project.

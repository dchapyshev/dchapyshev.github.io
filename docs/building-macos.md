---
layout: page
title: Building for MacOS
---

**Attention!** A positive result is guaranteed only if the building instructions are strictly followed.
Read each point carefully and strictly follow the instructions.
If you do not follow any of the points of these instructions and the project is not builded, then it is entirely your fault.

1. Install **Xcode** from AppStore.

2. Execute command in terminal: **xcode-select --install**

3. Open **Xcode** and agree to install **additional components**.

4. Install [brew](https://brew.sh).

5. Install packages in **brew**:
```bash
brew install cmake
brew install autoconf
brew install autoconf-archive
brew install automake
brew install nasm
brew install pkg-config
brew install wget
brew install curl
brew install ninja
```
<br/>
6. Install [QtCreator](https://download.qt.io/official_releases/online_installers/).

7. Download and install [vcpkg4aspia](https://github.com/dchapyshev/vcpkg4aspia) (forked from Microsoft repository). To do this, go to the directory where you want to install and run the commands:
```bash
git clone https://github.com/dchapyshev/vcpkg4aspia.git
cd vcpkg4aspia
./bootstrap-vcpkg.sh
```
<br/>
8. Install libraries in vcpkg.
If you are building on an **Intel**-based version of MacOS for **x86_64**, then the installation command looks like:
```bash
./vcpkg install <library_name>:x64-osx
```
If you are building on an **ARM**-based version of MacOS for **ARM**, then the installation command looks like:
```bash
./vcpkg install <library_name>:arm64-osx
```
If you are building on an **ARM**-based version of MacOS for **x86_64**, then the installation command looks like:
```bash
arch -arch x86_64 ./vcpkg install <library_name> --triplet=x64-osx --host-triplet=x64-osx
```
List of libraries to install:
```bash
asio
curl
fmt
gtest
icu
libvpx
libyuv
openssl
opus
protobuf
qt5-base
qt5-translations
rapidjson
sqlite3
zstd
```
<br/>
9. Launch QtCreator

   9.1. Go to menu **Edit** -> **Preferences...**

   9.2. Go to **Kits** -> **Qt Versions**. Click the "Add" button and specify the path to file **qmake**
   (**vcpkg4aspia\installed\x64-osx\tools\qt5\bin\qmake.exe**).

   9.3. Go to **Kits** -> **Kits**. Click the "Add" button.

     - In the **Name** field, enter **vcpkg-aspia-x64**.

     - In the **Qt version** field, select the Qt version that you added in the previous step.

     - In the **CMake Configuration** field, add variables **-DVCPKG_TARGET_TRIPLET:STRING=x64-osx** and **-DQT_CREATOR_SKIP_VCPKG_SETUP:BOOL=ON**.

     - In the **Environment** field, add variable **VCPKG_ROOT_DIRECTORY=/users/user/vcpkg4aspia** (replace the path with the real path to the vcpkg root directory).

     - In the **Compiler** field, specify the compiler for C and C++ (it should be an x64 or x86 compiler, depending on what architecture you are building the project for).


10. Open the root **CMakeLists.txt** file of Aspia in QtCreator. When configuring, select the Kit that you added earlier (**vcpkg-aspia-x64**).

11. Build the project.

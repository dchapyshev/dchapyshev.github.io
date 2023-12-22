---
layout: page
title: Building for MacOS
---

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
```
asio
curl
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
9. Open **QtCreator -> Tools -> Options -> Kits -> Qt Versions**. Click the Add button and specify the path to **<vcpkg_path>/installed/<arch>/tools/qt5/bin/qmake**.

10. Open **QtCreator -> Tools -> Options -> Kits -> Kits**. Click the Add button. Enter a display name for the profile, specify the compilers, and the Qt profile you added earlier.

11. Open **CMakeLists.txt** from the Aspia root directory in QtCreator and configure the build using the previously added profile.

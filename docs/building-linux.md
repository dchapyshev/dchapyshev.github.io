---
layout: page
title: Building for Linux
---

The build for Linux was tested only in Ubuntu 20.04. If you have a different distribution kit or its version, then additional steps may be required.
1. Install [QtCreator](https://download.qt.io/official_releases/online_installers/).

2. Download and install [vcpkg4aspia](https://github.com/dchapyshev/vcpkg4aspia) (forked from Microsoft repository). To do this, go to the directory where you want to install and run the commands:
```bash
git clone https://github.com/dchapyshev/vcpkg4aspia.git
cd vcpkg4aspia
./bootstrap-vcpkg.sh
```
<br/>
3. Install the following packages in your package manager (**packages must be installed before installing vcpkg and its packages**):
```bash
ninja-build
autoconf
autoconf-archive
autopoint
python3
bison
gperf
dpkg-dev
libgl1-mesa-dev
libglu1-mesa-dev
libharfbuzz-dev
libfontconfig1-dev
libfreetype6-dev
libx11-dev
libx11-xcb-dev
libxext-dev
libxfixes-dev
libxi-dev
libxrender-dev
libxcb1-dev
libxcb-glx0-dev
libxcb-keysyms1-dev
libxcb-image0-dev
libxcb-shm0-dev
libxcb-icccm4-dev
libxcb-sync-dev
libxcb-xfixes0-dev
libxcb-shape0-dev
libxcb-randr0-dev
libxcb-render-util0-dev
libxcb-xinerama0-dev
libxcb-util-dev
libxcb-cursor0
libxcb-cursor-dev
libxkbcommon-dev
libxkbcommon-x11-dev
libatspi2.0-dev
libprocps-dev
libxdamage-dev
libxrandr-dev
libpulse-dev
flite1-dev
libsm-dev
libice-dev
libspeechd-dev
speech-dispatcher
nasm
gcc
g++
git
cmake
curl
```
<br/>
4. Make sure that the version of CMake in your Linux is greater than or equal to 3.21.0. To do this, run the command:
```bash
cmake --version
```
If the version does not match, then remove the package. Run the following commands to build the required version of CMake:
```bash
sudo apt-get install libcrypt-dev
sudo apt-get install libssl-dev
git clone https://github.com/Kitware/CMake
git checkout tags/v3.27.7
cd CMake
./configure
make -j4
sudo make install
```
<br/>
5. In vcpkg, you need to install the following libraries (for example: **./vcpkg install asio**):
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
6. Open **QtCreator -> Tools -> Options -> Kits -> Qt Versions**. Click the Add button and specify the path to ```<vcpkg_path>/installed/x64-linux/tools/qt5/bin/qmake```.

7. Open **QtCreator -> Tools -> Options -> Kits -> Kits**. Click the Add button. Enter a display name for the profile, specify the compilers (gcc/g++), and the Qt profile you added earlier.

8. Open **CMakeLists.txt** from the Aspia root directory in QtCreator and configure the build using the previously added profile.

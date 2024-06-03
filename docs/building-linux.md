---
layout: page
title: Building for Linux
---

**Attention!** A positive result is guaranteed only if the building instructions are strictly followed.
Read each point carefully and strictly follow the instructions.
If you do not follow any of the points of these instructions and the project is not builded, then it is entirely your fault.

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
python3-jinja2
bison
gperf
dpkg-dev
libtool
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
6. Launch QtCreator

   6.1. Go to menu **Edit** -> **Preferences...**

   6.2. Go to **Kits** -> **Qt Versions**. Click the "Add" button and specify the path to file **qmake**
   (**vcpkg4aspia\installed\x64-linux\tools\qt5\bin\qmake**).

   6.3. Go to **Kits** -> **Kits**. Click the "Add" button.

     - In the **Name** field, enter **vcpkg-aspia-x64**.

     - In the **Qt version** field, select the Qt version that you added in the previous step.

     - In the **CMake Configuration** field, add variables **-DVCPKG_TARGET_TRIPLET:STRING=x64-linux** and **-DQT_CREATOR_SKIP_VCPKG_SETUP:BOOL=ON**.

     - In the **Environment** field, add variable **VCPKG_ROOT_DIRECTORY=/home/user/vcpkg4aspia** (replace the path with the real path to the vcpkg root directory).

     - In the **Compiler** field, specify the compiler for C and C++ (it should be an x64 or x86 compiler, depending on what architecture you are building the project for).


7. Open the root **CMakeLists.txt** file of Aspia in QtCreator. When configuring, select the Kit that you added earlier (**vcpkg-aspia-x64**).

8. Build the project.

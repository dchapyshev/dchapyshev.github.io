---
layout: page
title: Building for Windows
---

**Attention!** A positive result is guaranteed only if the building instructions are strictly followed.
Read each point carefully and strictly follow the instructions.
If you do not follow any of the points of these instructions and the project is not builded, then it is entirely your fault.

1. You must use Windows 10/11 x64 to build the project. Build in other versions of Windows is not guaranteed.

2. Download and install [Visual Studio Community 2019](https://www.visualstudio.com/downloads).

   2.1. To run the **Visual Studio Installer** in English, go to directory ```C:\Program Files (x86)\Microsoft Visual Studio\Installer``` and execute command ```vs_installer.exe --locale en-US```.

   2.2. **Desktop development with C++** workload should be selected when installing.

   2.3. **English language pack** (required for vcpkg; **only English language should be installed, without any other**).

   2.4. **No other versions of Visual Studio should be installed other than the one specified.**

   2.5. The following packages must be installed in the **Visual Studio Installer**:
```
    MSVC v142 - VS 2019 C++ x64/x86 build tools (Latest)
    MSVC v142 - VS 2019 C++ x64/x86 Spectre-mitigation libs (Latest)
    C++ Clang Compiller for Windows (12.0.0)
    C++ Clang-cl for v142 build tools (x64/x86)
    С++ CMake tools for Windows
    C++ MFC for latest v142 build tools (x86 & x64)
    C++ ATL for latest v142 build tools (x86 & x64)
    C++ ATL for latest v142 build tools with Spectre Mitigations (x86 & x64)
    C++ MFC for latest v142 build tools with Spectre Mitigations (x86 & x64)
    Windows 10 SDK (10.0.18362)
    Windows 10 SDK (10.0.19041)
```	  
<br/>

3. Download and install [WDK for Windows 10 1903 (19H1, build 18362)](https://learn.microsoft.com/en-us/windows-hardware/drivers/other-wdk-downloads).

4. Download and install [CMake](https://cmake.org/download) (version >= 3.21.0).

5. Download and install [Git](https://git-scm.com/downloads).

6. Disable path length limit.
```bash
Set HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem\LongPathsEnabled to 1
```

7. Download and install [vcpkg4aspia](https://github.com/dchapyshev/vcpkg4aspia) (forked from Microsoft repository). To do this, go to the directory where you want to install and run the commands:
```bash
git clone https://github.com/dchapyshev/vcpkg4aspia.git
cd vcpkg4aspia
./bootstrap-vcpkg.bat
```
<br/>
8. In vcpkg, you need to install the following libraries (use triplet **x86-windows-static** or **x64-windows-static** in all cases; for example: **./vcpkg install asio:x86-windows-static**):
* asio
* curl
* fmt
* gtest
* libvpx
* libyuv
* openssl
* opus
* protobuf
* qt5-base
* qt5-translations
* qt5-winextras
* rapidjson
* sqlite3
* wtl
* zstd
<br/>
9. Download and install [QtCreator](https://download.qt.io/official_releases/online_installers/qt-unified-windows-x64-online.exe).

10. Launch QtCreator

   10.1. Go to menu **Edit** -> **Preferences...**

   10.2. Go to **Kits** -> **Qt Versions**. Click the "Add" button and specify the path to file **qmake**
   (for x64: **vcpkg4aspia\installed\x64-windows-static\tools\qt5\bin\qmake.exe**; for x86: **vcpkg4aspia\installed\x86-windows-static\tools\qt5\bin\qmake.exe**).

   10.3. Go to **Kits** -> **Kits**. Click the "Add" button.

     - In the **Name** field, enter **vcpkg-aspia-x64** (or **vcpkg-aspia-x86** for x86).

     - In the **Qt version** field, select the Qt version that you added in the previous step.

     - In the **CMake Configuration** field, add variables **-DVCPKG_TARGET_TRIPLET:STRING=x64-windows-static** (replace to x86-windows-static for x86) and **-DQT_CREATOR_SKIP_VCPKG_SETUP:BOOL=ON**.

     - In the **Environment** field, add variable **VCPKG_ROOT_DIRECTORY=D:\repo\vcpkg4aspia** (replace the path with the real path to the vcpkg root directory).

     - In the **Compiler** field, specify the compiler for C and C++ (it should be an x64 or x86 compiler, depending on what architecture you are building the project for).


11. Open the root **CMakeLists.txt** file of Aspia in QtCreator. When configuring, select the Kit that you added earlier (**vcpkg-aspia-x64** or **vcpkg-aspia-x86**).

12. Build the project.

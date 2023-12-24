---
layout: page
title: Building for Windows
---

1. You must use Windows 10/11 x64 to build the project. Build in other versions of Windows is not guaranteed.

2. Download and install [Visual Studio Community 2019](https://www.visualstudio.com/downloads).

   2.1. **Desktop development with C++** workload should be selected when installing.

   2.2. **SDK 10.0.18362.0** should be selected when installing.

   2.3. **ATL/MFC** libraries should be selected when installing.

   2.4. **English language pack** (required for vcpkg; **only English language should be installed, without any other**).

3. Download and install [CMake](https://cmake.org/download) (version >= 3.21.0).

4. Download and install [Git](https://git-scm.com/downloads).

5. Download and install [vcpkg4aspia](https://github.com/dchapyshev/vcpkg4aspia) (forked from Microsoft repository). To do this, go to the directory where you want to install and run the commands:
```bash
git clone https://github.com/dchapyshev/vcpkg4aspia.git
cd vcpkg4aspia
./bootstrap-vcpkg.bat
```
<br/>

6. In vcpkg, you need to install the following libraries (use triplet **x86-windows-static** or **x64-windows-static** in all cases; for example: **./vcpkg install asio:x86-windows-static**):

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

7. Go to the directory with source code (root directory) and run the following commands:

```bash
mkdir build
cd build
cmake ..\ -G "Visual Studio 16 2019" -A Win32 -DCMAKE_TOOLCHAIN_FILE=<vcpkg_path>\scripts\buildsystems\vcpkg.cmake -DVCPKG_TARGET_TRIPLET=<triplet_name>
```

(replace ```<vcpkg_path>``` with real path to vcpkg; replace ```<triplet_name>``` to x86-windows-static or x64-windows-static)
You can also use CMake GUI for these purposes.
After these actions, the ```aspia.sln``` file will be generated in directory "build".

8. Open **aspia.sln** in Visual Studio and build the project.

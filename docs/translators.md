---
layout: page
title: Instructions for translators
---

You need to translate the application and installer.

To translate the application interface you need to download [Qt Linguist](https://download.qt.io/linguist_releases/).

To translate the installer interface you need to download a text editor. For example, [Notepad++](https://notepad-plus-plus.org/download).

For translation, it is recommended to download the source code from the [git repository](https://github.com/dchapyshev/aspia).

Translation of the application interface
----------------------------------------
All translation files of the application are located in the directory "[source/translations](https://github.com/dchapyshev/aspia/tree/master/source/translations)".
Each language has its own file: ```translations_<language_code>.ts```.

Open your language file in Qt Linguist and perform the translation.

<b>ATTENTION! It is important to use Qt Linguist to complete the translation. Do not try to edit translation files in a text editor. The download link is provided above.</b>

For assistance with Qt Linguist, refer to the [documentation](https://doc.qt.io/qt-6/qtlinguist-index.html).

If there is no translation file for your language, create a [issue](https://github.com/dchapyshev/aspia/issues) on GitHub.

Translation of the installer interface
--------------------------------------
Change directory to "[installer/windows/translations](https://github.com/dchapyshev/aspia/tree/master/installer/windows/translations)".

This directory contains installer translations for Aspia Client and Aspia Host.

File to translate Aspia Client: ```client.<language_code>.wxl```

File to translate Aspia Host: ```host.<language_code>.wxl```

You need to translate both files.

Open your language files in a text editor and complete the translation.

If there is no translation file for your language, create a [issue](https://github.com/dchapyshev/aspia/issues) on GitHub.

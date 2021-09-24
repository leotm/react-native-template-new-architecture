# 🌃 Bleeding edge nightly React Native template 🌃

![Lesgo](https://media.giphy.com/media/hKyWAN3gQyCsM/giphy.gif)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](#)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](#)
[![eslint](https://badges.aleen42.com/src/eslint.svg)](#)

[![NPM RN pkg ver](https://img.shields.io/npm/v/react-native?color=red&label=react-native)](https://github.com/facebook/react-native/releases/tag/v0.65.1)
[![CI](https://github.com/leotm/react-native-template-typescript/actions/workflows/main.yml/badge.svg)](https://github.com/leotm/react-native-template-typescript/actions/workflows/main.yml)

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/leotm/react-native-template-typescript/pulse)

## M1 (ARM64) Macs

### iOS

- Open [XCode 12.5 / 13+ using Rosetta](https://i.stack.imgur.com/jj508.png)
  - Upgrading RN: _Clean_ -> _Build_

<details><summary>Resolves</summary>

```sh
Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65. To debug build logs further, consider building your app with Xcode.app, by opening <App>.xcworkspace.
Command line invocation:
    /Applications/Xcode.app/Contents/Developer/usr/bin/xcodebuild -workspace <App>.xcworkspace -configuration Debug -scheme <App> -destination id=C3FF229E-87F8-4DAB-B0E6-1642DB821973

Build target <App>Tests of project <App> with configuration Debug
./ios/<App>.xcodeproj: error: The linked library 'libPods-<App>-<App>Tests.a' is missing one or more architectures required by this target: x86_64. (in target '<App>Tests' from project '<App>')

Build target <App> of project <App> with configuration Debug
./ios/<App>.xcodeproj: error: The linked library 'libPods-<App>.a' is missing one or more architectures required by this target: x86_64. (in target '<App>' from project '<App>')
```

</details>
  
- [Xcode 12.5 troubleshooting guide (RN 0.61/0.62/0.63/0.64)](https://github.com/facebook/react-native/issues/31480)
- [Apple Silicon (M1) troubleshooting guide (RN 0.64/0.65)](https://github.com/facebook/react-native/issues/31941)

### Android

- Use [Initial Preview v3: Google APIs System Image](https://github.com/google/android-emulator-m1-preview/releases/download/0.3/android-emulator-m1-preview.dmg)

## Android Studio

- [Preview release - Canary build](https://developer.android.com/studio/preview)

## Project

- [1337](https://github.com/leotm/react-native-template-typescript/projects/1)

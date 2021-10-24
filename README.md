# 🌃 Bleeding edge nightly React Native template 🌃

![Lesgo](https://media.giphy.com/media/hKyWAN3gQyCsM/giphy.gif)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](#)
[![Formatter: prettier](https://img.shields.io/badge/Formatter-Prettier-f8bc45.svg)](#)
[![Linter](https://badges.aleen42.com/src/eslint.svg)](#)

[![NPM RN pkg ver](https://img.shields.io/badge/React%20Native-0.67.0-red.svg)](https://github.com/facebook/react-native/releases)
[![CI](https://github.com/leotm/react-native-template-typescript/actions/workflows/main.yml/badge.svg)](https://github.com/leotm/react-native-template-typescript/actions/workflows/main.yml)

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/leotm/react-native-template-typescript/pulse)

[![Docs](https://img.shields.io/badge/Docs%3F-yes-green.svg)](https://github.com/leotm/react-native-template-typescript/wiki)

## Setup

[Fresh M1](https://github.com/leotm/react-native-template-typescript/wiki/Fresh-M1)

## Install

```sh
yarn
```

## Start

```sh
yarn start --reset-cache
```

## M1 (ARM64) Macs

### iOS

```sh
cd ios
pod install
```

```diff
# project.pbxproj
# ...
- "EXCLUDED_ARCHS[sdk=iphonesimulator*]" = i386;
+ "EXCLUDED_ARCHS[sdk=iphonesimulator*]" = arm64;
# ...
- "EXCLUDED_ARCHS[sdk=iphonesimulator*]" = i386;
+ "EXCLUDED_ARCHS[sdk=iphonesimulator*]" = arm64;
# ...
```

- Set [Xcode 13 to open with Rosetta](https://i.stack.imgur.com/jj508.png)
  - Open workspace
  - Clean Build Folder
  - Set iOS Simulator to iPhone 12
  - Build
  - Run in Xcode

Or Run with React Native CLI

```sh
yarn ios
```

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

#### Guides

- <s>[Xcode 12.5 troubleshooting guide (RN 0.61/0.62/0.63/0.64)](https://github.com/facebook/react-native/issues/31480)</s>
- <s>[Apple Silicon (M1) troubleshooting guide (RN 0.64/0.65)](https://github.com/facebook/react-native/issues/31941)</s>

### Android

- Open [Android Studio - Preview release - Canary build](https://developer.android.com/studio/preview)
  - Clean Project
  - Open Project
  - Make Project
  - <s>Open [Initial Preview v3: Google APIs System Image](https://github.com/google/android-emulator-m1-preview/releases/download/0.3/android-emulator-m1-preview.dmg)</s>
  - Open e.g. `Pixel_3a_API_31_arm64-v8a`
  
```sh
yarn android
```

## Storybook
  
```diff
# metro.config.js
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
-       inlineRequires: true
+       inlineRequires: false
      }
    })
  }
}
# https://github.com/facebook/hermes/issues/135
# https://github.com/facebook/react-native/issues/31969
```

```sh
yarn storybook
```
  
```sh
yarn <android/ios>
```

## Node
  
```sh
yarn server
```
  
## Deno
  
```sh
brew install deno
```
  
```sh
yarn deno
```

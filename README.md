# 🌃 Bleeding edge nightly React Native template 🌃

![Lesgo](https://media.giphy.com/media/hKyWAN3gQyCsM/giphy.gif)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](#)
[![Formatter: prettier](https://img.shields.io/badge/Formatter-Prettier-f8bc45.svg)](#)
[![Linter](https://badges.aleen42.com/src/eslint.svg)](#)

[![NPM RN pkg ver](https://img.shields.io/badge/React%20Native-0.68.0-red.svg)](https://github.com/facebook/react-native/releases)
[![CI](https://github.com/leotm/react-native-template-typescript/actions/workflows/main.yml/badge.svg)](https://github.com/leotm/react-native-template-typescript/actions/workflows/main.yml)

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/leotm/react-native-template-typescript/pulse)

[![Docs](https://img.shields.io/badge/Docs%3F-yes-green.svg)](https://github.com/leotm/react-native-template-typescript/wiki)

[![Project](https://img.shields.io/badge/Proj%3F-yes-green.svg)](https://github.com/leotm/react-native-template-typescript/projects/1)

## Setup

[Fresh M1](https://github.com/leotm/react-native-template-typescript/wiki/M1-Setup)

## Yarn

```sh
yarn set version berry # Globally, outside repo
yarn set version canary # Bonus, to keep up w Renovate bot
```

## Install

```sh
yarn
yarn setup # If bonus n/a
```

## Start

```sh
yarn start
```

## Silicon (M1) Macs

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
  - Set iOS Simulator to iPhone 13
  - Build
  - (Run with Xcode)

```sh
yarn ios
```

_[Apple Silicon (M1) troubleshooting guide (RN 0.64/0.65/0.66)](https://github.com/facebook/react-native/issues/31941)_

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

## Storybook v6 alpha
  
https://github.com/leotm/react-native-template-typescript/blob/46bb840324177cc570fc639f1d59d99bcfaf4caf/src/index.tsx#L123

```diff
- export default false ? StorybookUIRoot : App 
+ export default true ? StorybookUIRoot : App 
```
  
_Soon: [v6 rn storybook server](https://github.com/storybookjs/react-native/projects/2#card-68690945)_

## Storybook v5
  
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
# @storybook/react-native-server v5
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

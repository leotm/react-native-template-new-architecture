<p align="center">
  <img src="https://user-images.githubusercontent.com/1881059/159564299-70d98608-6526-4437-ab51-6dc719d541e2.jpg">
</p>

<h1 align="center">React Native Template / Boilerplate</h1>
<h3 align="center">Bleeding 🔪 Edge 🌉 Night<s>ly</s>mare 🌃 Edition</h3>
<h6 align="center">““”̿ ̿ ̿ ̿ ̿’̿’̵͇̿̿з=(*▽*)=ε/̵͇̿̿/̿ ̿ ̿ ̿ ̿’““</h6>
<h6 align="center">IDKFA</h6>

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

_[Apple Silicon (M1) troubleshooting guide (RN 0.64/0.65/0.66)](https://github.com/facebook/react-native/issues/31941)_

### iOS (arm64)

```sh
cd ios
pod install
..
yarn ios
```

_Or [iOS (Intel x86_64)](https://github.com/leotm/react-native-template-typescript/wiki/(New)-Architecture#building-for-ios-intel-x86_64-architecture)_

### Android

[Building-from-source#prerequisites](https://github.com/facebook/react-native/wiki/Building-from-source#prerequisites), but with [NDK 24.0.8079956 rc3](https://github.com/reactwg/react-native-releases/discussions/13#discussioncomment-2269256)

```
# android/local.properties
sdk.dir=/Users/<user>/Library/Android/sdk
ndk.dir=/Users/<user>/Library/Android/sdk/ndk/24.0.8079956
```

- _No ` rc3` suffix, no (trailing) spaces, no final final linebreak - otherwise `fcntl(): Bad file descriptor`_
- _[ndk.dir setting in local.properties file is deprecated](https://developer.android.com/studio/releases?utm_source=android-studio#4-0-0-ndk-dir)_

Open [Android Studio - Preview release - Canary build](https://developer.android.com/studio/preview)
- Open Project, set the [JDK](https://github.com/leotm/react-native-template-new-architecture/wiki/JDK)
- [SDK Manager > SDK Tools > NDK > ⬇️ 24.0.8079956 rc3](https://user-images.githubusercontent.com/1881059/158474758-c8c1412c-2f35-4d0d-abc7-6ba18c65827c.png)
- Remove `react-native-screens` ([clean issue](https://github.com/reactwg/react-native-releases/discussions/13#discussioncomment-2254502) resolved) and `react-native-safe-area-context` [until resolved](https://github.com/software-mansion/react-native-screens/issues/1389#issuecomment-1086895179)
- Continue building [all 4 default ABIs](https://github.com/leotm/react-native-template-new-architecture/blob/master/android/gradle.properties#L33), [when resolved](https://github.com/facebook/react-native-website/pull/3027#discussion_r838661516) then [Build only one ABI during development](https://reactnative.dev/docs/build-speed#build-only-one-abi-during-development-android-only)
- Make Project
- Open e.g. `Pixel_3a_API_31_arm64-v8a` <s>[Initial Preview v3: Google APIs System Image](https://github.com/google/android-emulator-m1-preview)</s>
  
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

_With [ts-node](https://github.com/TypeStrong/ts-node) and [curveball](https://github.com/curveball)_

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

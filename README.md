<p align="center">
  <img src="https://user-images.githubusercontent.com/1881059/159564299-70d98608-6526-4437-ab51-6dc719d541e2.jpg">
</p>

<h1 align="center">React Native Template / Boilerplate</h1>
<h3 align="center">Bleeding 🔪 Edge 🌉 Night<s>ly</s>mare 🌃 Edition</h3>
<h6 align="center">““”̿ ̿ ̿ ̿ ̿’̿’̵͇̿̿з=(*▽*)=ε/̵͇̿̿/̿ ̿ ̿ ̿ ̿’““</h6>
<h6 align="center">IDKFA</h6>

<div align="center">

[![NPM RN pkg ver](https://img.shields.io/badge/React%20Native-0.70.0-red.svg)](https://github.com/facebook/react-native/releases)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](#)
[![Linter](https://badges.aleen42.com/src/eslint.svg)](#)
[![Formatter: prettier](https://img.shields.io/badge/Formatter-Prettier-f8bc45.svg)](#)
[![CI](https://github.com/leotm/react-native-template-new-architecture/actions/workflows/main.yml/badge.svg)](https://github.com/leotm/react-native-template-new-architecture/actions/workflows/main.yml)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/leotm/react-native-template-new-architecture/pulse)
[![Docs](https://img.shields.io/badge/Docs%3F-yes-green.svg)](https://github.com/leotm/react-native-template-new-architecture/wiki)
[![Project](https://img.shields.io/badge/Proj%3F-yes-green.svg)](https://github.com/leotm/react-native-template-new-architecture/projects/1)

</div>

Android | iOS
--- | ---
![](https://user-images.githubusercontent.com/1881059/180299352-4f8bd8de-67b0-48a2-b9c4-f4ff93d01538.png) | ![](https://user-images.githubusercontent.com/1881059/180302484-0e983b6e-65e9-417e-925a-3f55340e55b2.png)

## Setup

[Fresh M1/M2](https://github.com/leotm/react-native-template-new-architecture/wiki/M1-Setup)

## Yarn v3

_Upgrading from v1 `classic`_

```sh
cd ~
yarn set version berry
```

[`canary` v4 🚧](https://github.com/leotm/react-native-template-new-architecture/pull/672)

## Install

```sh
yarn # 🍺 version
```

```sh
yarn setup # 🤖 versioned version 
```

https://github.com/leotm/react-native-template-new-architecture/blob/01f1c9864f55367004effbe26d3f33590784704b/package.json#L146

_More [here](stackoverflow)_

## Start

```sh
yarn start
```

## Silicon (M1/M2) Macs

### iOS (arm64)

```sh
cd ios
pod install
..
yarn ios
```

_Or [iOS (Intel x86_64)](https://github.com/leotm/react-native-template-new-architecture/wiki/(New)-Architecture#building-for-ios-intel-x86_64-architecture)_

### Android

<details>

<summary>NDK</summary>
    
[Building-from-source#prerequisites](https://github.com/facebook/react-native/wiki/Building-from-source#prerequisites), but with NDK 25.0.8528842 rc4

```
# android/local.properties
sdk.dir=/Users/<user>/Library/Android/sdk
ndk.dir=/Users/<user>/Library/Android/sdk/ndk/25.0.8528842
```

_Strip: ` rcX` suffix / (trailing) spaces / final final linebreak - otherwise `fcntl(): Bad file descriptor`_
    
</details>

<details>

<summary>Android Studio</summary>
    
Open [Android Studio - Preview release - Canary build](https://developer.android.com/studio/preview)
- Open Project, set the [JDK](https://github.com/leotm/react-native-template-new-architecture/wiki/Android#jdk)
- [SDK Manager > SDK Tools > NDK > ⬇️ 25.0.8528842 rc4](https://user-images.githubusercontent.com/1881059/158474758-c8c1412c-2f35-4d0d-abc7-6ba18c65827c.png)
- Build [all 4 default ABIs](https://github.com/leotm/react-native-template-new-architecture/blob/master/android/gradle.properties#L33) first with other libraries
- Open an arm64 AVD e.g. `Pixel_3a_API_31_arm64-v8a` <s>[Initial Preview v3: Google APIs System Image](https://github.com/google/android-emulator-m1-preview)</s>
- Make Project
    
</details>
  
```sh
yarn android --active-arch-only
```

### Troubleshooting

- _[Apple Silicon (M1) troubleshooting guide (RN 0.64/0.65/0.66)](https://github.com/facebook/react-native/issues/31941)_
- _[New Architecture - Troubleshooting](https://reactnative.dev/docs/next/new-architecture-troubleshooting)_

## Storybook v6 beta

https://github.com/leotm/react-native-template-new-architecture/blob/01f1c9864f55367004effbe26d3f33590784704b/src/index.tsx#L132
  
_Soon: [v6 rn storybook server](https://github.com/storybookjs/react-native/projects/2#card-68690945)_

## Storybook v5

https://github.com/leotm/react-native-template-new-architecture/blob/01f1c9864f55367004effbe26d3f33590784704b/metro.config.js#L16

- https://github.com/facebook/hermes/issues/135
- https://github.com/facebook/react-native/issues/31969

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

---

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

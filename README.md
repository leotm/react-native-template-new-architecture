<p align="center">
  <img src="https://user-images.githubusercontent.com/1881059/159564299-70d98608-6526-4437-ab51-6dc719d541e2.jpg">
</p>

<h1 align="center">React Native Template / Boilerplate</h1>
<h3 align="center">Bleeding 🔪 Edge 🌉 Night<s>ly</s>mare 🌃 Edition</h3>
<h6 align="center">““”̿ ̿ ̿ ̿ ̿’̿’̵͇̿̿з=(*▽*)=ε/̵͇̿̿/̿ ̿ ̿ ̿ ̿’““</h6>
<h6 align="center">IDKFA</h6>

<div align="center">

[![NPM RN pkg ver](https://img.shields.io/badge/React%20Native-0.71.1-red.svg)](https://github.com/facebook/react-native/releases)
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
![Android](https://user-images.githubusercontent.com/1881059/206861792-710af106-3070-40eb-9717-e32941d43327.png) | ![iOS](https://user-images.githubusercontent.com/1881059/206861794-17250417-623e-4f78-92a8-bcfc0cf344e6.png)

## Setup

[Fresh M1/M2](https://github.com/leotm/react-native-template-new-architecture/wiki/M1-Setup)

## Yarn v4

_Upgrading from v1 `classic` or v3 `latest` / `berry` / `stable`_

```sh
cd ~
yarn set version canary
```

_Clear generated files_

## Install

```sh
yarn # 🍺 version
```

```sh
yarn setup # 🤖 versioned version
```

- [🚀 Breaking changes for Yarn 4](https://github.com/yarnpkg/berry/issues/3591)
- _[🤖 Why versioned](https://stackoverflow.com/a/70864409/1998086)_

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

_[Old Rosetta 2 Intel x86_64 way](https://github.com/leotm/react-native-template-new-architecture/wiki/(New)-Architecture#building-for-ios-intel-x86_64-architecture)_

### Android

#### NDK

<details>

_<summary>Old manual setup</summary>_

[Building-from-source#prerequisites](https://github.com/facebook/react-native/wiki/Building-from-source#prerequisites), but with NDK 25.0.8775105

```
# android/local.properties
sdk.dir=/Users/<user>/Library/Android/sdk
ndk.dir=/Users/<user>/Library/Android/sdk/ndk/25.0.8775105
```

_Strip: ` rcX` suffix / (trailing) spaces / final final linebreak - otherwise `fcntl(): Bad file descriptor`_

</details>

_Fat M1 components: ndk-build, LLVM, CMake, Make, Python, Ninja, shader-tools, simpleperf - [yasm remaining](https://github.com/android/ndk/issues/1549)_

#### Android Studio

<details>

_<summary>Old manual setup</summary>_

Open [Android Studio - Preview release - Canary build](https://developer.android.com/studio/preview)
- Open Project, set the [JDK](https://github.com/leotm/react-native-template-new-architecture/wiki/Android#jdk)
- [SDK Manager > SDK Tools > NDK > ⬇️ 25.0.8775105](https://user-images.githubusercontent.com/1881059/158474758-c8c1412c-2f35-4d0d-abc7-6ba18c65827c.png)
- Build [all 4 default ABIs](https://github.com/leotm/react-native-template-new-architecture/blob/master/android/gradle.properties#L33) first with other libraries
- Open an arm64 AVD e.g. `Pixel_3a_API_31_arm64-v8a` <s>[Initial Preview v3: Google APIs System Image](https://github.com/google/android-emulator-m1-preview)</s>
- Make Project

</details>

#### Run

```sh
yarn android
```

### Troubleshooting

- [New Architecture - Troubleshooting](https://reactnative.dev/docs/next/new-architecture-troubleshooting)
- [Apple Silicon (M1) troubleshooting guide (RN 0.64/0.65/0.66)](https://github.com/facebook/react-native/issues/31941)
- [react-native-community/upgrade-support](https://github.com/react-native-community/upgrade-support)

## Storybook v6

Add stories to `src/components/**/*.stories.(ts|tsx)`

_Keep in sync with `.storybook` and `storybook_server` `/main.js`_

```sh
yarn get-stories
```

```sh
yarn storybook-server # optional
```

https://github.com/leotm/react-native-template-new-architecture/blob/01f1c9864f55367004effbe26d3f33590784704b/src/index.tsx#L132

<details>

_<summary>Old v5 setup</summary>_

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

</details>

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

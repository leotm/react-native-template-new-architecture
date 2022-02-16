/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable no-underscore-dangle */

import type * as android from './index.android'
// eslint-disable-next-line @typescript-eslint/no-duplicate-imports
import type DefaultAndroid from './index.android'
import type * as ios from './index.ios'
import DefaultIos from './index.ios'

declare const _test: typeof android
declare const _test: typeof ios

declare const _testDefault: typeof DefaultAndroid
declare const _testDefault: typeof DefaultIos

// export * from './index.ios';
export default DefaultIos

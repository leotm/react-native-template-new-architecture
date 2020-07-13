import * as android from './index.android';
import DefaultAndroid from './index.android';

import * as ios from './index.ios';
import DefaultIos from './index.ios';

declare const _test: typeof android;
declare const _test: typeof ios;

declare const _testDefault: typeof DefaultAndroid;
declare const _testDefault: typeof DefaultIos;

// export * from './index.ios';
export default DefaultIos;

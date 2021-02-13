/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {EnumChangefreq} from 'sitemap';

export interface PluginOptions {
  cacheTime?: number; // deprecated
  changefreq?: EnumChangefreq;
  priority?: number;
  trailingSlash?: boolean;
}

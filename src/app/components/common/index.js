import angular from 'angular';

import {header} from './header/header';
import {footer} from './footer/footer';
import {usageLinks} from './usage-links/usage-links';

export const commonModule = 'common';

angular
  .module(commonModule, [])
  .component('appHeader', header)
  .component('appFooter', footer)
  .component('usageLinks', usageLinks);

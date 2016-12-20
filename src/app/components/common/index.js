import angular from 'angular';

import {header} from './header/header';
import {footer} from './footer/footer';

export const commonModule = 'common';

angular
  .module(commonModule, [])
  .component('appHeader', header)
  .component('appFooter', footer);

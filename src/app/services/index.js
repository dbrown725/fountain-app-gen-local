'use strict';

import angular from 'angular';
import GetTechs from './getTechs/getTechs';
export const ServicesModule = 'ServicesModule';

angular
  .module(ServicesModule, [])
  .service('GetTechs', GetTechs);

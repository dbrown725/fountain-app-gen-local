import angular from 'angular';

import {tech} from './tech/tech';
import {techs} from './techs';

export const techsModule = 'techs';

angular
  .module(techsModule, [])
  .component('appTech', tech)
  .component('appTechs', techs);

import angular from 'angular';

import {commonModule} from './app/components/common/index';
import {techsModule} from './app/components/techs/index';

import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/components/main';

import './index.scss';

angular
  .module('app', [commonModule, techsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main);

import angular from 'angular';
import 'angular-mocks';
import {tempComp} from './tempComp';

describe('tempComp component', () => {
  beforeEach(() => {
    angular
      .module('tempComp', ['app/tempComp/tempComp.html'])
      .component('tempComp', tempComp);
    angular.mock.module('tempComp');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<tempComp></tempComp>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

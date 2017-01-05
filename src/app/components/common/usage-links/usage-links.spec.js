import angular from 'angular';
import 'angular-mocks';
import {usage-links} from './usage-links';

describe('usage-links component', () => {
  beforeEach(() => {
    angular
      .module('usage-links', ['app/components/global/usage-links/usage-links.html'])
      .component('usage-links', usage-links);
    angular.mock.module('usage-links');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<usage-links></usage-links>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

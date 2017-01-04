import angular from 'angular';
import 'angular-mocks';
import {usageLinks} from './usageLinks';

describe('usageLinks component', () => {
  beforeEach(() => {
    angular
      .module('usageLinks', ['app/components/global/usageLinks/usageLinks.html'])
      .component('usageLinks', usageLinks);
    angular.mock.module('usageLinks');
  });

  it('should...', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<usageLinks></usageLinks>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});

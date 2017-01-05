import angular from 'angular';
import 'angular-mocks';
import GetTechs from './getTechs';

describe('GetTechs service', () => {
  beforeEach(() => {
    angular
      .module('GetTechs', [])
      .service('GetTechs', GetTechs);
    angular.mock.module('GetTechs');
  });

  // it('should', angular.mock.inject(GetTechs => {
  //   expect(GetTechs.getData()).toEqual(3);
  // }));
});

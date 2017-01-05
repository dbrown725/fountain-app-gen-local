export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('usage-links', {
      url: '/usage-links',
      component: 'usageLinks'
    })
    .state('app', {
      url: '/',
      component: 'app'
    });
}

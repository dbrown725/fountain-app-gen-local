/** Class displays Hello World. */
class UsageLinksController {
  /**
   * Create Hello World text.
   * @param $http
   * @param $window
   */
  constructor($http, $window) {
    this.text = 'Click me!';
    this.$http = $http;
    this.$window = $window;
  }

  /**
   * Alert a message
   * @return null
   */
  alertSomething() {
    this.$window.alert('ng-click works!');
  }
}

export const usageLinks = {
  templateUrl: 'app/components/common/usage-links/usage-links.html',
  controller: UsageLinksController
};

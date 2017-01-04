/** Class displays Hello World. */
class TempCompController {
  /**
   * Create Hello World text.
   * @param $http
   * @param $window
   */
  constructor($http, $window) {
    this.text = 'Hello World from tempComp!';
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

export const tempComp = {
  templateUrl: 'app/components/common/tempComp/tempComp.html',
  controller: TempCompController
};

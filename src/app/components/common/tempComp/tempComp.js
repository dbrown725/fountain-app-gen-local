class TempCompController {
  constructor($http, $window) {
    this.text = 'Hello World from tempComp!';
    this.$http = $http;
    this.$window = $window;
  }

  alertSomething() {
    this.$window.alert('ng-click works!');
  }
}

export const tempComp = {
  templateUrl: 'app/components/common/tempComp/tempComp.html',
  controller: TempCompController
};

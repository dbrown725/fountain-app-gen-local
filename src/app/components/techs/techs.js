/*eslint-disable*/

class TechsController {
  /** @ngInject */
  constructor($window, $log, GetTechs, $scope) {
    // Bind dependencies
    this.$log = $log;
    this.GetTechs = GetTechs;
    this.$scope = $scope;
  }

  $onInit() {
    this.GetTechs.getTechs()
      .then(response => {
        this.techs = response;
      });
    // Gotcha: lexical reference of 'this' gets overwritten in
    // this passthrough function, so we need to bind to the service
    this.isActiveTech = this.GetTechs.isActiveTech.bind(this.GetTechs);
  }

  onTechSelected(tech) {
    this.GetTechs.setActiveTech(tech);
  }
}

export const techs = {
  template: require('./techs.html'),
  controller: TechsController
};



function HeaderController() {

}

angular.module('FqApp').component('chillFqheader', {
  templateUrl: 'app/header/header.component.html',
  controller: HeaderController,
  bindings: {
    hero: '='
  }
});
function SidebarController() {
            }

angular.module('FqApp').component('chillFqsidebar', {
  templateUrl: 'app/sidebar/sidebar.component.html',
  controller: SidebarController,
  bindings: {
    hero: '='
  }
});

angular.module('FqApp').controller('sideNavController', sideNavController);

          function sideNavController ($scope, $mdSidenav) {
             $scope.openLeftMenu = function() {
               $mdSidenav('left').toggle();
             };
			 $scope.openRightMenu = function() {
               $mdSidenav('right').toggle();
             };}
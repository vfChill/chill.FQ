FQApp.controller('yourJob', ['$scope', '$http', function ($scope, $http) {
	
	"use strict";

	$scope.yourJobBtn = function () {
		$scope.selectPanel('5');
	};
}]);
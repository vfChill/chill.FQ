FQApp.controller('whatComesIn', ['$scope', '$http', function ($scope, $http) {
	
	"use strict";
	
	$scope.whatComesInBtn = function () {
		$scope.selectPanel('6');
	};
}]);
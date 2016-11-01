FQApp.controller('whereYouLive', ['$scope', '$http', function ($scope, $http) {
	
	"use strict";
	
	$scope.whereYouLiveBtn = function () {
		$scope.selectPanel('4');
	};
}]);
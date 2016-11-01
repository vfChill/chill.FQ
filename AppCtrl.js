FQApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
	
	"use strict";
	
	$scope.groups = [
		{
			step: '1',
			title: 'Your Loan',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla sollicitudin magna, at ullamcorper lectus rutrum vel. Maecenas dignissim interdum finibus. Proin maximus fermentum turpis, nec sagittis mauris vulputate ut. Sed sed neque sodales lectus pretium rutrum. Duis mollis pulvinar nisi, a sollicitudin urna euismod et. Phasellus quis vulputate libero. Aenean a iaculis justo. Sed et mi luctus, elementum elit sit amet, sollicitudin nibh. Ut condimentum hendrerit nibh, non aliquam dolor lobortis sed. Suspendisse id vulputate arcu. Fusce nisl elit, egestas laoreet odio at, scelerisque molestie erat. Fusce pharetra luctus nunc, sit amet eleifend nisl feugiat luctus. In convallis felis eu sollicitudin mollis.',
			templateUrl: 'views/YourLoan/YourLoan.html'
		},
		{
			step: '2',
			title: 'A bit about you',
			content: 'Phasellus nec eros eu nibh tempor molestie. Sed eleifend eros sit amet purus volutpat fringilla. Vivamus pretium magna ac erat sagittis euismod. Aliquam vestibulum maximus nulla, vitae placerat risus facilisis sit amet. Quisque ullamcorper vulputate sapien molestie blandit. Phasellus volutpat justo ut tortor scelerisque rhoncus. Nullam magna felis, varius ac enim vel, dictum pellentesque neque. Phasellus convallis velit nec nibh faucibus, id sagittis nulla placerat. Sed sit amet orci quam. Vivamus vitae ante at lorem rhoncus bibendum vitae et urna. Duis tincidunt erat euismod, elementum justo id, malesuada tortor. Etiam ultricies nisl elit, ultricies varius felis aliquam ut. Aliquam a dapibus leo.',
			templateUrl: 'views/AboutYou/AboutYou.html'
		},
		{
			step: '3',
			title: 'Where you live',
			content: 'Pellentesque vehicula lobortis velit vel posuere. Donec egestas orci sem, non tincidunt nulla posuere eu. Praesent pretium sem ac libero blandit, quis convallis libero tempor. Donec bibendum auctor enim, vitae malesuada dui mattis eu. Maecenas id metus tortor. Donec ut porta est. Suspendisse non lacinia est. Morbi vulputate in sem id viverra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vehicula, lectus in consectetur bibendum, nisi metus dapibus mi, ac faucibus libero mi vitae libero. Phasellus iaculis erat in odio blandit maximus. Nullam viverra et lectus fermentum sagittis.',
			templateUrl: 'views/WhereYouLive/WhereYouLive.html'
		},
		{
			step: '4',
			title: 'Your job',
			content: 'Cras consectetur ante et nunc volutpat facilisis. Maecenas in enim eget urna fermentum tempor. Donec viverra euismod elit a eleifend. Praesent fermentum orci mattis turpis tempus ornare nec lacinia leo. Mauris pulvinar luctus dui, sit amet dapibus lorem congue tempor. Ut egestas interdum lacinia. In faucibus, nibh at posuere condimentum, lorem odio mattis diam, eu commodo sem velit id ipsum. Sed ac venenatis orci, quis dignissim metus. Quisque semper velit blandit neque tempor sollicitudin a eget erat. Curabitur nec maximus augue, quis rutrum sem. Vivamus iaculis id erat vel cursus. Mauris vel justo mi.',
			templateUrl: 'views/YourJob/YourJob.html'
		},
		{
			step: '5',
			title: 'What comes in',
			content: 'In sem ante, sagittis ac ligula sed, eleifend bibendum justo. Fusce sit amet ex ac enim porta lacinia at non quam. Suspendisse vitae tortor purus. Morbi ut justo at magna tincidunt viverra. Sed consequat sapien risus, eget consectetur dui ultricies id. Aenean nunc leo, ornare sit amet dignissim in, lacinia quis tellus. Nullam ac efficitur ligula. Aliquam porta, velit sit amet dictum rhoncus, lectus nunc ullamcorper enim, vitae tristique libero lorem sit amet mauris.',
			templateUrl: 'views/WhatComeIn/WhatComeIn.html'
		},
		{
			step: '6',
			title: 'What goes out',
			content: 'Dynamic Group Body - 6',
			templateUrl: 'views/WhatGoesOut/WhatGoesOut.html'
		}
	];
	$scope.today = new Date();
	$scope.maxDate = new Date(
		$scope.today.getFullYear() - 18,
		$scope.today.getMonth(),
		$scope.today.getDate()
	);
					
					
	$scope.application = {
			
	};
				
	$scope.selectedPanel = $scope.groups[1];
	$scope.selectPanel = function (tab) {
		$scope.selectedPanel = tab;
	};
	$scope.isSelected = function (tab) {
		return $scope.selectedPanel === tab;
	};
	
	$scope.showContent = function (Panel) {
		$scope.content.show({
			templateUrl: Panel.templateUrl
		});
	};
}]);
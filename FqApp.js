var FQApp = angular.module('FqApp', ['ngMaterial','ui.bootstrap', 'ngMessages', 'material.svgAssetsCache', 'ui.mask']);

	FQApp.config(function($mdThemingProvider) {
				
		$mdThemingProvider.definePalette('chillPalette', {
			'50': '4A2783',
			'100': '4A2783',
			'200': '4A2783',
			'300': '4A2783',
			'400': '4A2783',
			'500': '4A2783',
			'600': '4A2783',
			'700': '4A2783',
			'800': '4A2783',
			'900': '4A2783',
			'A100': '4A2783',
			'A200': '4A2783',
			'A400': '4A2783',
			'A700': '4A2783',
			'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
												// on this palette should be dark or light

			'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
			 '200', '300', '400', 'A100'],
			'contrastLightColors': undefined    // could also specify this if default was 'dark'
		});
				
		$mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
		$mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
		$mdThemingProvider.theme('chill-purple').primaryPalette('chillPalette');
		$mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
	});
			
	FQApp.config(function($mdDateLocaleProvider){
		$mdDateLocaleProvider.formatDate = function(date) {
			return moment(date).format('DD/MM/YYYY');
	}});
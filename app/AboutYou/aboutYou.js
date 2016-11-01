FQApp.controller('aboutYou', ['$scope', '$http', function ($scope, $http) {
	"use strict";
	$scope.PersonalData = {
		DOB : "",
		Gender : ""
	};
	$scope.AddressData = {
		AddrLn3 : "",
		County : "",
		AddrLn1 : "",
		AddrLn2 : "",
		PostalCode : "",
		Title : "",
		FirstName : "",
		Surname : "",
		Mnumber : "",
		EmailAddr : ""
	};
//	Title
	$scope.Title = {
		id: "Title",
		label: "Title",
		title: "Title",
		type: "select",
		dataType: "text",
		control: "",
		value: "",
		placeHolder: "Title",
		FieldName: "Title"
	};
	
	$scope.titles = [
		{
			"name": "Mr",
			"value": "Mr"
		}, {
			"name": "Mrs",
			"value": "Mrs"
		}, {
			"name": "Ms",
			"value": "Ms"
		}, {
			"name": "Mx",
			"value": "Mx"
		}, {
			"name": "Miss",
			"value": "Miss"
		}, {
			"name": "Master",
			"value": "Master"
		}
	];
	$scope.TitleChanged = function (Title) {
		$scope.AddressData.Title = Title.value;
		//console.log(Title); console.log($scope.AddressData);
	};
//	FIrstName
	$scope.FirstName = {
		id: "FirstName",
		label: "First Name",
		title: "FirstName",
		type: "input",
		dataType: "text",
		control: "",
		value: "",
		placeHolder: "First name",
		FieldName: "First name"
	};
	$scope.FirstNameChanged = function (FirstName) {
		$scope.AddressData.FirstName = FirstName.value;
	};
//	Surname
	$scope.Surname = {
		id: "Surname",
		label: "Surname",
		title: "Surname",
		type: "input",
		dataType: "text",
		control: "",
		value: "",
		placeHolder: "Surname",
		FieldName: "Surname"
	};
	$scope.SurnameChanged = function (Surname) {
		$scope.AddressData.Surname = Surname.value;
	};
//	Gender
	$http.get('data/codebook/C04.json').then(function (response) {
		$scope.Genders = response.data.data;
	});
	$scope.GenderChanged = function (gender) {
		console.log($scope.PersonalData)
	};
	
//	Date Of Birthday
	$scope.DOB = {
		id: "DOB",
		label: "Date of birth",
		title: "DOB",
		type: "date",
		dataType: "dd/mm/yyyy",
		control: "",
		value: "",
		placeHolder: "DOB",
		FieldName: "DOB"
	}
	$scope.today = new Date();
	$scope.maxDate = new Date(
		$scope.today.getFullYear() - 18,
		$scope.today.getMonth(),
		$scope.today.getDate()
	);
//	Relationship Status
	
//	Dependant
	$scope.items = [0, 1, 2, 3, 4, 5, 6, 7];
	$scope.selectedItem = "";
	$scope.getSelectedText = function () {
		if ($scope.selectedItem !== undefined) {
			if ($scope.selectedItem === 1) {
				return $scope.selectedItem + " dependant";
			} else {
				return $scope.selectedItem + " dependants";
			}
		} else {
			return "Dependants Under 18";
		}
	};
	
	$scope.aboutYouBtn = function () {
		console.log($scope.AddressData);
		$scope.selectPanel('3');
	};
}]);
FQApp.controller('yourLoan', ['$scope', '$http', function ($scope, $http) {
	
	"use strict";
	$scope.LoanDetails = {
		Prod : "",
		ReqLnAmt : "",
		ReqTerm : "",
		Purpose : "",
		Consent : true
	};
	$scope.ReqLnAmt = {
		id: "ReqLnAmt",
		label: "ReqLnAmt",
		title: "Loan Value",
		type: "number",
		dataType: "Integer",
		control: "slider",
		step: 1000,
		minValue: "1500",
		maxValue: "60000",
		defaultValue: 30000,
		value: 30000,
		placeHolder: "Your Loan",
		FieldName: "Requested Loan amount/Limit"
	};
	$scope.ReqLnAmtChanged = function (ReqLnAmt) {
		$scope.LoanDetails.ReqLnAmt = ReqLnAmt.value; //console.log(ReqLnAmt);
		//console.log($scope.LoanDetails);
	};
	$scope.ReqTerm = {
		id: "ReqTerm",
		label: "ReqTerm",
		title: "Term Value",
		type: "number",
		dataType: "text",
		control: "slider",
		step: 6,
		minValue: "6",
		maxValue: "90",
		value: 36,
		placeHolder: "Loan term",
		FieldName: "Loan term requested (months)"
	};
	$scope.ReqTermChanged = function (ReqTerm) {
		$scope.LoanDetails.ReqTerm = ReqTerm.value;
	};
	
	$scope.Purpose = {
		id: "Purpose",
		label: "Purpose",
		title: "Purpose of Loan",
		type: "number",
		dataType: "text",
		control: "select",
		value: "",
		placeHolder: "Purpose of Loan",
		FieldName: "Purpose of the Loan"
	};
					
	$http.get('data/codebook/C03.json').then(function (response) {
		$scope.loanPurposes = response.data.data;
	});
										
	$scope.purposeLoanChanged = function (purposeSelected) {
		$scope.LoanDetails.Purpose = purposeSelected.value;
		switch (purposeSelected.value) {
		case "V":
			$scope.ReqTerm.value = 60;
			break;
		case "E":
			$scope.ReqTerm.value = 60;
			break;
		case "HI":
			$scope.ReqTerm.value = 60;
			break;
		case "R":
			$scope.ReqTerm.value = 36;
			break;
		case "W":
			$scope.ReqTerm.value = 36;
			break;
		case "FE":
			$scope.ReqTerm.value = 24;
			break;
		case "CDM":
			$scope.ReqTerm.value = 24;
			break;
		case "I":
			$scope.ReqTerm.value = 12;
			break;
		case "H":
			$scope.ReqTerm.value = 12;
			break;
		case "HA":
			$scope.ReqTerm.value = 12;
			break;
		default:
			$scope.ReqTerm.value = 90;
			break;
		}
		// --Approved Purpose
		// --Max Term (months)
		// ----Domestic Appliances - white / brown goods =	12
		// ----Holiday = 12
		// ----Insurance Premiums = 12
		// ----Cosmetic / medical / dental procedure =	24
		// ----Funeral Expenses = 24
		// ----Re-financing = 36
		// ----Wedding = 36
		// ----Car / boat / motorcycle = 60
		// ----Education = 60
		// ----Home Improvements = 60
	};
	$scope.Consent = {
		id: "Consent",
		label: "Consent",
		title: "Purpose of Loan",
		type: "checkbox",
		dataType: "bool",
		control: "checkbox",
		value: true,
		placeHolder: "I give consent to access my personal credit rating as part of the approval process",
		FieldName: "I give consent to access my personal credit rating as part of the approval process"
	};
	$scope.consentChanged = function (Consent) {
		$scope.LoanDetails.Consent = Consent.value;
	};
	$scope.yourLoanbtn = function () {
		console.log($scope.LoanDetails);
		$scope.selectPanel('2');
	};
}]);
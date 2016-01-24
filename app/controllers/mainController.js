// JavaScript Document
(function (){
		 
		   
	var mainController = function ($scope, $location) {
   
	   $scope.showlist=function(){
	   	$location.path("/application");
	   }
	}
mainController.$inject = ['$scope','$location'];

angular.module('F1FeederApp').controller('mainController', mainController);

}());
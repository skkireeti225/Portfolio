// JavaScript Document
(function (){
		 
		   
		   var listController = function ($scope,customerService,$log) {
           var datas;
	function init() { 
                    $scope.datas = customerService.getCustomers();
             
        }
        
        init();

    };
		   
listController.$inject = ['$scope','customerService','$log'];

angular.module('F1FeederApp').controller('listController', listController);

}());
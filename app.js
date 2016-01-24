// JavaScript Document
(function() {

		var F1FeederApp = angular.module('F1FeederApp', ['ngRoute']);

F1FeederApp.config(
	function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'app/views/home1.html',
        controller: 'mainController'
      }).
	   when('/Experience', {
        templateUrl: 'app/views/list.html',
        controller: 'listController'
      }).
     when('/AboutMe', {
        templateUrl: 'app/views/registration.html',
        controller: ''
      }).
			when('/projects', {
				 templateUrl: 'app/views/piechart.html',
				 controller: 'static'
			 }).
			 when('/details', {
					templateUrl: 'app/views/details.html',
					controller: 'detailsCtrl'
				}).

      otherwise({
        redirectTo: '/'

      });
  });

}());

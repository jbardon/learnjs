require('angular');

var app = angular.module('App',[]);

app.controller("AppController", function($scope){ 
	$scope.message = 'coucou';
});
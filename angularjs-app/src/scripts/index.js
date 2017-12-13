require('angular');

require('./dashboard');

var modules = [
	'dashboard'
];

var app = angular.module('App', modules);
//app.run(require('./init'));
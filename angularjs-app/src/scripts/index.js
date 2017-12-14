require('angular');

require('./customer');
require('./rest');

var modules = [
	'customer',
	'rest'
];

var app = angular.module('App', modules);
//app.run(require('./init'));
// Librairies externes
require('angular');
require('@uirouter/angularjs');

require('./customer');
require('./rest');

var libraries = [
	'ui.router'
]

var modules = [
	'customer',
	'rest'
];

var app = angular.module('App', libraries.concat(modules));
//app.run(require('./init'));
app.config(require('./routes'));
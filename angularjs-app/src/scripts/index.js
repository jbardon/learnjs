// Librairies externes
require('angular');
require('@uirouter/angularjs'); // Router pour SPA
require('angular-resource'); // Appels REST

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
app.config(require('./routes'));

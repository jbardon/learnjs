// External librairies
require('angular');
require('@uirouter/angularjs'); // Router for SPA
require('angular-resource'); // ReST calls

require('./customer');
require('./rest');

var libraries = [
	'ui.router'
];

var modules = [
	'customer',
	'rest'
];

var app = angular.module('App', libraries.concat(modules));
app.config(require('./routes'));

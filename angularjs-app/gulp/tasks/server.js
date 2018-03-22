'use strict';

var gulp = require('gulp');
var express = require('express');

/**
 * Serveur http local qui sert la version buildée du projet
 */
gulp.task('server', function () {
	var server = express();
	server.use(express.static('./dist'));
	server.listen(2093);

	console.log('Server started on http://localhost:2093');
});
'use strict';

var gulp = require('gulp');

/**
 * Surveille les changements pour mettre à jour le serveur local
 */
gulp.task('watch', function () {
	gulp.watch('./src/scripts/**/*.js', ['browserify']);
	gulp.watch('./src/views/**/*.html', ['views']);
});
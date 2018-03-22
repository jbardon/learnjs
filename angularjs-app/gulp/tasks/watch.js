'use strict';

var gulp = require('gulp');

/**
 * Watch changes to update local server
 */
gulp.task('watch', function () {
	gulp.watch('./src/scripts/**/*.js', ['browserify']);
	gulp.watch('./src/views/**/*.html', ['views']);
});
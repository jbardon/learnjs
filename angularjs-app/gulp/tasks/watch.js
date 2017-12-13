'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
	gulp.watch('./src/scripts/**/*.js', ['browserify']);
	gulp.watch('./src/views/**/*.html', ['views']);
});
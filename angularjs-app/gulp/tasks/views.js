'use strict';

var gulp = require('gulp');

/**
 * Copy all .html files to the local server
 */
gulp.task('views', function () {
	return gulp.src('./src/views/**/*.html')
		.pipe(gulp.dest('./dist/'))
});
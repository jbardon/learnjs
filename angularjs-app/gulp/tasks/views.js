'use strict';

var gulp = require('gulp');

gulp.task('views', function () {
	return gulp.src('./src/views/**/*.html')
		.pipe(gulp.dest('./dist/'))
});
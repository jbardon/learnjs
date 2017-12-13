'use strict';

var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function () {
	return browserify('./src/scripts/index.js')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/'));
});

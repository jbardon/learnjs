'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function (cb) {
	runSequence('browserify', 'views', 'watch', 'server',  cb);
});
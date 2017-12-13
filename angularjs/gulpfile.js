var gulp = require('gulp');
var runSequence = require('run-sequence');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['dev']);

gulp.task('dev', function (cb) {
	runSequence('browserify', cb);
});

gulp.task('browserify', function () {
	return browserify('./src/index.js')
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('./dist/'));
});
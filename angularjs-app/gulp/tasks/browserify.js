'use strict';

var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

/**
 * Regroupe tous les fichiers .js dans un seul fichier bundle.js
 * Permet d'utiliser le require de SystemJS
 */
gulp.task('browserify', function () {
	return browserify('./src/scripts/index.js')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/'));
});

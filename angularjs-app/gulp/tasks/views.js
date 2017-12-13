'use strict';

var gulp = require('gulp');

/**
 * Copie tous les fichiers .html vers le serveur local
 */
gulp.task('views', function () {
	return gulp.src('./src/views/**/*.html')
		.pipe(gulp.dest('./dist/'))
});
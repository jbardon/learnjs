'use strict';

var gulp = require('gulp');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

/**
 * Regroupe tous les fichiers .js dans un seul fichier bundle.js
 * Permet d'utiliser le require de SystemJS
 */
gulp.task('browserify', function () {
	return browserify({
			entries: ['./src/scripts/index.js'],
			debug: true // pour générer la sourcemap
		})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./dist/'));
});

/**
 * Pas compatible avec browserify
gulp.task('sourcemap', function () {
    return browserify('./src/scripts/index.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer()) // for sourcemaps
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest('./dist/'));
});
 */
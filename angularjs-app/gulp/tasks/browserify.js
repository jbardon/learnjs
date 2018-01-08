'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

var nodeResolve = require('resolve');

/**
 * Regroupe tous les fichiers .js dans un seul fichier bundle.js
 * Permet d'utiliser le require de SystemJS
 */
gulp.task('browserify', function (cb) {
	runSequence('bundle-app', 'bundle-vendors', cb);
});

var makeBundle = function (bundleType) {
  var browerifyParams = {
    debug: true // pour générer la sourcemap
  };

  if(bundleType === 'app') {
    browerifyParams.entries = ['./src/scripts/index.js'];
  }

  var bundleConfig = browserify(browerifyParams);
  var browserifyVendorFunction = (bundleType === 'app') ? bundleConfig.external.bind(bundleConfig) : bundleConfig.require.bind(bundleConfig);

  // Read package.json and get dependencies' package ids
  var packageManifest = require('../../package.json');
  var packageIds = Object.keys(packageManifest.dependencies) || [];
  packageIds.forEach(function (id) {
    browserifyVendorFunction(nodeResolve.sync(id), {expose: id});
  });

  var bundleName = bundleType === 'app' ? 'bundle.js' : bundleType + '.js';
  return bundleConfig.bundle()
    .pipe(source(bundleName))
    .pipe(gulp.dest('./dist'));
};

gulp.task('bundle-app', function () {
  makeBundle('app');
});

gulp.task('bundle-vendors', function () {
  makeBundle('vendors');
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
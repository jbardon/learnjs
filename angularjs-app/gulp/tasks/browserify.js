'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

var browserify = require('browserify');
var source = require('vinyl-source-stream');

var nodeResolve = require('resolve');

/**
 * Put together all .js in one single file
 * Allows to use require from SystemJS
 */
gulp.task('browserify', function (cb) {
	runSequence('bundle-app', 'bundle-vendors', cb);
});

/**
 * Make a browserify bundle
 * @param isAppBundle true to bundle application without dependencies, false to bundle dependencies only
 * @returns {*} bundle
 */
var makeBundle = function (isAppBundle) {
  var browerifyParams = {
    debug: true // generate source map
  };

  // Define if application must be included in bundle
  if(isAppBundle) {
    browerifyParams.entries = ['./src/scripts/index.js'];
  }

  // Define if dependencies must be included in bundle
  var bundleConfig = browserify(browerifyParams);
  var browserifyVendorFunction = (isAppBundle) ? bundleConfig.external.bind(bundleConfig) : bundleConfig.require.bind(bundleConfig);

  // Read package.json and get dependencies package ids
  var packageManifest = require('../../package.json');
  var packageIds = Object.keys(packageManifest.dependencies) || [];
  packageIds.forEach(function (id) {
    browserifyVendorFunction(nodeResolve.sync(id), {expose: id});
  });

  // Generate bundle
  var bundleName = (isAppBundle ? 'bundle' : 'vendors') + '.js';
  return bundleConfig.bundle()
    .pipe(source(bundleName))
    .pipe(gulp.dest('./dist'));
};

gulp.task('bundle-app', function () {
  makeBundle(true);
});

gulp.task('bundle-vendors', function () {
  makeBundle(false);
});

/**
 * Not compatible with browserify
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
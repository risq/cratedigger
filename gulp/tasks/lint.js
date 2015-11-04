var gulp = require('gulp');
var jscs = require('gulp-jscs');
var eslint = require('gulp-eslint');
var handleErrors = require('../util/handleErrors');
var config = require('../config').lint;

function doLint() {
  return gulp.src(config.js.src)
    .pipe(jscs())
    .on('error', handleErrors)
    .pipe(eslint())
    .pipe(eslint.format());
}

gulp.task('lint', doLint);

gulp.task('lint-fail', function lintFail() {
  return doLint().pipe(eslint.failOnError());
});

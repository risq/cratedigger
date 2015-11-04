var gulp = require('gulp');
var concat = require('gulp-concat');
var newer = require('gulp-newer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var configJs = require('../config').vendorJs;
var configCss = require('../config').vendorCss;

gulp.task('vendorJs', ['browserify'], function() {
  return gulp.src(configJs.src)
    .pipe(newer(configJs.dest + '/' + configJs.outputName))
    .pipe(sourcemaps.init({
      loadMaps: true,
    }))
    .pipe(concat(configJs.outputName))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(configJs.dest));
});

gulp.task('vendorCss', function() {
  return gulp.src(configCss.src)
    .pipe(newer(configCss.dest + '/' + configCss.outputName))
    .pipe(sourcemaps.init())
    .pipe(concat(configCss.outputName))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(configCss.dest));
});

gulp.task('vendor', ['vendorJs', 'vendorCss']);

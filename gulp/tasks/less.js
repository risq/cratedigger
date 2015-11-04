var gulp         = require('gulp');
var less         = require('gulp-less');
var sourcemaps   = require('gulp-sourcemaps');
var minifyCSS    = require('gulp-minify-css');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').less;
var stream       = require('../util/bs').stream;
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../util/handleErrors');

function doLess() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(less(config.settings))
    .on('error', handleErrors)
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest))
    .pipe(stream({match: '**/*.css'}));
};

gulp.task('less', doLess);

gulp.task('less-all', ['sprite', 'iconFont'], doLess);

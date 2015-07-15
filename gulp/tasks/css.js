var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').css;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
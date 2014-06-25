// Load plugins
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    runSequence = require('run-sequence'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin');


gulp.task('connect', function() {
    connect.server({
        root: 'src',
        port: 3001
    });
});

// Scripts
gulp.task('scripts-build', function() {
  return gulp.src('src/script/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('cratedigger.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

// Styles
gulp.task('styles-build', function() {
  return gulp.src('src/css/**/*.css')
    .pipe(concat('cratedigger.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['dist'], {read: false})
    .pipe(clean());
});

gulp.task('build', function () {
    runSequence('clean', ['scripts-build', 'styles-build']);
});

gulp.task('default', ['connect']);


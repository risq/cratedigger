// Load plugins
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    runSequence = require('run-sequence'),
    connect = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
        root: 'src',
        port: 3000
    });
});

// Scripts
gulp.task('scripts-build', function() {
  return gulp.src('src/script/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('3dvinyls.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});

// Clean
gulp.task('clean', function() {
  return gulp.src(['dist'], {read: false})
    .pipe(clean());
});

gulp.task('build', function () {
    runSequence('clean', 'scripts-build');
});

gulp.task('default', ['connect']);


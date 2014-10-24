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
    cssmin = require('gulp-cssmin'),
    shell = require('gulp-shell'),
    open = require("gulp-open"),
    del = require('del');


gulp.task('connect', function() {
    connect.server({
        root: 'src',
        port: 3001
    });
    gulp.src("src/index.html")
        .pipe(open('', {url: 'http://localhost:3001'}));
});

gulp.task('demo', function() {
    connect.server({
        root: 'demo',
        port: 3001
    });
    gulp.src("demo/index.html")
        .pipe(open('', {url: 'http://localhost:3001'}));
});

// Scripts
gulp.task('build-scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('cratedigger.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

// Styles
gulp.task('build-styles', function() {
  return gulp.src('src/styles/**/*.css')
    .pipe(concat('cratedigger.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/styles'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('build-imgs', function() {
    return gulp.src('src/img/*')
        .pipe(gulp.dest('dist/img'));
});

// Clean
gulp.task('clean', function() {
    del.sync('dist');
});

gulp.task('build', function () {
    runSequence('clean', ['build-scripts', 'build-styles', 'build-imgs']);
});

gulp.task('build-demo', function () {
    runSequence('clean', ['build-scripts', 'build-styles'], 'move-demo-files', 'bower-install-demo');
});

gulp.task('move-demo-files', function () {
    gulp.src('dist/styles/*.css')
        .pipe(gulp.dest('demo/styles'));
    gulp.src('dist/scripts/*.js')
        .pipe(gulp.dest('demo/scripts'));
    gulp.src('src/img/*')
        .pipe(gulp.dest('demo/img'));
    gulp.src('src/*.js')
        .pipe(gulp.dest('demo/'));
});

gulp.task('bower-install-demo', function () {
    gulp.src('./')
        .pipe(shell([
            'cp -r src/bower_components demo/bower_components'
        ]));
});

gulp.task('default', ['connect']);


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
    ghPages = require('gulp-gh-pages');


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
  return gulp.src(['!src/scripts/threejs_modules.min.js', 'src/scripts/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('cratedigger.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(gulp.dest('demo/scripts'));
});

// Styles
gulp.task('build-styles', function() {
  return gulp.src('src/styles/**/*.css')
    .pipe(concat('cratedigger.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/styles'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/styles'))
    .pipe(gulp.dest('demo/styles'));
});

gulp.task('build-imgs', function() {
    return gulp.src('src/img/*')
        .pipe(gulp.dest('dist/img'))
        .pipe(gulp.dest('demo/img'));
});

// Three.js modules
gulp.task('build-threejs-modules', function() {
  return gulp.src('src/scripts/threejs_modules/*.js')
    .pipe(concat('threejs_modules.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('src/scripts'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(gulp.dest('demo/scripts'));
});

// Clean
gulp.task('clean', function() {
    del.sync('dist');
});

gulp.task('clean-demo', function() {
    del.sync('demo/scripts/*');
});

gulp.task('build', function () {
    runSequence('clean', ['build-scripts', 'build-styles', 'build-imgs', 'build-threejs-modules']);
});

gulp.task('build-demo', function () {
    runSequence('clean-demo', 'build', 'move-demo-files', 'bower-install-demo');
});

gulp.task('move-demo-files', function () {
    gulp.src('src/*.js')
        .pipe(gulp.dest('demo/'));
});

gulp.task('deploy-demo', function () {
    return gulp.src('./demo/**/*')
        .pipe(ghPages());
});

gulp.task('deploy', function () {
    runSequence('clean', 'build', 'build-demo', 'deploy-demo');
});

gulp.task('bower-install-demo', function () {
    gulp.src('./')
        .pipe(shell([
            'cp -r src/bower_components demo/bower_components'
        ]));
});

gulp.task('default', ['connect']);


var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var config = require('../config').production;

gulp.task('production', ['build'], function() {
  return gulp.src(config.src)
      .pipe(vinylPaths(del))
      .pipe(gulp.dest(config.dest));
});

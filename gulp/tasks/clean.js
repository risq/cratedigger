var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var config = require('../config').clean;

gulp.task('clean', function() {
  return gulp.src(config.src)
      .pipe(vinylPaths(del));
});

var gulp         = require('gulp');
var config       = require('../config').bower;

gulp.task('bower', function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
});
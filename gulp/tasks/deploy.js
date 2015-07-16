var gulp         = require('gulp');
var ghPages		 = require('gulp-gh-pages');
var config       = require('../config').deploy;

gulp.task('deploy', ['production'], function () {
  return gulp.src(config.files)
    .pipe(ghPages());
});
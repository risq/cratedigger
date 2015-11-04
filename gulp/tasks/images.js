var newer = require('gulp-newer');
var gulp = require('gulp');

// var imagemin = require('gulp-imagemin');
var config = require('../config').images;
var reload = require('../util/bs').reload;

gulp.task('images', function() {
  return gulp.src(config.src)

    // Ignore unchanged files
    .pipe(newer(config.dest))

    // .pipe(imagemin())
    .pipe(gulp.dest(config.dest))
    .pipe(reload({
      stream: true,
    }));
});

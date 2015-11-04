var gulp = require('gulp');
var gulpif = require('gulp-if');
var sprity = require('sprity');
var config = require('../config').sprite;

// generate sprite.png and _sprite.scss
gulp.task('sprite', function() {
  return sprity.src(config.options)
    .pipe(gulpif('*.png',
                 gulp.dest(config.destImage),
                 gulp.dest(config.destStyle)
    ));
});

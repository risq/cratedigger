var gulp             = require('gulp');
var iconfont         = require('gulp-iconfont');
var config           = require('../../config').iconFont;
var generateIconLess = require('./generateIconLess');
var handleErrors     = require('../../util/handleErrors');

// var generateIconSass = require('./generateIconSass');

gulp.task('iconFont', function() {
  return gulp.src(config.src)
    .pipe(iconfont(config.options))
    .on('glyphs', generateIconLess)

    // .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});

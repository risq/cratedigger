var gulp        = require('gulp');
var bs          = require('../util/bs');
var config      = require('../config').browserSync;

gulp.task('browserSync', function() {
  bs.init(config);
});

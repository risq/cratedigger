var gulp = require('gulp');

gulp.task('build', [
  'markup',
  'images',
  'less',
  'vendor',
]);

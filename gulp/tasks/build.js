var gulp = require('gulp');

gulp.task('build', ['markup',
  'images',
  'fonts',
  'less-all',
  'vendor',
]);

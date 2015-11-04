var gulp = require('gulp');
var taskListing = require('gulp-task-listing');

gulp.task('help', taskListing.withFilters(function(task) {
  return task !== 'build' &&
    task !== 'default' &&
    task !== 'help' &&
    task !== 'production' &&
    task !== 'test';
}));

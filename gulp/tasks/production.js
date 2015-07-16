var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('production', ['bower', 'css', 'images', 'markup', 'uglifyJs']);

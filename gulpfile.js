'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');

var files = ['manifest.json', 'pussy-avatar.js', '*.png'];
var xpiName = 'pussy-avatar.xpi';

gulp.task('default', function () {
  gulp.src(files)
    .pipe(zip(xpiName))
    .pipe(gulp.dest('.'));
});

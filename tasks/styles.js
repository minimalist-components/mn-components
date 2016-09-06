'use strict';

let gulp = require('gulp');
let config = require('./gulp.config.js');
let bower = require('bower-files')();
let path = require('path');

let dependencies = bower
  .relative(path.join(__dirname, '..'))
  .ext('scss')
  .files;

gulp.task('styles', stylesTask);

function stylesTask() {

}

'use strict';

let gulp = require('gulp');
let config = require('./gulp.config.js');
let bower = require('bower-files')();
let path = require('path');

let dependencies = bower
  .relative(path.join(__dirname, '..'))
  .ext('js')
  .files;

gulp.task('scripts', scriptsTask);

function scriptsTask() {

}

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
   gulp.watch(config.less.src     , ['less']);
  gulp.watch(config.markup.watch , ['markup']);
});

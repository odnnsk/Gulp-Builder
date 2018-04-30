'use strict';

module.exports = function(){
    $.gulp.task('watch', function(){
        $.gulp.watch('./source/style/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./source/views/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./source/js/*.js', $.gulp.series('js:process'));
    });
};
'use strict';

//Use global for all modules
global.$ = {
    path:{
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create()
};


//tasks
$.path.task.forEach(function(taskPath){
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
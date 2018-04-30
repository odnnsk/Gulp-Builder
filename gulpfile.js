'use strict';

//Global variables
global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        jsFoundation: require('./gulp/paths/js.foundation.js'),
        cssFoundation: require('./gulp/paths/css.foundation.js'),
        app: require('./gulp/paths/app.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};


//tasks
$.path.task.forEach(function(taskPath){
    require(taskPath)();
});

//Default task
$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug',
		'js:process',
        'js:foundation',
		'css:foundation',
		'copy:fonts',
		'copy:image'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
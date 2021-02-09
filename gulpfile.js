global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    imagemin: require('gulp-imagemin'),
    optipng: require('imagemin-optipng'),
    mozjpeg: require('imagemin-mozjpeg'),
    pngquant: require('imagemin-pngquant'),
    jpegRecompress: require('imagemin-jpeg-recompress'),
    cache: require('gulp-cache'),

    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:dev', 'pug', 'libsJS:dev', 'js:copy', 'svg', 'svg2', 'img:dev', 'fonts','svg:copy')));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:build', 'pug', 'libsJS:build', 'js:copy', 'svg', 'svg2', 'img:build', 'fonts','svg:copy')));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
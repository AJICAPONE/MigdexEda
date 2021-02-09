module.exports = function() {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif,svg}')
            .pipe($.gulp.dest('./build/static/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
            // .pipe($.gp.tinypng('DwbbWkWCpzZPWTWPnsTWBX3t8ZZC1GRg'))
            // .pipe($.gp.imagemin([
            //     $.gp.imagemin.mozjpeg({progressive: true}),
            //     $.jpegRecompress({
            //         loops: 5,
            //         min: 65,
            //         max: 70,
            //         quality: 'medium'
            //     }),
            //     $.gp.imagemin.optipng({optimizationLevel: 3}),
            //     $.pngquant({ quality: [0.65, 0.70], speed: 5 }),
            //     $.gp.imagemin.svgo()
            // ],{verbose: true}))
            .pipe($.gulp.dest('./build/static/img/'));
    });


    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./dev/static/img/general/*.svg')
            .pipe($.gulp.dest('./build/static/img/general/'));
    });

};

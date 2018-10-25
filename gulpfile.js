var gulp = require('gulp'),
    watch = require('gulp-watch'),
    del = require('del'),
    sass = require('gulp-sass'),
    browserSync = require("browser-sync").create();

gulp.task('sass', function () {
    gulp.src('./sources/css/sass/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./sources/css/stylesheets/'));
});
gulp.task('sass-lab', function () {
    gulp.src('./lab/sources/css/sass/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./lab/sources/css/stylesheets/'));
});
gulp.task('sass-bgm', function () {
    gulp.src('./bgm/sources/css/sass/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./bgm/sources/css/stylesheets/'));
});
gulp.task('serve', function (done) {
    browserSync.init({
        server: {
            baseDir: './',
            serveStaticOptions: {
                extensions: ['html'] // pretty urls
            }
        },

    });
    done();
});
gulp.task('dev', ['sass', 'serve'], function (cb) {
    //gulp.watch('./sources/**/*.js', ['scripts']);
    //gulp.watch('./**/*.html', ['html']);
    //下面是index用的配置
    gulp.watch('./sources/css/sass/*.scss', ['sass']);
    gulp.watch('./*.html', ['reload']);
    gulp.watch('./sources/css/sass/*.scss', ['reload']);
    //下面是lab用的配置 
    gulp.watch('./lab/sources/css/sass/*.scss', ['sass-lab']);
    gulp.watch('./lab/*.html', ['reload']);
    gulp.watch('./lab/sources/css/sass/*.scss', ['reload']);
    //下面是bgm用的配置
    gulp.watch('./bgm/sources/css/sass/*.scss', ['sass-bgm']);
    gulp.watch('./bgm/*.html', ['reload']);
    gulp.watch('./bgm/sources/css/sass/*.scss', ['reload']);
});

gulp.task('reload', function (done) {
    setTimeout(function () {
        browserSync.reload();
        done();
    }, 300)
});
gulp.task('build', ['scripts', 'css', 'html', 'static'])
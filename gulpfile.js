var gulp = require('gulp'),
    watch = require('gulp-watch'),
    del = require('del'),
    sass = require('gulp-sass'),
    browserSync = require("browser-sync").create();

gulp.task('html', function () {
    gulp.src('./*.html')
        .pipe(gulp.dest('./dist'));
});
gulp.task('css', function () {
    gulp.src('./sources/css/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/sources/css/'));
});
gulp.task('serve', function (done) {
    browserSync.init({
        server: {
            baseDir: './dist',
            serveStaticOptions: {
                extensions: ['html'] // pretty urls
            }
        },

    });
    done();
});
gulp.task('dev', ['html','css', 'serve'], function (cb) {
    gulp.watch('./sources/css/*.scss', ['css']);
    gulp.watch('./*.html', ['html']);
    gulp.watch('./sources/css/sass/*.scss', ['reload']);
    gulp.watch('./*.html', ['reload']);
});

gulp.task('reload', function (done) {
    setTimeout(function () {
        browserSync.reload();
        done();
    }, 300)
});
gulp.task('build', ['scripts', 'css', 'html', 'static'])
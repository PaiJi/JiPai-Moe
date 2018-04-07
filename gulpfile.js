var gulp = require('gulp'),
    watch = require('gulp-watch'),
    del = require('del'),
    sass = require('gulp-sass'),
    browserSync = require("browser-sync").create();
gulp.task('default',function(){

});
gulp.task('console',function(){
    console.log('Bring the world light.');
});
gulp.task('sass', function () {
    gulp.src('./sources/css/sass/*.scss')
        .pipe(sass({ outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./sources/css/stylesheets/'));
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
    gulp.watch('./sources/css/sass/*.scss', ['sass']);

    gulp.watch('./*.html', ['reload']);
    gulp.watch('./sources/css/sass/*.scss', ['reload']);
    gulp.task('console');
});

gulp.task('reload', function (done) {
    setTimeout(function () {
        browserSync.reload();
        done();
    }, 300)
});
gulp.task('build', ['scripts', 'css', 'html', 'static'])
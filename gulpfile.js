
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rimraf = require('rimraf');
var minifyHtml = require("gulp-minify-html");

var paths = {
    dist: "dist"
};

gulp.task('js', function () {
    gulp.src(['src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('boopup.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest( paths.dist ));
});

gulp.task('html', function () {
    gulp.src('src/**/*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('clean', function (cb) {
    rimraf(paths.dist, cb);
});

gulp.task('watch', ['js'], function () {
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.html', ['html']);
});

gulp.task("default", ["clean", "html", "js"]);
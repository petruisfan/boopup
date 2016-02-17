
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rimraf = require('rimraf');
var minifyHtml = require("gulp-minify-html");
var jshint = require("gulp-jshint");
var header = require("gulp-header");
var concatCss = require('gulp-concat-css');
var minifyCSS = require('gulp-minify-css');


var paths = {
    dist: "dist"
};
var pkg = require('./package.json');
var copyright = "/**\n" +
    " * Copyright Petru Isfan | Released under the Apache2 license\n" +
    " * Version: " + pkg.version + "\n" +
    " */\n";

gulp.task('jsmin', function () {
    gulp.src(['src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('boopup.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(header(copyright))
        .pipe(gulp.dest( paths.dist ));
});

gulp.task('js', function () {
    gulp.src(['src/**/*.js'])
        .pipe(concat('boopup.js'))
        .pipe(header(copyright))
        .pipe(gulp.dest( paths.dist ));
});

gulp.task('html', function () {
    gulp.src('src/**/*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('cssmin', function () {
    gulp.src('src/**/*.css')
        .pipe(concatCss("boopup.min.css"))
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('css', function () {
    gulp.src('src/**/*.css')
        .pipe(concatCss("boopup.css"))
        .pipe(gulp.dest(paths.dist));
});


gulp.task('lint', function () {
    gulp.src('src/**/*.js') // path to your files
        .pipe(jshint())
        .pipe(jshint.reporter()); // Dump results
});

gulp.task('clean', function (cb) {
    rimraf(paths.dist, cb);
});

gulp.task('watch', [], function () {
    gulp.watch('src/**/*.js', ['js', 'jsmin']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/**/*.css', ['css', 'cssmin']);
});

gulp.task("default", ["clean", "lint", "html", "js", "jsmin", "css", "cssmin"]);

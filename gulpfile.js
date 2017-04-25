var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var cssmin = require('gulp-minify-css');

gulp.task('default', function() {
    return browserify('./source/js/regist.js')
        .transform(babelify, { presets: ["react", "es2015"] })
        .bundle()
        .pipe(source('regist.js'))
        .pipe(gulp.dest('./build/'));
})

gulp.task('buildHtml', function() {
    return gulp
        .src('source/view/*.*')
        .pipe(gulp.dest('./build/'));
})

gulp.task('buildCSS', function() {
    return gulp
        .src('source/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css'));
})

var gulp =require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default',function(){
	return browserify('./source/js/regist.js')
		.transform(babelify,{presets:["react","es2015"]})
		.bundle()
		.pipe(source('regist.js'))
		.pipe(gulp.dest('./build/'));
})
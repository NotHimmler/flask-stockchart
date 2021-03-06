var gulp = require('gulp');
var gulpBrowser = require("gulp-browser");
var del = require('del');
var reactify = require('reactify');
var size = require('gulp-size');

gulp.task('transform', function(){
	var stream = gulp.src('./static/scripts/jsx/*.js')
	.pipe(gulpBrowser.browserify({transform: ['reactify']}))
	.pipe(gulp.dest('./static/scripts/js/'))
	.pipe(size());

	return stream;
});

gulp.task('del', function(){
	return del(['./static/scripts/js']);
});

gulp.task('default', ['del'], function() {
	gulp.start('transform');
	gulp.watch('./static/scripts/jsx/*.js', ['transform']);
});

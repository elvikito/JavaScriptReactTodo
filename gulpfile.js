var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

var babelify = require("babelify");

gulp.task('browserify', function(){
    browserify('./src/js/main.js')
        .transform('reactify')
        //.transform(babelify, {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js'))

});

gulp.task('copy', function(){
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['browserify', 'copy', 'sass'], function(){
    return gulp.watch('src/**/*.*', ['browserify', 'copy', 'sass'])
});

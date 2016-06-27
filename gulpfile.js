'use strict';


var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var bsConfig = require("gulp-bootstrap-configurator");
// var serve = require('gulp-serve');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function() {
    gulp.src('./index.html')
        .pipe(gulp.dest('./public'));

});


gulp.task('css', function() {
    gulp.src('styling/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public'));


});

gulp.task('make-bootstrap-css', function(){
  return gulp.src("node_modules/bootstrap/dist/css/bootstrap.css")
    .pipe(bsConfig.css())
    .pipe(gulp.dest("./public"));
    // It will create `bootstrap.css` in directory `assets`.
});

gulp.task('js', function() {
    gulp.src('javascript/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {

    gulp.watch('./styling/styles.scss', ['css']);
    gulp.watch('./index.html', ['html']);
    gulp.watch('./javascript/*.js', ['js']);
})

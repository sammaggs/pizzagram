var gulp = require('gulp');
var sass = require('gulp-sass');
let watch = require('gulp-watch-sass');
let rename = require('gulp-rename');

gulp.task('default', defaultTask);

function defaultTask(done) {

  done();
}

gulp.task('sass', function () {
    return gulp.src('./src/styles/scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/styles/css/'))
        .pipe(rename('styles.css'));
});

gulp.task('watch', function () {
    console.log("working");
    gulp.watch('./src/styles/scss/styles.scss', ['sass']);
});
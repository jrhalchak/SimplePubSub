var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel');

gulp.task('scripts', function() {
  gulp.src('./source/simplePubSub.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('./bin/'))
    .pipe(rename({ basename: 'index' }))
    .pipe(gulp.dest('./'))
    .pipe(uglify())
    .pipe(rename({ basename: 'simplePubSub', extname: '.min.js'}))
    .pipe(gulp.dest('./bin/'))
});

gulp.task('default', ['scripts']);

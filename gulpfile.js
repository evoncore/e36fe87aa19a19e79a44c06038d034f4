
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    prefix = require('gulp-autoprefixer');


gulp.task('front-sass', function() {

  return gulp.src('./client/sass/front/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./client/css/front'));

});

gulp.task('game-sass', function() {

  return gulp.src('./client/sass/game/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./client/css/game/'));

});

gulp.task('autoprefix-front-css', function() {

  return gulp.src('client/css/front/*.css')
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8'))

});

gulp.task('autoprefix-game-css', function() {

  return gulp.src('client/css/game/*.css')
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8'))

});

gulp.task('watch', function() {

  gulp.watch('client/sass/*.sass', ['front-sass']);
  gulp.watch('client/sass/*.sass', ['game-sass']);
  gulp.watch('client/dist/css/*.css', ['autoprefix-front-css']);
  gulp.watch('client/dist/css/*.css', ['autoprefix-game-css']);

});

gulp.task('default', ['front-sass', 'game-sass', 'autoprefix-front-css', 'autoprefix-game-css', 'watch']);

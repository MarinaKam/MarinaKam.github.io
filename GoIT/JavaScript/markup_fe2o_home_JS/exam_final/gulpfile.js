'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gulpIf = require('gulp-if');
var del = require('del');
var newer = require('gulp-newer');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');
var combine = require('stream-combiner2').obj;
var cssnano = require('gulp-cssnano');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var rigger = require('gulp-rigger');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');

var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('css', function() {

    return combine(
        gulp.src('frontend/css/styles/main.scss'),
        gulpIf(isDevelopment, sourcemaps.init()),
        sass(),
        gulpIf(isDevelopment, sourcemaps.write()),
        gulpIf(!isDevelopment, cssnano()),
        gulpIf(!isDevelopment, rev()),
        concat('index.css'),
        gulp.dest('public/styles'),
        gulpIf(!isDevelopment, rev.manifest('css.json')),
        gulpIf(!isDevelopment, gulp.dest('manifest'))
    ).on('error', notify.onError());

});

gulp.task('clean', function() {
    return del(['public', 'manifest']);
});

gulp.task('assets', function() {
    return gulp.src('frontend/assets/**/*.*', { since: gulp.lastRun('assets') })
        .pipe(gulpIf(!isDevelopment, revReplace({
            manifest: gulp.src('manifest/css.json', { allowEmpty: true })
        })))
        .pipe(newer('public'))
        .pipe(gulp.dest('public'));
});

gulp.task('css:assets', function() {
    return gulp.src('frontend/css/img/**/*.{png,jpg,svg}', { since: gulp.lastRun('css:assets') })
        .pipe(gulpIf(!isDevelopment, rev()))
        .pipe(gulp.dest('public/styles/img'))
        .pipe(gulpIf(!isDevelopment, combine(rev.manifest('assets.json'), gulp.dest('manifest'))));
});

gulp.task('css:font', function() {
    return gulp.src('frontend/css/fonts/**/*.*')
        .pipe(gulpIf(!isDevelopment, rev()))
        .pipe(gulp.dest('public/styles/fonts'));
});

gulp.task('css:css', function() {
    return gulp.src('frontend/css/styles/**/owl.carousel.css')
        .pipe(gulpIf(!isDevelopment, rev()))
        .pipe(gulp.dest('public/styles'));
});

gulp.task('src', function() {
    return combine(
        gulp.src('frontend/src/**/{tmpl.js,script-template-carousel.js,script.js}'),
        jshint(),
        jshint.reporter('default'),
        gulpIf(isDevelopment, sourcemaps.init()),
        uglify(),
        //concat('script.js'),
        gulpIf(isDevelopment, sourcemaps.write()),
        gulp.dest('public/src')
    ).on('error', notify.onError());
});
gulp.task('src:respond', function() {
    return gulp.src('frontend/src/**/respond.min.js')
        .pipe(gulpIf(!isDevelopment, rev()))
        .pipe(gulp.dest('public/src'));
});

gulp.task('src:slid', function() {
    return gulp.src('frontend/src-slid/**/*.*')
        .pipe(gulpIf(!isDevelopment, rev()))
        .pipe(gulp.dest('public/src-slid'));

});

gulp.task('build', gulp.series('clean', gulp.parallel('css:assets', 'css:font', 'css','css:css', 'src', 'src:respond', 'src:slid'), 'assets'));

gulp.task('watch', function() {
    gulp.watch('frontend/css/**/*.scss', gulp.series('css'));
    //gulp.watch('frontend/css/styles/{small.scss,medium.scss,large.scss}', gulp.series('css:mobile'));
    gulp.watch('frontend/css/fonts/**/*.*', gulp.series('css:font'));
    gulp.watch('frontend/css/styles/**/owl.carousel.css', gulp.series('css:css'));
    gulp.watch('frontend/src/**/*.*', gulp.series('src'));
    gulp.watch('frontend/src/**/respond.min.js', gulp.series('src:respond'));
    gulp.watch('frontend/src-slid/**/*.*', gulp.series('src:slid'));
    gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
    gulp.watch('frontend/css/img/*.{png,jpg,svg}', gulp.series('css:assets'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: 'public'
    });

    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build', gulp.parallel('serve', 'watch')));
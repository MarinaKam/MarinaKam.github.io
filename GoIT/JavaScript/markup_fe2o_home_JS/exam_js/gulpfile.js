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
var cleanCSS = require('gulp-clean-css');
var prefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

gulp.task('css', function() {
    return combine(
        gulp.src('src/sass/main.scss'),
        gulpIf(isDevelopment, sourcemaps.init()),
        sass(),
        prefixer(),
        cssmin(),
        gulpIf(!isDevelopment, cssnano()),
        gulpIf(!isDevelopment, rev()),
        concat('style.css'),
        gulpIf(isDevelopment, sourcemaps.write()),
        gulp.dest('build/css'),
        gulpIf(!isDevelopment, rev.manifest('css.json')),
        gulpIf(!isDevelopment, gulp.dest('manifest'))
    ).on('error', notify.onError());
});

gulp.task('css:ie', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(cssmin())
        .pipe(gulp.dest('build/css'));
});

gulp.task('clean', function() {
    return del(['build', 'manifest']);
});

gulp.task('src', function() {
    return gulp.src('src/**/**/index.html', { since: gulp.lastRun('src') })
        .pipe(gulpIf(!isDevelopment, revReplace({
            manifest: gulp.src('manifest/css.json', { allowEmpty: true })
        })))
        .pipe(newer('build'))
        .pipe(gulp.dest('build'));
});

gulp.task('js', function() {
    return combine(
        gulp.src('src/js/**/*.js'),
        jshint(),
        jshint.reporter('default'),
        rigger(),
        gulpIf(isDevelopment, sourcemaps.init()),
        uglify(),
        gulpIf(isDevelopment, sourcemaps.write()),
        gulp.dest('build/js')
    ).on('error', notify.onError());
});

gulp.task('js:lib', function() {
    return gulp.src('src/lib/owl.carousel.min.js')
        .pipe(gulp.dest('build/lib'));
});

gulp.task('fonts', function() {
    return gulp.src('src/fonts/*')
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('img', function() {
    return gulp.src('src/img/**/*.{png,jpg,svg}', { since: gulp.lastRun('img') })
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant({quality: '65-80', speed: 4})],
            interlaced: true
        }))
        .pipe(gulp.dest('build/img'))
        .pipe(gulpIf(!isDevelopment, combine(rev.manifest('src.json'), gulp.dest('manifest'))));
});

gulp.task('build', gulp.series('clean', gulp.parallel('css', 'css:ie', 'img', 'fonts', 'js', 'js:lib'), 'src'));

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', gulp.series('css'));
    gulp.watch('src/fonts/**/*.*', gulp.series('fonts'));
    gulp.watch('src/css/*.css', gulp.series('css:ie'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
    gulp.watch('src/lib/owl.carousel.min.js', gulp.series('js:lib'));
    gulp.watch('src/**/**/*.*', gulp.series('src'));
    gulp.watch('src/img/*.{png,jpg,svg}', gulp.series('img'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: 'build'
    });

    browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build', gulp.parallel('serve', 'watch')));
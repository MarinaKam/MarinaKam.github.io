'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
// const debug = require('gulp-debug');
const autoprefixer = require('gulp-autoprefixer');
const gulpIf = require('gulp-if');
const del = require('del');
const newer = require('gulp-newer');
const browserSync = require('browser-sync').create();
const notify = require('gulp-notify');
const combine = require('stream-combiner2').obj;
const cssnano = require('gulp-cssnano');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const rigger = require('gulp-rigger');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const traceur = require('gulp-traceur');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

// gulp.task('default', function() {
//     return gulp.src('frontend/**/*.*')
//         .pipe(gulp.dest('public'));

// });
gulp.task('css', function() {

    return combine(
        gulp.src('frontend/css/main.css'),
        gulpIf(isDevelopment, sourcemaps.init()),
        sass(),
        gulpIf(isDevelopment, sourcemaps.write()),
        gulpIf(!isDevelopment, cssnano()),
        gulpIf(!isDevelopment, rev()),
        concat('main.css'),
        gulp.dest('public/css'),
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
        .pipe(gulp.dest('public/css/img'))
        .pipe(gulpIf(!isDevelopment, combine(rev.manifest('assets.json'), gulp.dest('manifest'))));
});



gulp.task('css:font', function() {
    return gulp.src('frontend/css/font/*.*')
        .pipe(gulpIf(!isDevelopment, rev()))
        .pipe(gulp.dest('public/css/font'));
});

gulp.task('js', () => {
    return combine(
        gulp.src('frontend/js/**/tmpl.js'),
        jshint(),
        jshint.reporter('default'),
        gulpIf(isDevelopment, sourcemaps.init()),
        // traceur(),
        uglify(),
        concat('tmpl.js'),
        gulpIf(isDevelopment, sourcemaps.write()),
        gulp.dest('public/js')
    ).on('error', notify.onError());
});

gulp.task('babel', () => {
    return combine(
        gulp.src('frontend/js6/**/*.js'),
        babel({
            presets: ['es2015']
        }),
        jshint(),
        jshint.reporter('default'),
        gulpIf(isDevelopment, sourcemaps.init()),
        traceur(),
        uglify(),
        concat('script.js'),
        gulpIf(isDevelopment, sourcemaps.write()),
        gulp.dest('public/js')
    ).on('error', notify.onError());
});



gulp.task('build', gulp.series('clean', gulp.parallel('css:assets', 'css:font', 'css', 'babel', 'js'), 'assets'));

gulp.task('watch', function() {
    gulp.watch('frontend/css/**/*.css', gulp.series('css'));
    gulp.watch('frontend/css/font/**/*.*', gulp.series('css:font'));
    gulp.watch('frontend/js/**/*.js', gulp.series('babel'));
    gulp.watch('frontend/js/**/*.*', gulp.series('js'));
    gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
    gulp.watch('frontend/css/img/*.{png,jpg,svg}', gulp.series('css:assets'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: 'public'
    });

    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});
var babelRegister = require("babel-register")({
    //// Optional ignore regex - if any filenames **do** match this regex then they
    //// aren't compiled.
    //ignore: /regex/,
    //
    //// Ignore can also be specified as a function.
    //ignore: function(filename) {
    //    if (filename === '/path/to/es6-file.js') {
    //        return false;
    //    } else {
    //        return true;
    //    }
    //},

    // Optional only regex - if any filenames **don't** match this regex then they
    // aren't compiled
    only: /my_es6_folder/,

    // Setting this will remove the currently hooked extensions of .es6, `.es`, `.jsx`
    // and .js so you'll have to add them back if you want them to be used again.
    extensions: [".es6", ".es", ".jsx", ".js"]
});

gulp.task('dev', gulp.series('build', gulp.parallel('serve', 'watch')));
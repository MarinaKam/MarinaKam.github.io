'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const streamCombiner = require('stream-combiner2');
const concat = require('gulp-concat');
const _if = require('gulp-if');
const cleanCSS = require('gulp-clean-css');
const cssmin = require('gulp-minify-css');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const rigger = require('gulp-rigger');
const newer = require('gulp-newer');
const del = require('del');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const notify = require('gulp-notify');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const browserSync = require('browser-sync');

const reload = browserSync.reload;
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
const combine = streamCombiner.obj;
const path = {
    src: 'src',
    dist: 'build'
};

const config = {
    server: {
        baseDir: path.dist
    },
    tunnel: true,
    host: 'localhost',
    port: 3000,
    logPrefix: "Frontend_MarieKam"
};

gulp.task('styles', function() {
    gulp.src(`${path.src}/**/main.scss`)
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'SCSS',
                message: err.message
            }))
        }))
        .pipe(_if(isDevelopment, sourcemaps.init()))
        .pipe(scss({
            sourceMap: true,
            errLogToConsole: true
        }))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(cssmin({keepBreaks: true}))
        .pipe(_if(!isDevelopment, cssnano()))
        .pipe(_if(!isDevelopment, cleanCSS()))
        .pipe(_if(isDevelopment, rev()))
        .pipe(concat('style.css'))
        .pipe(_if(isDevelopment, sourcemaps.write()))
        .pipe(plumber.stop())
        .pipe(gulp.dest(`${path.dist}/css/`))
        .pipe(_if(isDevelopment, rev.manifest('css.json')))
        .pipe(_if(isDevelopment, gulp.dest('manifest')))
        .pipe(reload({stream: true}));
});

gulp.task('clean', () => del([`${path.dist}/**/*.**`, 'manifest']));

gulp.task('htmls', () => {
    gulp.src(`${path.src}/**/*.html`)
        .pipe(plumber({
            errorHandler: notify.onError(err => ({
                title: 'HTML',
                message: err.message
            }))
        }))
        .pipe(_if(isDevelopment, revReplace({
            manifest: gulp.src('manifest/css.json', { allowEmpty: true})
        })))
        .pipe(rigger())
        .pipe(plumber.stop())
        .pipe(newer(`${path.dist}/`))
        .pipe(gulp.dest(`${path.dist}/`))
        .pipe(reload({stream: true}));
});

gulp.task('scripts', function() {
    combine(
        gulp.src(`${path.src}/js/*.js`),
        babel({
            presets: ['es2015']
        }),
        rigger(),
        _if(isDevelopment, sourcemaps.init()),
        uglify(),
        _if(isDevelopment, sourcemaps.write()),
        gulp.dest(`${path.dist}/js/`),
        reload({stream: true})
    ).on('error', notify.onError());
});

gulp.task('images', () => {
    gulp.src(`${path.src}/img/*.{png,jpg,svg}`)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(`${path.dist}/css/img/`))
        .pipe(_if(!isDevelopment, combine(rev.manifest('src.json'), gulp.dest('manifest'))))
        .pipe(reload({stream: true}));
});

gulp.task('fonts', () => {
    gulp.src(`${path.src}/fonts/*.*`)
        .pipe(gulp.dest(`${path.dist}/css/fonts/`));
});

gulp.task('libs', () => {
    gulp.src(`${path.src}/lib/*.*`)
        .pipe(gulp.dest(`${path.dist}/lib/`));
});


gulp.task('build', ['clean', 'htmls', 'styles', 'scripts', 'images', 'fonts', 'libs']);

gulp.task('watch', () => {
    gulp.watch(`${path.src}/**/*.scss`, ['styles']);
    gulp.watch(`${path.src}/**/*.html`, ['htmls']);
    gulp.watch(`${path.src}/**/*.js`, ['scripts']);
    gulp.watch(`${path.src}/img/*.{png,jpg,svg}`, ['images']);
    gulp.watch(`${path.src}/fonts/*.*`, ['fonts']);
    gulp.watch(`${path.src}/lib/*.*`, ['libs']);
});

gulp.task('server', function () {
    browserSync(config);
});


gulp.task('dev', ['build', 'serve', 'watch']);
gulp.task('default', ['build', 'server', 'watch']);

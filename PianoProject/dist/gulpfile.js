'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var streamCombiner = require('stream-combiner2');
var concat = require('gulp-concat');
var _if = require('gulp-if');
var cleanCSS = require('gulp-clean-css');
var cssmin = require('gulp-minify-css');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var rigger = require('gulp-rigger');
var newer = require('gulp-newer');
var del = require('del');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync');

var reload = browserSync.reload;
var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
var combine = streamCombiner.obj;
var path = {
    src: 'src',
    dist: 'build'
};

var config = {
    server: {
        baseDir: path.dist
    },
    tunnel: true,
    host: 'localhost',
    port: 3000,
    logPrefix: "Frontend_MarieKam"
};

gulp.task('styles', function () {
    gulp.src(path.src + '/**/main.scss').pipe(plumber({
        errorHandler: notify.onError(function (err) {
            return {
                title: 'SCSS',
                message: err.message
            };
        })
    })).pipe(_if(isDevelopment, sourcemaps.init())).pipe(scss({
        sourceMap: true,
        errLogToConsole: true
    })).pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })).pipe(cssmin({ keepBreaks: true })).pipe(_if(!isDevelopment, cssnano())).pipe(_if(!isDevelopment, cleanCSS())).pipe(_if(isDevelopment, rev())).pipe(concat('style.css')).pipe(_if(isDevelopment, sourcemaps.write())).pipe(plumber.stop()).pipe(gulp.dest(path.dist + '/css/')).pipe(_if(isDevelopment, rev.manifest('css.json'))).pipe(_if(isDevelopment, gulp.dest('manifest'))).pipe(reload({ stream: true }));
});

gulp.task('clean', function () {
    return del([path.dist + '/**/*.**', 'manifest']);
});

gulp.task('htmls', function () {
    gulp.src(path.src + '/**/*.html').pipe(plumber({
        errorHandler: notify.onError(function (err) {
            return {
                title: 'HTML',
                message: err.message
            };
        })
    })).pipe(_if(isDevelopment, revReplace({
        manifest: gulp.src('manifest/css.json', { allowEmpty: true })
    }))).pipe(rigger()).pipe(plumber.stop()).pipe(newer(path.dist + '/')).pipe(gulp.dest(path.dist + '/')).pipe(reload({ stream: true }));
});

gulp.task('scripts', function () {
    combine(gulp.src(path.src + '/js/*.js'), babel({
        presets: ['es2015']
    }), rigger(), _if(isDevelopment, sourcemaps.init()), uglify(), _if(isDevelopment, sourcemaps.write()), gulp.dest(path.dist + '/js/'), reload({ stream: true })).on('error', notify.onError());
});

gulp.task('images', function () {
    gulp.src(path.src + '/img/*.{png,jpg,svg}').pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()],
        interlaced: true
    })).pipe(gulp.dest(path.dist + '/css/img/')).pipe(_if(!isDevelopment, combine(rev.manifest('src.json'), gulp.dest('manifest')))).pipe(reload({ stream: true }));
});

gulp.task('fonts', function () {
    gulp.src(path.src + '/fonts/*.*').pipe(gulp.dest(path.dist + '/css/fonts/'));
});

gulp.task('libs', function () {
    gulp.src(path.src + '/lib/*.*').pipe(gulp.dest(path.dist + '/lib/'));
});

gulp.task('build', ['clean', 'htmls', 'styles', 'scripts', 'images', 'fonts', 'libs']);

gulp.task('watch', function () {
    gulp.watch(path.src + '/**/*.scss', ['styles']);
    gulp.watch(path.src + '/**/*.html', ['htmls']);
    gulp.watch(path.src + '/**/*.js', ['scripts']);
    gulp.watch(path.src + '/img/*.{png,jpg,svg}', ['images']);
    gulp.watch(path.src + '/fonts/*.*', ['fonts']);
    gulp.watch(path.src + '/lib/*.*', ['libs']);
});

gulp.task('server', function () {
    browserSync(config);
});

gulp.task('dev', ['build', 'serve', 'watch']);
gulp.task('default', ['build', 'server', 'watch']);
//# sourceMappingURL=gulpfile.js.map
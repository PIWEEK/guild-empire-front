import gulp from 'gulp';
import eslint from 'gulp-eslint';
import cached from 'gulp-cached';
import scsslint from 'gulp-scss-lint';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import webpackConfig from './webpack.config.js';
import gutil from 'gulp-util';

const paths = {
    dist: 'dist/',
    js: ['src/js/**/*.js'],
    scss: ['src/styles/**/*.scss']
};

gulp.task('js-lint', function () {
    return gulp.src(paths.js)
        .pipe(cached('jsLint'))
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('scss-lint', [], function() {
    const sasspath = paths.scss.concat('!src/styles/reset.scss');

    return gulp.src(sasspath)
        .pipe(cached('scssLint'))
        .pipe(scsslint());
});

gulp.task('server', function(callback) {
    let config = Object.create(webpackConfig);
    config.debug = true;
    config.devtool = 'eval-source-map';

    var compiler = webpack(config);

    new WebpackDevServer(compiler)
        .listen(8080, "localhost", function(err) {
            if(err) throw new gutil.PluginError("webpack-dev-server", err);
            gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/");
            callback();
        });
});

gulp.task('sass', [], function() {
    return gulp.src(paths.scss)
        .pipe(cached('sass'))
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function() {
    gulp.watch(paths.js, ['js-lint']);
    gulp.watch(paths.scss, ['scss-lint', 'sass']);
});

gulp.task('default', [
    'scss-lint',
    'sass',
    'js-lint',
    'watch'], function () {
});

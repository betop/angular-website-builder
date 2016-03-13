'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var del = require('del');
var runSequence = require('run-sequence');

var assets = require('./app/config/assets');

var env = '';


gulp.task('env:dev', function () {
  env = 'development';
});

gulp.task('env:staging', function () {
  env = 'staging';
});

gulp.task('env:prod', function () {
  env = 'production';
});


gulp.task('clean', function () {
  return del(['app/config/config.js', 'dist']);
});

gulp.task('env-config', function () {
  return gulp.src('app/config/env/' + env + '.js')
    .pipe(plugins.rename('config.js'))
    .pipe(gulp.dest('app/config/'));
});

//////////////////////////////////////////////////////////////////////////////////////////

gulp.task('csslint', function(done) {
  return gulp.src(assets.csslint)
    .pipe(plugins.csslint('.csslintrc'))
    .pipe(plugins.csslint.reporter())
    .pipe(plugins.csslint.reporter('fail'));
});

gulp.task('jshint', function () {
  return gulp.src(assets.jslint)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('eslint', function () {
  return gulp.src(assets.jslint)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failOnError());
});

gulp.task('lint', function (done) {
  runSequence('csslint', 'jshint', 'eslint', done);
});

gulp.task('watch', function () {
  gulp.watch(assets.csslint, ['csslint'])
    .on('change', function(event) {
      console.log('WATCH: File ' + event.path + ' was ' + event.type + ', running csslint ...');
    });
  gulp.watch(assets.jslint, ['jshint', 'eslint'])
    .on('change', function(event) {
      console.log('WATCH: File ' + event.path + ' was ' + event.type + ', running jshint and eslint ...');
    });
});

gulp.task('dev-webserver', function () {
  return gulp.src('app')
    .pipe(plugins.webserver({
      port: 8001,
      livereload: true
    }));
});

gulp.task('default', function (done) {
  runSequence('env:dev', 'clean', 'env-config', 'lint', 'dev-webserver', 'watch', done);
});

//////////////////////////////////////////////////////////////////////////////////////////

gulp.task('dist-code', function () {
  return gulp.src(assets.code, {base: 'app'})
    .pipe(gulp.dest('dist/'));
});

gulp.task('index.html', function () {
  return gulp.src('app/index.' + env + '.html')
    .pipe(plugins.rename('index.html'))
    .pipe(gulp.dest('dist/'));
})

gulp.task('assets-css', function () {
  return gulp.src(assets[env].css)
    .pipe(gulp.dest('dist/public/css/'));
});

gulp.task('assets-js', function () {
  return gulp.src(assets[env].js)
    .pipe(gulp.dest('dist/public/js/'));
});

gulp.task('staging-clean', function () {
  return del(['/home/ubuntu/app', ''], {force: true});
  // return del(['/CenterPool/temp'], {force: true});
});

gulp.task('staging-deploy', function () {
  return gulp.src('dist/**', {base: 'dist'})
    .pipe(gulp.dest('/home/ubuntu/app/'));
    // .pipe(gulp.dest('/CenterPool/temp/'));
});

gulp.task('staging', function (done) {
  runSequence('env:staging', 'clean', 'env-config', 'dist-code', ['index.html', 'assets-css', 'assets-js'], 'staging-clean', 'staging-deploy', done);
});

//////////////////////////////////////////////////////////////////////////////////////////

gulp.task('cssmin', function () {
  return gulp.src(assets[env].css)
    .pipe(plugins.cssmin())
    .pipe(gulp.dest('dist/public/css/'));
});

gulp.task('jsmin', function () {
  return gulp.src(assets[env].js)
    .pipe(plugins.ngAnnotate())
    .pipe(plugins.uglify({ mangle: false }))
    .pipe(gulp.dest('dist/public/js/'));
});

gulp.task('prod-clean', function () {
  // return del(['/home/ubuntu/app', ''], {force: true});
  return del(['/CenterPool/temp'], {force: true});
});

gulp.task('prod-deploy', function () {
  return gulp.src('dist/**', {base: 'dist'})
    // .pipe(gulp.dest('/home/ubuntu/app/'));
    .pipe(gulp.dest('/CenterPool/temp/'));
});

gulp.task('production', function (done) {
  runSequence('env:prod', 'clean', 'env-config', 'dist-code', ['index.html', 'cssmin', 'jsmin'], 'prod-clean', 'prod-deploy', done);
});

//////////////////////////////////////////////////////////////////////////////////////////

gulp.task('dist-webserver', function () {
  return gulp.src('dist')
    .pipe(plugins.webserver({
      port: 8001,
      livereload: true
    }));
});
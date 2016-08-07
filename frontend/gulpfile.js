'use strict';

var gulp = require('gulp');
var del = require('del');
var path = require('path');

var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var shell = require('gulp-shell');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var stripDebug = require('gulp-strip-debug');
var reload = browserSync.reload;
var inject = require('gulp-inject');

// canny styles
gulp.task('styles', ['sass', 'css']);
gulp.task('css', function(){
    gulp.src('src/styles/**/*.css')
    .pipe(gulp.dest('dist/styles'));
});
gulp.task('sass', function() {
    return $.rubySass('src/styles', {
            style: 'expanded',
            precision: 10
        })
        .pipe(gulp.dest('dist/styles'))
        .pipe($.size());
});

// canny scripts
gulp.task('scripts', function() {
    gulp.src(['src/scripts/**/*'])
    .pipe(gulp.dest('dist/scripts'));
});

// canny other assets
gulp.task('assets', function() {
    gulp.src(['src/fonts/**/*','src/images/**/*'], {base: 'src'})
    .pipe(gulp.dest('dist/'));
});

// canny's single view
gulp.task('views', function() {
    gulp.src('index.blade.php')
    .pipe(gulp.dest('dist/'));
});

// canny scripts
gulp.task('all', ['styles', 'scripts', 'assets', 'views']);

// canny watch
gulp.task('watch', ['all'], function() {
    browserSync({
        proxy: "http://canny.api.dev/",
        notify: false,
        logPrefix: 'BS',
    });
    gulp.watch(['src/**/*'], ['all', reload]);
});

// canny clean
gulp.task('clean', function(cb) {
    del.sync(['dist']);
});

// ////////////////////////////////
// //          NEW SLIM          //
// ////////////////////////////////

// gulp.task('only-styles', ['styles']);
// gulp.task('only-views', function() {
//     return gulp.src('app/views/**/*')
//         .pipe(gulp.dest('dist/views/'))
//         .pipe($.size());
// });
// gulp.task('simply-fast', function() {
//     return gulp.src('app/simply/**/*')
//         .pipe(gulp.dest('dist/simply/'))
//         .pipe($.size());
// });
// gulp.task('admin-fast', function() {
//     return gulp.src('app/admin/**/*')
//         .pipe(gulp.dest('dist/admin/'))
//         .pipe($.size());
// });

// //////////////////////////////
// //          STYLES          //
// //////////////////////////////
// gulp.task('styles', ['sass', 'css']);
// gulp.task('css', function(){
//     gulp.src(['./app/assets/styles/**/*.css'], { base: './app/assets/styles' })
//     .pipe(gulp.dest('dist/assets/styles'));
// });
// gulp.task('sass', function() {
//     return $.rubySass('./app/assets/styles', {
//             style: 'expanded',
//             precision: 10
//         })
//         .pipe(gulp.dest('dist/assets/styles'))
//         .pipe($.size());
// });

// ///////////////////////////////////////
// //          INJECT NG FILES          //
// ///////////////////////////////////////
// gulp.task('simply-inject', function () {
//     var target = gulp.src('app/views/layouts/simply-scripts.blade.php');
//     var sources = gulp.src([
//         'dist/simply/**/*.module.js',
//         'dist/shared/**/*.module.js',
//         'dist/simply/**/*.js',
//         'dist/shared/**/*.js'], {read: false});

//     del.sync(['dist/views/layouts/simply-scripts.blade.php']);
//     return target.pipe(inject(sources, {name:'injectsimply'}))
//         .pipe(gulp.dest('dist/views/layouts'));
// });
// gulp.task('property-inject', function () {
//     var target = gulp.src('app/views/layouts/property-owner-scripts.blade.php');
//     var sources = gulp.src([
//         'dist/property-owner/**/*.module.js',
//         'dist/shared/**/*.module.js',
//         'dist/property-owner/**/*.js',
//         'dist/shared/**/*.js'], {read: false});

//     del.sync(['dist/views/layouts/property-owner-scripts.blade.php']);
//     return target.pipe(inject(sources, {name:'injectpropertyowner'}))
//         .pipe(gulp.dest('dist/views/layouts'));
// });
// gulp.task('admin-inject', function () {
//     var target = gulp.src('app/views/layouts/admin-scripts.blade.php');
//     var sources = gulp.src([
//         'dist/admin/**/*.module.js',
//         'dist/shared/**/*.module.js',
//         'dist/admin/**/*.js',
//         'dist/shared/**/*.js'], {read: false});
    
//     del.sync(['dist/views/layouts/admin-scripts.blade.php']);
//     return target.pipe(inject(sources, {name:'injectadmin'}))
//         .pipe(gulp.dest('dist/views/layouts'));
// });

// /////////////////////////////////////
// //          STATIC ASSETS          //
// /////////////////////////////////////
// gulp.task('assets', function() {
//     return gulp.src('app/assets/**/*')
//         .pipe(gulp.dest('dist/assets'))
//         .pipe($.size());
// });

// /////////////////////////////
// //          SHELLS         //
// /////////////////////////////
// gulp.task('shell-super-build', shell.task([
//   'cd super && gulp super-build',
// ]));

// gulp.task('shell-super-serve', shell.task([
//   'cd super && gulp super-serve',
// ]));

// //////////////////////////////
// //          BUILDS          //
// //////////////////////////////
// gulp.task('build-user', ['clean', 'slim-dep']);
// gulp.task('build-super', ['clean', 'shell-super-build']);
// gulp.task('build-all', ['build-user', 'build-super']);

// gulp.task('build-prod-user', shell.task([
//   'gulp clean && gulp build-user && gulp remove-debug',
// ]));
// gulp.task('build-prod-super', shell.task([
//   'gulp clean && gulp build-super && gulp remove-debug',
// ]));
// gulp.task('build-prod-all', ['build-prod-user', 'build-prod-super']);

// gulp.task('remove-debug', function () {
//     return gulp.src(['app/**/*.js', '!app/assets/scripts/**/*', '!app/assets/static/**/*', '!app/views/**/*'])
//         .pipe(stripDebug())
//         .pipe(gulp.dest('dist'))
//         .pipe($.size());;
// });
// gulp.task('assets-views', function() {
//     return gulp.src(['app/assets/**/*','app/views/**/*'], { base: './app' })
//         .pipe(gulp.dest('dist/'))
//         .pipe($.size());
// });

// /////////////////////
// //      WATCH      //
// /////////////////////
// gulp.task('watch-fast', ['slim-dep'], function() {
//     browserSync({
//         proxy: "http://simply.api.dev/",
//         notify: false,
//         logPrefix: 'BS',
//     });
//     gulp.watch(['app/simply/**/*',
//                 'app/admin/**/*',
//                 'app/shared/**/*',
//                 'app/property-owner/**/*',
//                 'app/assets/styles/**/*',
//                 'app/views/**/*'], ['slim-dep-fast', reload]);
// });
// gulp.task('watch', ['watch-fast']);
// gulp.task('clean', function(cb) {
//     del.sync(['dist/']);
// });

// ///////////////////////////////
// //          DEFAULT          //
// ///////////////////////////////
// // Default task
// gulp.task('default', ['clean','watch']);

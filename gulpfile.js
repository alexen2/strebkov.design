'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const minify = require('gulp-minify');
const	del = require('del');
const	browserSync = require('browser-sync').create();
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const flatten = require('gulp-flatten');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const path2 = require('path');
const reload = browserSync.reload;
const gulpStylelint = require('gulp-stylelint');

var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/images/',
    fonts: 'build/fonts/'
  },
  src: {
    style: 'src/sass/style.scss',
    pug: 'src/pages/*.pug',
    img: 'src/blocks/**/*.{png,jpg,jpeg,svg,gif}',
    js: 'src/blocks/**/*.js',
    resources_img: 'src/resources/images/*.{png,jpg,jpeg,svg,gif}',
    resources_js: 'src/resources/js/*.js',
    svg: 'src/resources/icons/*.svg'
  },
  watch: {
    style: 'src/**/*.scss',
    pug: 'src/**/*.pug',
    img: 'src/blocks/**/*.{png,jpg,jpeg,svg,gif}',
    svg: 'src/resources/icons/*.svg',
    js: 'src/blocks/**/*.js'
  },
  clean: './build'
};

var plumberCfg = {
  errorHandler: notify.onError(function(err) {
    return {
      message: err.message 
    }
  })
};

gulp.task('sass', function(){
	return gulp.src(path.src.style)
    .pipe(plumber(plumberCfg))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))	     
    .pipe(gulp.dest(path.build.css))  
		.pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest(path.build.css))
});

gulp.task('lintcss', function(){
  return gulp
    .src(['src/sass/*.scss', 'src/blocks/**/*.scss'])
    .pipe(gulpStylelint({
      reporters: [
        {
          formatter: 'string', 
          console: true
        }
      ]
    }));
});

gulp.task('pug', function(){
  return gulp.src(path.src.pug)
    .pipe(plumber(plumberCfg))
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(path.build.html));
});

gulp.task('svg', function () {
return gulp
  .src(path.src.svg)
   .pipe(svgmin({
            plugins: [ {removeViewBox: false} ]
        }))
  /*.pipe(svgmin(function (file) {
    var prefix = path2.basename(file.relative, path2.extname(file.relative));
    
    return {
      plugins: [{
        cleanupIDs: {
          prefix: prefix + '-',
          minify: true,
          removeViewBox: false
        }
      }]
    }
  }))*/
  .pipe(svgstore())
  .pipe(gulp.dest(path.build.img));
});

gulp.task('images', function(){
  return gulp.src(path.src.img)
    .pipe(flatten())
    //.pipe(imagemin())
    .pipe(gulp.dest(path.build.img))
});

gulp.task('js', function(){
  return gulp.src(path.src.js)
  .pipe(plumber(plumberCfg))
  .pipe(concat('script.js'))
  .pipe(minify())
  .pipe(gulp.dest(path.build.js))
  .pipe(reload({stream: true}));
});

gulp.task('resources_images', function(){
  return gulp.src(path.src.resources_img)
    .pipe(flatten())
    //.pipe(imagemin())
    .pipe(gulp.dest(path.build.img))
});

gulp.task('resources_js', function(){
  return gulp.src(path.src.resources_js)
    .pipe(gulp.dest(path.build.js))
});

gulp.task('clean', function(){
	return del('build/**/*');
});

gulp.task('watch', function(){
  gulp.watch(path.watch.style, gulp.series('sass'));
  gulp.watch(path.watch.pug, gulp.series('pug'));
  gulp.watch(path.watch.img, gulp.series('images'));
  gulp.watch(path.watch.js, gulp.series('js'));
  gulp.watch(path.watch.svg, gulp.series('svg'));
});

gulp.task('server', function(){
	browserSync.init({
		server: path.build.html
	});

	browserSync.watch(path.build.html+'/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
	'clean',
  'sass',
	'pug',
  'images',
  'svg',
  'js',
  'resources_images',
  'resources_js',
	gulp.parallel(
		'watch',
		'server'    
	)	
));
gulp.task('build', gulp.series(
  'clean',
  'lintcss',
  'sass',
  'pug',
  'images',
  'svg',
  'js',
  'resources_images',
  'resources_js'
));
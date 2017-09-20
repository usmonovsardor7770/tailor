// Gulp Packages
const
   gulp                 = require('gulp'),
   sass                 = require('gulp-sass'),
   rename               = require('gulp-rename'),
   concat               = require('gulp-concat'),
   uglify               = require('gulp-uglify'),
   minify               = require('gulp-minify-css'),
   prefix               = require('gulp-autoprefixer'),
   browserSync          = require('browser-sync').create();


// HTML
gulp.task('html', function(){
  return  gulp.src('*.html')
      .pipe(gulp.dest(''))
      .pipe(browserSync.reload({
         stream: true
      }));
})


// Compile SASS
gulp.task('sass', function() {
  return gulp.src('source/scss/styles.scss') // Gets all files ending with .scss in app/scss and children dirs
   .pipe(sass().on('error', sass.logError))
   .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
   .pipe(minify())
   .pipe(concat('styles.css'))
   .pipe(rename({
            suffix: '.min'
        }))
   .pipe(gulp.dest('public/stylesheet'))
   .pipe(browserSync.reload({
      stream: true
   }));
});


// Compile JS
gulp.task('js', function(){
   gulp.src('source/javascript/*.js')
   .pipe(concat('build.js'))
   .pipe(uglify())
   .pipe(gulp.dest('public/javascript'));
});


// Browser Sync
gulp.task('browserSync', function() {
    browserSync.init(["source/scss/*.scss", "source/javascript/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});


// WATCH
gulp.task('watch', ['browserSync', 'sass', 'js'], () =>{
  gulp.watch('source/scss/**/*.scss', ['sass']);
  gulp.watch('source/javascript/*.js', ['js']);
  gulp.watch('*.html', ['html']);
});


// Default
gulp.task('default', ['js','sass']);

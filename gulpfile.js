var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var merge = require('merge-stream');

gulp.task('sass', function() {
  var vendorFiles = [
    './node_modules/react-select/dist/react-select.min.css',
  ];

  var vendor = gulp.src(vendorFiles)
    .pipe(concat('vendor.css'))

  var custom = gulp.src('src/sass/**/*.sass')
    .pipe(sass())

  var mergedStream = merge(vendor, custom)
    .pipe(concat('GFLP.css'))
    .pipe(gulp.dest('dist'));

  return mergedStream;
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.sass', ['sass']);
  gulp.watch('src/index.html', ['html']);
});

gulp.task('default', ['sass', 'html', 'watch']);

import gulp from 'gulp';
import config from '../config';
import gulpLoadPlugins from 'gulp-load-plugins';
import runSequence from 'run-sequence';

const $ = gulpLoadPlugins();

gulp.task('build-start', (cb) => {
  process.env.build = 'true';
  cb();
});

gulp.task('build-finish', () => {
  return gulp.src(config.dest.glob())
    .pipe($.size({title: 'build', gzip: true}));
});

gulp.task('build', (cb)=> {
  runSequence(
    'build-start',
    'clean',
    ['lint', 'html', 'images', 'fonts', 'extras'],
    'build-finish',
    cb
  );
  // runSequence(
  //   'build-start',
  //   'clean',
  //   ['lint', 'wiredep', 'html', 'images', 'fonts', 'extras'],
  //   'build-finish',
  //   cb
  // );
});

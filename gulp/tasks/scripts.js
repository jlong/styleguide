import gulp from 'gulp';
import config from '../config';
import browserSync from 'browser-sync';
import reload from '../util/reload';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('scripts', () => {
  var building = process.env.build === 'true';

  return gulp.src(config.src.glob('scripts'))
    .pipe(gulp.dest(config.tmp.path('scripts')))
    .pipe($.if(building, gulp.dest(config.dest.path('scripts'))))

    .pipe(reload());
});

import gulp from 'gulp';
import config from '../config';
import mainBowerFiles from 'main-bower-files';
import reload from '../util/reload';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('fonts', () => {
  var building = process.env.build === 'true';

  return gulp.src(mainBowerFiles({ filter: config.fonts.glob }).concat(config.src.glob('fonts')))
    .pipe(gulp.dest(config.tmp.path('fonts')))

    .pipe($.if(building, gulp.dest(config.dest.path('fonts'))))

    .pipe(reload());
});


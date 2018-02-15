import gulp from 'gulp';
import config from '../config';
import reload from '../util/reload';
import {stream as wiredep} from 'wiredep';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

// Inject bower components into source files
gulp.task('wiredep', () => {
  var building = process.env.build === 'true';

  gulp.src(config.src.glob('styles'))
    .pipe(wiredep({ ignorePath: /^(\.\.\/)+/ }))

    .pipe(gulp.dest(config.src.path('styles')))
    .pipe($.if(building, gulp.dest(config.dest.path('styles'))))

    .pipe(reload());

  gulp.src(config.src.glob('html'))
    .pipe(wiredep({ ignorePath: /^(\.\.\/)*\.\./ }))

    .pipe(gulp.dest(config.src.path('html')))
    .pipe($.if(building, gulp.dest(config.dest.path('html'))))

    .pipe(reload());
});

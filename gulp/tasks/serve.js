import gulp from 'gulp';
import config from '../config';
import browserSync from 'browser-sync';
import reload from '../util/reload';

// gulp.task('serve', ['wiredep', 'html', 'images', 'fonts', 'extras'], () => {
gulp.task('serve', ['html', 'images', 'fonts', 'extras'], () => {
  process.env.server = 'true';

  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: config.tmp.path(),
      routes: config.bower.routes
    }
  });

  gulp.watch(config.src.glob('html'), ['html']);
  gulp.watch(config.src.glob('markdown'), ['html']);
  gulp.watch(config.src.glob('layouts'), ['html']);
  gulp.watch(config.src.glob('images'), ['images', 'html']);
  gulp.watch(config.src.glob('styles', 'all'), ['styles']);
  gulp.watch(config.src.glob('scripts'), ['scripts']);
  gulp.watch(config.src.glob('fonts'), ['fonts']);
  gulp.watch(config.src.glob('extras'), ['extras']);
  // gulp.watch(config.bower.file, ['wiredep', 'styles', 'html']);
  gulp.watch(config.bower.file, ['styles', 'html']);
});

gulp.task('serve:build', ['build'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: config.dest.path()
    }
  });
});

gulp.task('serve:test', () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: config.src.path('test'),
      routes: config.bower.routes
    }
  });

  gulp.watch(config.src.glob('specs')).on('change', reload);
  gulp.watch(config.src.glob('specs'), ['lint:test']);
});

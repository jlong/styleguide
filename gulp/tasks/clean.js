import gulp from 'gulp';
import config from '../config';
import del from 'del';

gulp.task('clean', del.bind(null, [config.tmp.path(), config.dest.path()]));

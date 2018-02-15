import gulp from 'gulp';
import gutil from 'gulp-util';
import fs from 'fs';
import path from 'path';
import frontmatter from 'front-matter';
// import pdc from 'pdc';
import MarkdownIt from 'markdown-it';
import config from '../config';
import reload from '../util/reload';
import CodePreview from '../plugins/gulp-code-preview';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();


gulp.task('markdown', ['layouts'], () => {
  const markdown = new MarkdownIt();
  var building = process.env.build === 'true';
  var meta = { title: 'Style Guide' };
  var previews = new CodePreview({
    projects: [
      {
        name: 'admin',
        ngApp: 'admin',
        styles: [ '//assets1.uvcdn.com/pkg/admin-657d6b0cf54090a34e4a7957a3322db4.css' ],
        scripts: [ '//assets1.uvcdn.com/pkg/shamrock-c828b072e385712ec7a906781cf6cc57.js' ],
        beforeScripts: '<script>UV={};UV.AngularBootstrap={};UV.angularLocale={"locale":"en","strings":{}}</script>'
      }
    ]
  });

  return gulp.src(config.src.glob('markdown'))
    .pipe(previews.extract())

    // .on('data', function(f) { console.log(String(f.contents)) })

    // // With PDC
    // .pipe($.data(function(file, cb) {
    //   var content = frontmatter(String(file.contents));
    //   var filename = path.join(config.tmp.path('layouts'), (content.layout || 'main') + '.hb');
    //   var layout = fs.readFileSync(filename);
    //   pdc(content.body, 'markdown-implicit_figures', 'html', ['+smart'], function(err, result) {
    //     if (err) { cb(err); }
    //     content.attributes['contents'] = result;
    //     file.contents = new Buffer(layout);
    //     cb(undefined, content.attributes);
    //   });
    // }))

    .pipe($.data(function(file) {
      var content = frontmatter(String(file.contents));
      var filename = path.join(config.tmp.path('layouts'), (content.layout || 'main') + '.hb');
      var layout = fs.readFileSync(filename);
      var result = markdown.render(content.body)
      content.attributes['contents'] = result;
      file.contents = new Buffer(layout);
      return content.attributes;
    }))

    .pipe($.compileHandlebars(meta, config.handlebars.options))
    .pipe($.extReplace('.html'))

    .pipe(previews.write())

    .pipe(gulp.dest(config.tmp.path('markdown')))
    .pipe($.if(building, gulp.dest(config.dest.path('markdown'))))

    .on('finish', () => {
      previews.files()
        .pipe(gulp.dest(config.tmp.path('markdown')))
        .pipe($.if(building, gulp.dest(config.dest.path('markdown'))))
      ;
    })

    .pipe(reload())
  ;
});

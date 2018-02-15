import _ from 'lodash';
import path from 'path';

var src = 'src';
var dest = 'build';
var tmp = '.tmp';
var bowerComponents = 'bower_components';

var config = {
  bower: {
    file: 'bower.json',
    src: bowerComponents,
    routes: {
      '/bower_components': bowerComponents
    }
  },

  html: {
    root: '',
    glob: ['**/*.html']
  },

  handlebars: {
    options: {} // Options added below
  },

  layouts: {
    root: 'layouts',
    glob: '**/*.hb'
  },

  partials: {
    root: 'partials',
    glob: '**/*.hb'
  },
  
  markdown: {
    root: '',
    glob: '*.md'
  },

  scripts: {
    root: 'scripts',
    glob: '**/*.js'
  },

  styles: {
    root: 'styles',
    glob: {
      'default': ['**/*.scss', '**/*.[^_]scss'],
      'all': '**/*.scss'
    }
  },

  images: {
    root: 'images',
    glob: '**/*.{svg,png}'
  },

  fonts: {
    root: 'fonts',
    glob: '**/*.{eot,svg,ttf,woff,woff2}'
  },

  extras: {
    root: '',
    glob: ['*.*', '!*.html']
  },
  
  test: {
    src: 'test'
  },

  specs: {
    root: 'test/spec',
    glob: '*.spec.js'
  }
};

var joinPath = path.join;

function prependPathToGlob(glob, path, set) {
  var globs = [];
  if (glob.constructor === Object) {
    return prependPathToGlob(glob[set || 'default'], path);
  } else if (glob.constructor === Array) {
    glob.forEach(function(g) {
      if (_.startsWith(g, '!')) {
        globs.push('!' + joinPath(path, g.replace('!', '')));
      } else {
        globs.push(joinPath(path, g));
      }
    });
    return globs;
  } else {
    return joinPath(path, glob);
  }
}

config.src = {
  glob: function(type, set) {
    if (type) {
      var c = config[type];
      return prependPathToGlob(c.glob, config.src.path(type), set);
    } else {
      return prependPathToGlob('**/*', config.src.path());
    }
  },

  path: function(type) {
    if (type) {
      var c = config[type];
      if (c.src) {
        return c.src;
      } else {
        return joinPath(src, c.root);
      }
    } else {
      return src;
    }
  }
};

config.tmp = {
  path: function(type) {
    if (type) {
      var c = config[type];
      return joinPath(tmp, c.root);
    } else {
      return tmp;
    }
  }
};

config.dest = {
  glob: function(type, set) {
    if (type) {
      var c = config[type];
      return prependPathToGlob(c.glob, config.dest.path(type), set);
    } else {
      return prependPathToGlob('**/*', config.dest.path());
    }
  },

  path: function(type) {
    if (type) {
      var c = config[type];
      return joinPath(dest, c.root);
    } else {
      return dest;
    }
  }
};

// Not using partials right now
// config.handlebars.options.batch = config.src.path('partials');

export default config;

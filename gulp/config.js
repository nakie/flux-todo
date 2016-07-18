var dest = './build';
var src  = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: [dest, src]
    },
    files: [
      dest + '/**',
      '!' + dest + '/**.map'
    ]
  },
  less: {
    src: src + '/less/style.less',
    watch: src + '/less/**',
    dest: dest
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  },
  markup: {
    src: src + '/html/*.html',
    watch: src + '/html/**',
    dest: dest,
    swig_options: {
      defaults: {
        cache: false
      },
      json_path: src + '/data'
    }
  },
  browserify: {
    debug: true,
    extensions: ['.jsx'],
    bundleConfigs: [{
      entries: src + '/js/app.js',
      dest: dest + '/',
      outputName: 'app.js'
    }]
  }
};

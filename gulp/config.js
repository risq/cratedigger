var dest = 'www';
var src = 'src';
var maps = 'maps';

module.exports = {
  clean: {
    src: [
      dest,
      maps,
    ],
  },
  production: {
    src: [
      dest + '/**/*.+(js|css).map',
    ],
    dest: maps,
  },
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: dest,
    },
    watchOptions: {
      ignoreInitial: true,
    },
  },
  lint: {
    js: {
      src: [
        src + '/*.js',
      ],
      dest: src,
    },
  },
  less: {
    autoprefixer: {
      browsers: [
        'last 2 version',
      ],
    },
    watch: [
      src + '/**/*.less',
    ],
    src: [
      src + '/index.less',
    ],
    dest: dest,
  },
  images: {
    src: [
      src + '/images/**/*',
    ],
    dest: dest + '/images',
  },
  markup: {
    src: [
      src + '/htdocs/**/*',
    ],
    dest: dest,
  },
  browserify: {
    // List here all external libs
    libs: [
      'debug',
      'three.js',
      'source-map-support/register',
    ],

    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      debug: true,
      paths: src,
      entries: src + '/index.js',
      dest: dest,
      outputName: 'index.js',
    },],

    // separate bundle for external libs
    pluginsBundleConfig: {
      debug: true,
      paths: src,
      entries: [],
      dest: './vendor/js',
      outputName: 'libs.js',
    },

    // Ignore this lib in the external libs bundle in prod
    ignoreInProd: [
      'source-map-support/register',
    ],
  },
  vendorJs: {
    src: ['./vendor/js/*js'],
    dest: dest,
    outputName: 'vendor.js',
  },
  vendorCss: {
    src: ['./vendor/css/*css'],
    dest: dest,
    outputName: 'vendor.css',
  },
};

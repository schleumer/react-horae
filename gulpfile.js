var gulp = require('gulp')
  , browserify = require('browserify')
  , watchify = require('watchify')
  , babelify = require('babelify')
  , source = require('vinyl-source-stream')
  , plumber = require('gulp-plumber');

var babelConfig = {
  "plugins": [
    "transform-class-properties"
  ],
  "presets": [
    "es2015",
    "stage-0",
    "react",
    "es2015-loose"
  ]
};

var external = ['react', 'redux', 'moment', 'memoizee', 'react-dom'];

// OH YEAH, THERES A LOT OF THINGS WRONG HERE TOO
var dontFailPlease = function (error) {
  console.log(error.toString());
};

var vendorBundle = browserify(Object.assign({}, watchify.args, {
  entries: [],
  paths: ['./resources/assets/js/'],
  debug: false
}));

external.forEach(function (lib) {
  vendorBundle.require(lib);
});

gulp.task('dev-vendor', function () {
  return vendorBundle.bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('./demo'));
});


// TODO: WHAT THE FREAKING FREAK
gulp.task('dev-lib', function () {
  var appBundleArgs = Object.assign({}, watchify.args, {
    entries: ['./src/dev.js'],
    paths: ['./src/'],
    debug: false,
    extensions: ['.js'],
    poll: true
  });

  var appBundle = watchify(browserify(appBundleArgs))
    .transform(babelify.configure(babelConfig));

  external.forEach(function (lib) {
    appBundle.external(lib);
  });

  function bundle() {
    return appBundle
      .bundle()
      // pumbler don't seems to works here
      .on('error', dontFailPlease)
      .pipe(source('index.js'))
      .pipe(gulp.dest('./demo'));
  }

  appBundle.on('update', function () {
    var updateStart = Date.now();

    console.log("watchify updated, recompiling");
    bundle()
      .on('end', function () {
        console.log('Complete!', (Date.now() - updateStart) + 'ms');
      });
  });

  return bundle();
});

gulp.task('default', []);

gulp.task('dev', ['dev-lib', 'dev-vendor']);
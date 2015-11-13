// Karma configuration
// Generated on Thu Jul 10 2014 21:27:52 GMT+0800 (CST)

module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
      {
        pattern: 'src/bower_components/angular/angular.js',
        included: false
      },
      {
        pattern: 'src/bower_components/lodash/dist/lodash.js',
        included: false
      },
      {
        pattern: 'src/bower_components/jquery/dist/jquery.js',
        included: false
      },
      {
        pattern: 'src/bower_components/bootstrap/dist/js/bootstrap.js',
        included: false
      },
      {
        pattern: 'src/bower_components/angular-mocks/angular-mocks.js',
        included: false
      },
      {
        pattern: 'src/bower_components/angular-animate/angular-animate.js',
        included: false
      },
      {
        pattern: 'src/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
        included: false
      },
      {
        pattern: 'src/bower_components/angular-resource/angular-resource.js',
        included: false
      },
      {
        pattern: 'src/bower_components/angular-cookies/angular-cookies.js',
        included: false
      },
      {
        pattern: 'src/bower_components/angular-sanitize/angular-sanitize.js',
        included: false
      },
      {
        pattern: 'src/bower_components/angular-route/angular-route.js',
        included: false
      },
      {
        pattern: 'src/bower_components/checklist-model/checklist-model.js',
        included: false
      },
      {
        pattern: 'src/vendor/slick/slick.js',
        included: false
      },
      {
        pattern: 'src/*.js',
        included: false
      },
      {
        pattern: 'src/app/**/*.js',
        included: false
      },
      {
        pattern: 'test/spec/**/*.js',
        included: false
      },
      // http://karma-runner.github.io/0.10/plus/requirejs.html
      'test/test-main.js'
    ],

    // list of files / patterns to exclude
    exclude: [
      'src/app/components/require.config.js'
    ],

    // Coverage: refer to http://karma-runner.github.io/0.8/config/coverage.html
    preprocessors: {
      '**/src/app/**/*.js': 'coverage'
    },

    reporter: ['progress', 'coverage'],

    coverageReporter: {
      type: 'html',
      dir: 'docs/coverage/'
    },

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
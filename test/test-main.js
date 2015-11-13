var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // add "spec" naming from files
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}
console.dir(window.__karma__.files)
require.config({
  // Karma serves files from '/base'
  baseUrl: '/base/src/app',

  paths: {
    config: '../config',
    settings: './components/settings',
    i18n: './components/i18n',
    moment: './components/moment',
    angular: '../bower_components/angular/angular',
    lodash: '../bower_components/lodash/dist/lodash',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    jquery: '../bower_components/jquery/dist/jquery',
    slick: '../vendor/slick/slick',
    'jquery.bbq': './components/jquery.bbq',
    'jquery.migrate': './components/jquery.migrate',
    'angular-animate': '../bower_components/angular-animate/angular-animate',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'checklist-model': '../bower_components/checklist-model/checklist-model'
  },
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    bootstrap: {
      deps: ['jquery']
    },
    jquery: {
      exports: 'jQuery'
    },
    // dependency declaration
    'jquery.migrate': ['jquery'],
    'jquery.bbq': ['jquery', 'jquery.migrate'],
    'angular-animate': ['angular'],
    'angular-cookies': ['angular'],
    'angular-resource': ['angular'],
    'angular-route': ['angular'],
    'angular-sanitize': ['angular'],
    'angular-bootstrap': ['angular'],
    'angular-mocks': ['angular'],
    'slick': ['jquery'],
    'checklist-model': ['angular']
  },
  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
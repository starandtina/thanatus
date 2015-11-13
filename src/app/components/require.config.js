/**
 * Bootstrap require with the needed config, then load the app.js module.
 */

(function () {
  // We should append locale to this(window or global), as require.config is exectued in the global scope.
  // Refer to https://github.com/jrburke/r.js/blob/master/dist/r.js#L23187 
  this.locale = this.localStorage ? this.localStorage.getItem('locale') : '' ||
    typeof this.navigator === 'undefined' ? 'en-us' : (this.navigator.language || this.navigator.userLanguage || 'en-us').toLowerCase();

  require.config({
    //enforceDefine: true,
    waitSeconds: 75,
    baseUrl: '/app',
    // urlArgs: 'r=@REV@',
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
      'slick': ['jquery'],
      'checklist-model': ['angular']
    },
    config: {
      i18n: {
        locale: this.locale /// 'zh-cn' or 'en-us'
      }
    },
    callback: function () {
      'use strict';

      require(['app']); // bootup
    },
  });
}.call(this));
/**
 * main app module
 */
define([
  'angular',
  'jquery',
  'lodash',
  'require',
  'moment',
  'config',
  'bootstrap',
  'jquery.bbq',
  'slick',
  'jquery.migrate',
  'components/browser.banner',
  'components/tmpst',
  'angular-animate',
  'angular-cookies',
  'angular-resource',
  'angular-route',
  'angular-sanitize',
  'angular-bootstrap',
  'checklist-model'
], function (angular, $, _, appLevelRequire) {
  'use strict';

  var app = angular.module('vm.vchs.dbaas', []),
    // we will keep a reference to each module defined before boot, so that we can
    // go back and allow it to define new features later. Once we boot, this will be false
    pre_boot_modules = [],
    // these are the functions that we need to call to register different
    // features if we define them after boot time
    register_fns = {};

  // This stores the DBaaS revision number, @REV@ is replaced by grunt.
  app.constant('ACTIVEVersion', '@REV@');

  // Use this for cache busting partials
  app.constant('cacheBust', 'cache-bust=' + Date.now());

  /**
   * Tells the application to watch the module, once bootstraping has completed
   * the modules controller, service, etc. functions will be overwritten to register directly
   * with this application.
   * @param  {[type]} module [description]
   * @return {[type]}        [description]
   */
  app.useModule = function (module) {
    if (pre_boot_modules) {
      pre_boot_modules.push(module);
    } else {
      _.extend(module, register_fns);
    }
    return module;
  };

  app.safeApply = function ($scope, fn) {
    switch ($scope.$$phase) {
    case '$apply':
      // $digest hasn't started, we should be good
      $scope.$eval(fn);
      break;
    case '$digest':
      // waiting to $apply the changes
      setTimeout(function () {
        app.safeApply($scope, fn);
      }, 10);
      break;
    default:
      // clear to begin an $apply $$phase
      $scope.$apply(fn);
      break;
    }
  };

  app.config(function ($locationProvider, $routeProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    // this is how the internet told me to dynamically add modules :/
    register_fns.controller = $controllerProvider.register;
    register_fns.directive = $compileProvider.directive;
    register_fns.factory = $provide.factory;
    register_fns.service = $provide.service;
    register_fns.filter = $filterProvider.register;
  });

  var apps_deps = [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap',
    'checklist-model',
    'vm.vchs.dbaas'
  ];

  _.each('controllers directives factories services modules filters tpls'.split(' '), function (type) {
    var module_name = 'vm.vchs.dbaas.' + type;
    // create the module
    app.useModule(angular.module(module_name, []));
    // push it into the apps dependencies
    apps_deps.push(module_name);
  });

  // load the core components
  require([
    'controllers/all',
    'factories/all',
    'directives/all',
    'services/all',
    'descriptors/all',
    'tpls/all'
  ], function () {

    // bootstrap the app
    angular
      .element(document)
      .ready(function () {
        $('html').attr('ng-controller', 'DashCtrl');
        angular.bootstrap(document, apps_deps)
          .invoke(['$rootScope',
            function ($rootScope) {
              _.each(pre_boot_modules, function (module) {
                _.extend(module, register_fns);
              });
              pre_boot_modules = false;

              $rootScope.requireContext = appLevelRequire;
              $rootScope.require = function (deps, fn) {
                var $scope = this;
                $scope.requireContext(deps, function () {
                  var deps = _.toArray(arguments);
                  // Check that this is a valid scope.
                  if ($scope.$id) {
                    $scope.$apply(function () {
                      fn.apply($scope, deps);
                    });
                  }
                });
              };
            }
          ]);
      });
  });

  return app;
});

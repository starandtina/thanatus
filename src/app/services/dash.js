define([
  'angular',
  'require',
  'app',
  'jquery',
  'lodash',
  'config'
], function (angular, require, app, $, _, config) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.services')
    .service('DashService', function ($routeParams, $http, $rootScope, $location) {
      var self = this;

      $rootScope.$watch(function () {
        return $location.path();
      }, function (path) {
        route(path);
      });

      var route = function (path) {
        if (path === '' || path === '/') {
          $location.path(config.default_route);
        } else {
          path = path.substring(1);
          require([path], function (descriptor) {
            app.safeApply($rootScope, function () {
              self.descriptor = $rootScope.descriptor = descriptor;
            });
          });
        }
      };
    });
});
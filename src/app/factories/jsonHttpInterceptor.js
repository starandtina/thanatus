define([
  'angular'
], function (angular) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.factories')
    .factory('JSONHttpInterceptor', function ($q) {
      return {
        // optional method
        'request': function (config) {
          // do something on success
          return config;
        },

        // optional method
        'requestError': function (rejection) {
          // do something on error
          return $q.reject(rejection);
        },

        // optional method
        'response': function (response) {
          // do something on success
          return response;
        },

        // optional method
        'responseError': function (rejection) {
          // do something on error
          return $q.reject(rejection);
        }
      };
    })
    .config(function ($httpProvider) {
      $httpProvider.interceptors.push('JSONHttpInterceptor');
    });
});
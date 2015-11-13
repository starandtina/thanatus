define([
  'angular'
], function (angular) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.factories')
    .factory('ErrorHttpInterceptor', function () {
      return {
        response: function (response) {
          //ErrorService.setError('error message');
          return response;
        }
      };
    })
    .config(function ($httpProvider) {
      $httpProvider.interceptors.push('ErrorHttpInterceptor');
    });
});
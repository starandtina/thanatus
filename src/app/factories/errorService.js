define([
  'angular'
], function (angular) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.factories')
    .factory('ErrorService', function () {
      return {
        errorMessage: null,
        setError: function (msg) {
          this.errorMessage = msg;
        },
        clear: function () {
          this.errorMessage = null;
        }
      };
    });
});
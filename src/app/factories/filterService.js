define([
  'angular'
], function (angular) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.factories')
    .factory('filterService', function () {
      return {
        filters: {},
        searchText: ''
      };
    });
});
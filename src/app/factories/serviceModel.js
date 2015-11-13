define([
  'angular'
], function (angular) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.factories')
    .factory('ServiceModel', function ($resource) {
      return $resource('/api/services/:id', null, {
        'update': {
          method: 'PUT'
        }
      });
    });
});
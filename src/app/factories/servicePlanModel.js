define([
  'angular'
], function (angular) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.factories')
    .factory('ServicePlanModel', function ($resource) {
      return $resource('/api/servicePlans/:id', null, {
        'update': {
          method: 'PUT'
        }
      });
    });
});
define([
  'angular'
], function (angular) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.factories')
    .factory('AddressBooksModel', function ($resource) {
      return $resource('/api/addressBooks/:id', null, {
        'update': {
          method: 'PUT'
        }
      });
    });
});
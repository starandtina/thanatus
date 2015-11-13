define([
  'angular'
], function (angular) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.factories')
    .factory('SideBarModel', function ($resource) {
      return $resource('/api/sideBar/:userId', null, {
        'get': {
          method: 'GET'
        }
      });
    });
});

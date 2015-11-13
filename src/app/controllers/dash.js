define([
  'angular'
], function (angular) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.controllers')
    .controller('DashCtrl', function DashCtrl($scope, DashService, ErrorService) {
      $scope.dashService = DashService;
      $scope.errorService = ErrorService;
    });
});
define([
  'angular'
], function (angular) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.controllers')
    .controller('ServiceModalCtrl', function DashCtrl($scope, $modalInstance, items) {
      $scope.items = items;
      $scope.selected = {
        item: $scope.items[0]
      };

      $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    });
});
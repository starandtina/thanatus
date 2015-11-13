define([
  'angular',
  'jquery',
  'lodash',
  'jquery.bbq',
  'jquery.migrate',
  'components/addressBook/list/addressBook.list.html'
], function (angular, $, _) {
  'use strict';

  return ['$scope', '$location', 'AddressBooksModel',
    function ($scope, $location, AddressBooksModel) {
      var currentPage = $.bbq.getState('currentPage');

      $scope.init = function () {
        $scope.resources = AddressBooksModel.query(function () {
          $scope.totalItems = $scope.resources.length;
          $scope.itemsPerPage = 10;
          $scope.currentPage = +currentPage || 1;
          $scope.items = getItems();
        });
      };

      $scope.pageChanged = function () {
        $scope.items = getItems();
        $.bbq.pushState({
          currentPage: $scope.currentPage
        });
      };

      $scope.create = function () {
        $scope.isEdit = false;
        $scope.resource = new AddressBooksModel();
        $scope.type = 'components/addressBook/edit';
      };

      $scope.edit = function (resource) {
        $scope.isEdit = true;
        $scope.resource = resource;
        $scope.type = 'components/addressBook/edit';
      };

      $scope.delete = function (resource) {
        resource.$delete({
          id: resource.id
        }, function () {
          // after delete resource successfully, and then remove the resource from $scope
          $scope.resources = _.without($scope.resources, resource);
          $scope.totalItems = $scope.resources.length;
          $scope.items = getItems();
        });
      };

      function getItems(currentPage, itemsPerPage) {
        currentPage = currentPage || $scope.currentPage;
        itemsPerPage = itemsPerPage || $scope.itemsPerPage;

        return $scope.resources.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
      }
    }
  ];
});
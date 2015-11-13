define([
  'components/servicePlan/servicePlan.html'
], function () {
  'use strict';

  return ['$scope', '$modal',
    function ($scope, $modal) {

      this.items = ['item1', 'item2', 'item3'];

      this.open = function (size) {
        var modalInstance = $modal.open({
          templateUrl: 'template/service/service-modal.html',
          controller: 'ServiceModalCtrl',
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {});
      };
    }
  ];
});
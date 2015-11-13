define([
  'angular',
  'components/addressBook/edit/addressBook.edit.html'
], function () {
  'use strict';

  return ['$scope',
    function ($scope) {
      $scope.save = function () {
        if ($scope.isEdit) {
          $scope.resource.$update({
            id: $scope.resource.id
          });
        } else {
          $scope.resource.$save();
        }

        // redirect to list page
        $scope.back();
      };

      $scope.back = function () {
        $scope.type = 'components/addressBook/list';
      };
    }
  ];
});
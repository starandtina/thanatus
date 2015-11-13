define([
  'components/serviceDetail/serviceDetail.html'
], function () {
  'use strict';

  return ['$scope', '$location', 'ServiceModel', 'ServicePlanModel',
    function ($scope, $location, ServiceModel, ServicePlanModel) {
      $scope.init = function () {
        $scope.id = $location.search().id;

        $scope.service = ServiceModel.get({
          id: $scope.id
        });

        $scope.servicePlans = ServicePlanModel.query();
      };
    }
  ];
});
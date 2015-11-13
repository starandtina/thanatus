define([
  'components/serviceCatalog/serviceCatalog.html'
], function () {
  'use strict';

  return ['$scope', '$rootScope', 'ServiceModel', 'filterService',
    function ($scope, $rootScope, ServiceModel, filterService) {
      $scope.init = function () {
        this.services = ServiceModel.query();
        this.viewType = 'thumb';

        /*
        $rootScope.$on('search:changed', function (event, data) {
        });
        */
      };

      $scope.getServiceViewType = function () {
        this.isList = this.viewType !== 'thumb';
        return 'components/service/' + $scope.viewType;
      };

      $scope.toggleViewType = function (viewType) {
        this.viewType = viewType || 'thumb';
      };

      this.orderService = 'name';

      $scope.filterService = filterService;
    }
  ];
});
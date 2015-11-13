define([
  'jquery',
  'slick',
  'components/home/home.html'
], function ($) {
  'use strict';

  return ['$scope', 'ServiceModel',
    function ($scope, ServiceModel) {
      $scope.featuredServices = $scope.pinnedServices = $scope.purchasedServices = ServiceModel.query();

      $scope.init = function () {
        $scope.$on('onRepeatLast', function () {
          $('.services-slider').slick({
            infinite: false,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 4
          });
        });
      };
    }
  ];
});
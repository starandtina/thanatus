define([
  'angular',
  'components/about/about.html'
], function () {
  'use strict';

  return ['$scope',
    function ($scope) {
      $scope.name = 'Hello, This is DBaaS!';
    }
  ];
});
define([
  'components/layout/header/layout.header.html'
], function () {
  'use strict';

  return ['$scope', '$window', 'filterService',
    function ($scope, $window, filterService) {
      $scope.init = function () {
        this.locale = $window.require.s.contexts._.config.config.i18n.locale;
      };

      $scope.onLocaleChange = function () {
        localStorage.setItem('locale', this.locale);
        $window.location.reload();
      };

      $scope.filterService = filterService;
    }
  ];
});
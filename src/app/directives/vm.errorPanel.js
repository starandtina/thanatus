define([
  'angular'
], function (angular) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.directives')
    .directive('vmErrorPanel', function ($parse) {
      return {
        restrict: 'E',
        templateUrl: 'template/errorPanel.html',
        link: function (scope, element, attrs) {
          var errorMessageAttr = attrs['errormessage'];

          scope.errorMessage = null;

          scope.$watch(errorMessageAttr, function (newVal) {
            scope.errorMessage = newVal;
          });

          scope.hide = function () {
            scope.errorMessage = null;
            // Also clear the error message on the bound variable.
            // Do this so that if the same error happens again
            // the alert bar will be shown again next time.
            $parse(errorMessageAttr).assign(scope, null);
          };
        }
      };
    });
});
define([
  'angular'
], function (angular) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.directives')
    .directive('onLastRepeat', function () {
      return function (scope, element, attrs) {
        if (scope.$last) {
          setTimeout(function () {
            scope.$emit('onRepeatLast', element, attrs);
          }, 1);
        }
      };
    });
});
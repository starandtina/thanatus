define([
  'angular'
], function (angular) {
  'use strict';

  function vmParser() {
    return {
      restrict: 'E',
      scope: {
        descriptor: '='
      },
      template: '<vm-component ng-cloak type="descriptor.type" children="descriptor.children" param="descriptor"></vm-component>'
    };
  }

  angular
    .module('vm.vchs.dbaas.directives')
    .directive('vmParser', vmParser);
});
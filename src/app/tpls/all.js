define([
  'angular',
  './service.modal',
  './errorPanel'
], function (angular) {
  'use strict';

  angular.module('vm.vchs.dbaas.tpls', ['template/service/service-modal.html', 'template/errorPanel.html']);
});
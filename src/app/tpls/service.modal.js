define([
  'angular',
  'tpls/service.modal.html'
], function (angular, tpl) {
  'use strict';

  angular.module('template/service/service-modal.html', []).run(['$templateCache',
    function ($templateCache) {
      $templateCache.put('template/service/service-modal.html', tpl());
    }
  ]);
});
define([
  'angular',
  'tpls/errorPanel.html'
], function (angular, tpl) {
  'use strict';

  angular.module('template/errorPanel.html', []).run(['$templateCache',
    function ($templateCache) {
      $templateCache.put('template/errorPanel.html', tpl());
    }
  ]);
});
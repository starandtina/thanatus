define([
  'components/myServices/myServices.html'
], function () {
  'use strict';

  return [
    function () {
      this.init = function () {};

      this.orderBy = 'predicate';

      this.services = [{
        name: 'MSSQL Server'
      }, {
        name: 'Oracle'
      }, {
        name: 'Mysql'
      }];
    }
  ];
});
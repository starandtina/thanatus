define([
  'base/src/app/components/about/about.controller.js',
  'app',
  'angular-mocks'
], function (Ctrl) {
  'use strict';

  describe('Test About Controller', function () {
    var scope;

    // Initialize a mock scope
    beforeEach(function () {
      module('vm.vchs.dbaas.controllers');
      module('vm.vchs.dbaas.factories');

      inject(function ($rootScope, $injector) {
        scope = $rootScope.$new();
        $injector.invoke(Ctrl, scope, {
          '$scope': scope
        });
      });
    });

    it('check name', function () {
      expect(scope.name).toEqual('Hello, This is DBaaS!');
    });
  });
});
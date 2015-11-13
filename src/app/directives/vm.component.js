define([
  'angular',
  'require',
  'lodash',
  'app'
], function (angular, require, _, app) {
  'use strict';

  angular
    .module('vm.vchs.dbaas.directives')
    .directive('vmComponent', function ($compile, $injector) {
      var linker = function (scope, element) {
        scope.$watch('type', function (type) {
          // when the 'type' expression changes
          // assign it into the current DOM
          if (!type) {
            return;
          }

          var poundIndex = type.lastIndexOf('#');

          if (poundIndex !== -1) {
            type = type.substring(0, poundIndex);
          }

          _.forEach(scope.param, function (value, key) {
            // override the previous value
            scope[key] = value;
          });

          var component = _.rest(type.split('/')).join('.');
          var view = type + '/' + component + '.html';
          var controller = type + '/' + component + '.controller';
          var i18n = 'i18n!' + type + '/nls/' + component;

          require([view, controller, i18n], function (tpl, Ctrl, i18n) {
            // because this has happened asynchroneusly we've missed
            // Angular's initial call to $apply after the controller has been loaded
            // hence we need to explicityly call it at the end of our Controller constructor
            app.safeApply(scope, function () {
              scope.i18n = function (key) {
                if (!key) {
                  return '%KEY MISSING%';
                }

                return i18n[key] || key;
              };

              element.html(tpl());
              // compile the new DOM and link it to the current scope.
              // NOTE: we only compile .childNodes so that we don't get into infinite loop compiling ourselves
              $compile(element.contents())(scope);
              // injector method takes an array of modules as the first argument
              // as we want our controller to be able to use components from
              // any of your other modules, make sure we include it together with 'ng'
              // Furthermore we need to pass on the $scope as it's unique to this controller
              $injector.invoke(Ctrl, scope, {
                '$scope': scope
              });

              if (_.isFunction(scope.init)) {
                scope.init.apply(scope, []);
              }
            });
          });
        });
      };

      return {
        restrict: 'E',
        scope: {
          param: '=',
          type: '=',
          children: '='
        },
        link: linker
      };
    });
});
define([
  'jquery',
  'lodash',
  'components/sideBar/sideBar.html'
], function ($, _) {
  'use strict';

  return ['$scope', '$rootScope', 'SideBarModel', 'filterService',
    function ($scope, $rootScope, SideBarModel, filterService) {
      _.extend($scope, {
        filterService: filterService,
        servicesNavId: 2,
        init: function () {
          $scope.sideBar = SideBarModel.get();
        },
        onClickNav: function ($event, nav) {
          $scope.currentNavId = nav.id;

          var $target = $($event.currentTarget);

          $target
            .closest('.list-group')
            .find('.active')
            .removeClass('active');

          $target
            .addClass('active');
        },
        toggle: function ($event) {
          var $target = $($event.currentTarget).children(':eq(0)');

          if ($target.hasClass('nav-close')) {
            $target
              .parent()
              .next()
              .show();
          } else if ($target.hasClass('nav-open')) {
            $target
              .parent()
              .next()
              .hide();
          }

          $target.toggleClass('nav-open nav-close');
        },
        onChange: function ($event, item, categoryName) {
          var $target = $($event.currentTarget);
          var isChecked = $target.prop('checked');

          $rootScope.$emit('search:changed', isChecked, item, categoryName);
        }
      });
    }
  ];
});
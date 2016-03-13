define(['angular', 'directives/module', 'utils'], function (angular, directivesModule, utils) {

  'use strict';

// Directive to set GET parameter value to `value` attribute of input element
  directivesModule.directive('getParam', function () {
    return {
      restrict: 'A',
      link: function ($scope, element, attrs) {
        var paramValue = utils.getURLParam(attrs.getParam);
        element.val(paramValue);
      }
    };
  });

});
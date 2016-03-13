define(['angular', 'directives/module', 'templateHelper'], function (angular, directivesModule, templateHelper) {

  'use strict';

// Directive to run a function once the page/element is loaded; the function is specified by func attribute of the element
// The function is supposed to be available by templateHelper
  directivesModule.directive('runOnReady', function () {
    return {
      restrict: 'EA',
      link: function ($scope, element, attrs) {
        element.ready(function () {
          var func = templateHelper[attrs.func];
          // var func = $parse(attrs.func);
          func();
        });
      }
    };
  });

});
define(['angular', 'controllers/module'], function (angular, controllersModule) {

  'use strict';

// A controller that can be used for general purpose pages
  controllersModule.controller('GeneralController', ['$scope', '$rootScope', function ($scope, $rootScope, ContactService) {
    
    $scope.init = function () {

    };

    $scope.init();
  }]);

});
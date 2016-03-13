define(['angular', 'services/module'], function (angular, servicesModule) {

  'use strict';

// A service to interact with server-side APIs to send contact and booking request
  servicesModule.factory('ContactService', ['$rootScope', '$resource', function ($rootScope, $resource) {

    var service = {};

    service.contact = function() {

    };

    service.book = function () {

    };

    return service;

  }]);

});
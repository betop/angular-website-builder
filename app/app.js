define(['init', 'angular-ui-router', 'angular-resource', 'angular-css', 'twbControllers', 'twbDirectives', 'twbServices'], function () {

  'use strict';

  // Create the app module
  return angular.module('twbApp', ['ui.router', 'ngResource', 'door3.css', 'twbControllers', 'twbDirectives', 'twbServices']);
  
});

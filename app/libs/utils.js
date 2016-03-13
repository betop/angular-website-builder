define([], function () {

  'use strict';

// utils is a collection of utility functions that can be used everywhere

  var utils = {};

  utils.getURLParam = function (param) {
    var url = decodeURIComponent(window.location.href);
    var reg = new RegExp('[?&]' + param + '=([^&#]*)', 'i');
    var string = reg.exec(url);
    return string ? string[1] : null;
  };

  return utils;

});
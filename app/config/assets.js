'use strict';

module.exports = {
  staging: {
    js: [
      'app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/bluebird/js/browser/bluebird.js',
      'app/bower_components/requirejs/require.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-css/angular-css.js',
      'app/bower_components/please-wait/build/please-wait.js'
    ],
    css: [
      'app/bower_components/html5-boilerplate/dist/css/normalize.css',
      'app/bower_components/html5-boilerplate/dist/css/main.css',
      'app/bower_components/please-wait/build/please-wait.css'
    ]
  },
  production: {
    js: [
      'app/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/bluebird/js/browser/bluebird.js',
      'app/bower_components/requirejs/require.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-css/angular-css.js',
      'app/bower_components/please-wait/build/please-wait.js'
    ],
    css: [
      'app/bower_components/html5-boilerplate/dist/css/normalize.css',
      'app/bower_components/html5-boilerplate/dist/css/main.css',
      'app/bower_components/please-wait/build/please-wait.css'
    ]
  },
  code: [
    'app/**',
    '!app/bower_components',
    '!app/bower_components/**',
    '!app/config/env',
    '!app/config/env/**',
    '!app/config/assets.js',
    '!app/index*.html',
    '!app/temp',
    '!app/temp/**'
  ],
  csslint: [
    'app/**/*.css',
    '!app/bower_components/**',
    '!app/templates/**',
    '!app/temp/**',
    '!app/assets/css/import.css'
  ],
  jslint: [
    'app/**/*.js',
    '!app/bower_components/**',
    '!app/templates/*/*/**',
    '!app/templates/*/helper.js',
    '!app/temp/**',
    '!app/config/assets.js'
  ]
};

define([
  'app',
// template-specific javascript code files
  'templates/iuh8845-3j943-4v393/assets/js/tinynav',
  'templates/iuh8845-3j943-4v393/assets/js/glDatePicker.min',
  'templates/iuh8845-3j943-4v393/assets/js/lightbox',
  'templates/iuh8845-3j943-4v393/helper'
],
function (app) {

  'use strict';

// Configure routes/states for template pages
  app.config(['$stateProvider', '$urlRouterProvider', 'siteData', function ($stateProvider, $urlRouterProvider, siteData) {

    $urlRouterProvider.otherwise('/');

// template-specific css files
    var cssFiles = [
      'templates/iuh8845-3j943-4v393/assets/css/reset.css',
      'templates/iuh8845-3j943-4v393/assets/css/main.css',
      'templates/iuh8845-3j943-4v393/assets/css/font-awesome.css',
      'templates/iuh8845-3j943-4v393/assets/css/lightbox.css',
      'http://fonts.googleapis.com/css?family=PT+Sans:400,700%7CPacifico'
    ];

    $stateProvider
      .state('site', {
        abstract: true,
        url: '/',
        templateUrl: 'templates/iuh8845-3j943-4v393/wrapper.html'
      })
      .state('site.page', {
        abstract: true,
        url: '',
        views: {
          'header': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/header.html',
          },
          'footer': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/footer.html',
          }
        }
      })
      .state('site.page.home', {
        url: '',
        pageInfo: siteData.pages.homepage,
        css: cssFiles,
        views: {
          'content@site': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/index.html',
            controller: 'GeneralController as homeController'
          }
        }
      })
      .state('site.page.booking', {
        url: 'booking',
        title: 'Booking',
        css: cssFiles,
        views: {
          'content@site': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/booking.html',
          }
        }
      })
      .state('site.page.contact-booking', {
        url: 'contact-booking',
        css: cssFiles,
        views: {
          'content@site': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/contact-booking.html',
          }
        }
      })
      .state('site.page.contact', {
        url: 'contact',
        css: cssFiles,
        views: {
          'content@site': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/contact.html',
          }
        }
      })
      .state('site.page.facilities', {
        url: 'facilities',
        css: cssFiles,
        views: {
          'content@site': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/facilities.html',
          }
        }
      })
      .state('site.page.faqs', {
        url: 'faqs',
        css: cssFiles,
        views: {
          'content@site': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/faqs.html',
          }
        }
      })
      .state('site.page.gallery', {
        url: 'gallery',
        css: cssFiles,
        views: {
          'content@site': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/gallery.html',
          }
        }
      })
      .state('site.page.rental', {
        url: 'rental',
        css: cssFiles,
        views: {
          'content@site': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/rental.html',
            controller: function ($scope) {
              $scope.rental = siteData.rentals[0];
            }
          }
        }
      })
      .state('site.page.reviews', {
        url: 'reviews',
        css: cssFiles,
        views: {
          'content@site': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/reviews.html',
          }
        }
      })
      .state('site.page.terms', {
        url: 'terms',
        css: cssFiles,
        views: {
          'content@site': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/terms.html',
          }
        }
      })
      .state('site.page.test', {
        url: 'test',
        css: cssFiles,
        views: {
          'content@site': {
            templateUrl: 'templates/iuh8845-3j943-4v393/views/test.html',
          }
        }, 
      });
  }]);
  
});

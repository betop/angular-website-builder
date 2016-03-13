define(['pool'], function (pool) {

  'use strict';

  var siteDomain = envConfig.siteDomain || location.hostname; // website domain
  // website1.tokeet.com is for development and testing. On production, it should be obtained dynamically.
  var apiUrl = envConfig.apiUrl;

  // Asynchronous call to API to get site data. Later, the url will be set by env var or config file.
  var initApiPromise = Promise.resolve(jQuery.get({
    url: apiUrl + siteDomain,
    // url: 'http://localhost:8001/temp/api.json',
    dataType: 'json'
  }));

  initApiPromise
    .then(function (siteData) {

      if (!siteData.template) {
        onApiFail('Template Not Found in API Response, or Empty Result');
        return;
      }

      // API success
      console.log('API succeeded: ', siteData);

      pool.siteData = siteData; // add siteData in the pool

      var templateConfig = 'templates/' + siteData.template + '/config';
      // Load template's config file
      require(['app', templateConfig], function (app) {
        // store siteData as a constant of the app (it just pass by reference)
        app.constant('siteData', siteData);

        app.run(['$rootScope', '$state', function ($rootScope, $state) {
          // store siteData in $rootScope (it just pass by reference)
          $rootScope.siteData = siteData;

          // set pageInfo scope variable on every state/route change
          $rootScope.$on('$stateChangeSuccess', function(evt) {
            $rootScope.pageInfo = $state.current.pageInfo;
          });
        }]);

        angular.element().ready(function () {
          // bootstrap the app manually
          angular.bootstrap(document, ['twbApp']);

          setTimeout(function () {
            window.loading_screen.finish();
          }, 700);

        });
      });

    })
    .catch(function (error) {
      // API failure
      onApiFail(error);

    });

  function onApiFail(error) {
    
    console.log('API failed: ', error);

    window.loading_screen.finish();
    jQuery('body').addClass('load-failed');

  }

});

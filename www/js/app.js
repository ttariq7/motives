// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'MainCtrl'
  })

  // Each tab has its own nav history stack:

  .state('tab.discover', {
    url: '/discover',
    views: {
      'tab-discover': {
        templateUrl: 'templates/tab-discover.html',
        controller: 'DiscoverCtrl'
      }
    }
  })
    .state('tab.discover-detail', {
      url: '/discover/:placeId',
      views: {
        'tab-discover': {
          templateUrl: 'templates/discover-detail.html',
          controller: 'DiscoverDetailCtrl'
        }
      }
    })

  .state('tab.motives', {
      url: '/motives',
      views: {
        'tab-motives': {
          templateUrl: 'templates/tab-motives.html',
          controller: 'MotivesCtrl'
        }
      }
    })
    .state('tab.motives-detail', {
      url: '/motives/:motivesId',
      views: {
        'tab-motives': {
          templateUrl: 'templates/motives-detail.html',
          controller: 'MotivesDetailCtrl'
        }
      }
    })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/motives');

})

.run(function ($state, $rootScope) {
    Parse.initialize('7lpDcK5RlK6HBFkemlOZKNkCz2zJNEeZ2tkzYylF', 'QDLE6tOL9Xd4vtunelogxOPqxb3crESVxeDGD2Fe');

});

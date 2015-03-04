'use strict';

angular.module('angular-notes', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', { url: '/', templateUrl: '/views/general/home.html' })
      .state('faq', { url: '/faq', templateUrl: '/views/general/faq.html' })
      .state('contact', { url: '/contact', templateUrl: '/views/general/contact.html' })
      .state('register', { url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl' })
      .state('login', { url: '/login', templateUrl: 'views/users/users.html', controller: 'UsersCtrl' });

    if(window.history && window.history.pushState) {
      $locationProvider.html5Mode({
             enabled: true,
             requireBase: false
      });
    }
  }]);

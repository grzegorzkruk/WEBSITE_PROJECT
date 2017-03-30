'use strict';

/**
 * @ngdoc overview
 * @name ekoWebSite
 * @description
 * # ekoWebSite
 *
 * Main module of the application.
 */
angular
  .module('ekoWebSite', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
      
      .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
      })
      .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
      })
      .state('prices', {
          url: '/prices',
          templateUrl: 'views/prices.html',
          controller: 'PricesCtrl'
      })
      .state('contact', {
          url: '/contact',
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl'
      })

      $urlRouterProvider.otherwise('/');
  });

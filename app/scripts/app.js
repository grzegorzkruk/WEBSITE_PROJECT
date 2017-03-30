'use strict';

/**
 * @ngdoc overview
 * @name test4App
 * @description
 * # test4App
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
          abstract: true,
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl'
      })
      .state('about', {
          url: '/about',
          abstract: true,
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
      })
      .state('prices', {
          url: '/prices',
          abstract: true,
          templateUrl: 'views/prices.html',
          controller: 'PricesCtrl'
      })
      .state('contact', {
          url: '/contact',
          abstract: true,
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl'
      })

      $urlRouterProvider.otherwise('/app');
  });

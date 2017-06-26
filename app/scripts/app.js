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
        'slick'
    ])
    .run(function($rootScope, $timeout, $anchorScroll, $window){
        $rootScope.isPageLoading = false;
        $rootScope.siteContent = angular.element(document).find('.eko__website');
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            if (toState.external) {
                event.preventDefault();
                $window.open(toState.url, '_self');
              }
            $rootScope.siteContent.animate({'opacity': 0}, 500);
            $rootScope.isPageLoading = true;
        });
        $rootScope.$on('$stateChangeSuccess', function() {
            $anchorScroll();
            $timeout(function(){
                $rootScope.siteContent.animate({'opacity': 1}, 500);
                $rootScope.isPageLoading = false;
            }, 1000);
        });
    })
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'templates/views/home.html',
                controller: 'HomeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/views/about.html',
                controller: 'AboutCtrl'
            })
            .state('prices', {
                url: '/prices',
                templateUrl: 'templates/views/prices.html',
                controller: 'PricesCtrl'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/views/contact.html',
                controller: 'ContactCtrl'
            })
            .state('realisations', {
                url: '/realisations',
                templateUrl: 'templates/views/realisations.html',
                controller: 'RealisationsCtrl'
            })

            .state('home.car', {
                url: 'home/car',
                templateUrl: 'templates/views/eko-offer/car.html'
            })
            .state('home.house', {
                url: 'home/house',
                templateUrl: 'templates/views/eko-offer/house.html'
            })
            .state('home.office', {
                url: 'home/office',
                templateUrl: 'templates/views/eko-offer/office.html'
            })
            .state('home.industry', {
                url: 'home/industry',
                templateUrl: 'templates/views/eko-offer/industry.html'
            })
            .state('home.communication', {
                url: 'home/communication',
                templateUrl: 'templates/views/eko-offer/communication.html'
            })
            .state('home.elevations', {
                url: 'home/elevations',
                templateUrl: 'templates/views/eko-offer/elevations.html'
            })
            .state('home.hotels', {
                url: 'home/hotels',
                templateUrl: 'templates/views/eko-offer/hotels.html'
            })
            .state('home.schools', {
                url: 'home/schools',
                templateUrl: 'templates/views/eko-offer/schools.html'
            })
            .state('home.desinfection', {
                url: 'home/desinfection',
                templateUrl: 'templates/views/eko-offer/desinfection.html'
            })
            .state('home.touchless', {
                url: 'http://www.ekowash.pl/',
                external: true
            })
            .state('home.selfservice', {
                url: 'home/selfservice',
                templateUrl: 'templates/views/eko-offer/selfservice.html'
            })
            .state('home.special', {
                url: 'home/special',
                templateUrl: 'templates/views/eko-offer/special.html'
            })

        $urlRouterProvider.otherwise('/');
    });

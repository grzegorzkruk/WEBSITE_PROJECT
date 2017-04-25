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
    .run(function($rootScope, $timeout, $anchorScroll){
        $rootScope.isPageLoading = false;
        $rootScope.siteContent = angular.element(document).find('.eko__website');
        $rootScope.$on('$stateChangeStart', function() {
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
            .state('realisations', {
                url: '/realisations',
                templateUrl: 'views/realisations.html',
                controller: 'RealisationsCtrl'
            })

            .state('home.car', {
                url: 'home/car',
                templateUrl: 'views/eko-offer/car.html'
            })
            .state('home.house', {
                url: 'home/house',
                templateUrl: 'views/eko-offer/house.html'
            })
            .state('home.office', {
                url: 'home/office',
                templateUrl: 'views/eko-offer/office.html'
            })
            .state('home.industry', {
                url: 'home/industry',
                templateUrl: 'views/eko-offer/industry.html'
            })
            .state('home.communication', {
                url: 'home/communication',
                templateUrl: 'views/eko-offer/communication.html'
            })
            .state('home.elevations', {
                url: 'home/elevations',
                templateUrl: 'views/eko-offer/elevations.html'
            })
            .state('home.hotels', {
                url: 'home/hotels',
                templateUrl: 'views/eko-offer/hotels.html'
            })
            .state('home.schools', {
                url: 'home/schools',
                templateUrl: 'views/eko-offer/schools.html'
            })
            .state('home.desinfection', {
                url: 'home/desinfection',
                templateUrl: 'views/eko-offer/desinfection.html'
            })
            .state('home.touchless', {
                url: 'home/touchless',
                templateUrl: 'views/eko-offer/touchless.html',
            })
            .state('home.selfservice', {
                url: 'home/selfservice',
                templateUrl: 'views/eko-offer/selfservice.html'
            })
            .state('home.special', {
                url: 'home/special',
                templateUrl: 'views/eko-offer/special.html'
            })

        $urlRouterProvider.otherwise('/');
    });
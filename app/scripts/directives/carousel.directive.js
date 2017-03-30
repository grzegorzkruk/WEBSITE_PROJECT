'use strict';

angular.module('ekoWebSite')
    .directive('ekoCarousel', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/carousel.html'
        };
    });
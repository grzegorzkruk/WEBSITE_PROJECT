'use strict';

angular.module('ekoWebSite')
.directive('ekoCarousel', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/partials/carousel.html',
        controller: 'ekoCarouselCtrl'
    };
});

'use strict';

angular.module('ekoWebSite')
    .directive('slickSlider', function ($animate, $rootScope, $timeout, $location) {
        var link = function(scope, element){
            angular.element(element).find('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                arrows: false,
                asNavFor: '.slider-nav'
            });
            angular.element(element).find('.slider-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.slider-for',
                dots: true,
                centerMode: true,
                focusOnSelect: true
            });
        };
        return {
            restrict: 'E',
            templateUrl: 'views/slick-slider.html',
            scope:{
                images: '@'
            },
            link: link
        };
    });
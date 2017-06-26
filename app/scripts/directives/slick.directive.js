'use strict';

angular.module('ekoWebSite')
    .directive('slickSlider', function ($animate, $rootScope, $timeout) {
        var link = function(scope, element){
            var oSliderFor = angular.element(element).find('.slider-for'),
                oSliderNav = angular.element(element).find('.slider-nav');
            angular.element(element).find('.slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                arrows: false,
                asNavFor: '.slider-nav'
            });
            $(oSliderNav).slick({
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
            templateUrl: 'templates/partials/slick-slider.html',
            scope:{
                images: '='
            },
            link: link
        };
    });
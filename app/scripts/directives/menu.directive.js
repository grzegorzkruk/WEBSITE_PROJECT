'use strict';

angular.module('ekoWebSite')
    .directive('ekoMenu', function($window) {
        return {
            restrict: 'E',
            templateUrl: 'templates/partials/menu.html',
            controller: 'MenuCtrl',
            link: function(scope, element, attr) {
                angular.element($window).bind('scroll', function() {
                    var scrollTop = angular.element($window).scrollTop();
                    if (100 <= scrollTop) {
                        element.find('.eko__menu').addClass('sticky');
                    } else {
                        element.find('.eko__menu').removeClass('sticky')
                    }
                })
            }
        };
    });

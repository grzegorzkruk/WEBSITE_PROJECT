'use strict';

angular.module('ekoWebSite')
    .directive('ekoMenu', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/menu.html'
        };
    });
'use strict';

angular.module('ekoWebSite')
    .directive('ekoInfoBar', function () {
        return {
            restrict: 'E',
            templateUrl: 'views/info-bar.html'
        };
    });
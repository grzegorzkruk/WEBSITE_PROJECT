'use strict';

angular.module('ekoWebSite')
    .directive('ekoInfoBar', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/partials/info-bar.html'
        };
    });

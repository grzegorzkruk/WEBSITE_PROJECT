'use strict';

angular.module('ekoWebSite')
    .directive('ekoDialer', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/partials/dialer.html',
        };
    });

'use strict';

angular.module('ekoWebSite')
    .directive('ekoIconsGrid', function() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'templates/partials/eko-icons-grid.html',
            controller: 'ekoIconsGridCtrl'
        };
    });

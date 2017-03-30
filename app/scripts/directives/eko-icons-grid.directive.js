'use strict';

angular.module('ekoWebSite')
.directive('ekoIconsGrid', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'views/eko-icons-grid.html',
        controller: 'ekoIconsGridCtrl'
    };
});
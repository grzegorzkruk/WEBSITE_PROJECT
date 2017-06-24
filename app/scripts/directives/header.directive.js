'use strict';

angular.module('ekoWebSite')
    .directive('ekoHeader', function ($animate) {
        return {
            restrict: 'E',
            templateUrl: 'templates/partials/header.html',
            controller: 'HeaderCtrl'
        };
    });

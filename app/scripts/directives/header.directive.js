'use strict';

angular.module('ekoWebSite')
    .directive('ekoHeader', function ($animate) {
        return {
            restrict: 'E',
            templateUrl: 'views/header.html',
            controller: 'HeaderCtrl'
        };
    });
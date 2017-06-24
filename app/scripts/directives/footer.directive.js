'use strict';

angular.module('ekoWebSite')
    .directive('ekoFooter', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/partials/footer.html'
        };
    });

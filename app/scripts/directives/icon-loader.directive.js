'use strict';

angular.module('ekoWebSite')
.directive('iconLoader', function () {
    return {
        restrict: 'E',
        templateUrl: function(element, attr) {
            return 'views/svg-icons/' + attr.name + '.html';
        }
    };
});
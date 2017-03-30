'use strict';

angular.module('ekoWebSite')
.directive('iconLoader', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: function(element, attr) {
            return 'views/svg-icons/' + attr.iconName;
        }
    };
});
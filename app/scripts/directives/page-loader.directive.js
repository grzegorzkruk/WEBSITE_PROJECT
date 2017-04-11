'use strict';

angular.module('ekoWebSite')
    .directive('ekoPageLoader', function ($animate, $rootScope, $timeout, $location) {
        var link = function(scope, element){
            var loader = new SVGLoader(document.getElementById('loader'), {
                    speedIn: 500,
                    easingIn: mina.easeinout
                });
            $rootScope.$on('$stateChangeStart', function() {
                loader.show();
            });
            $rootScope.$on('$stateChangeSuccess', function() {
                $timeout(function(){
                    loader.hide();
                }, 1000);
            });
        };
        return {
            restrict: 'E',
            templateUrl: 'views/page-loader.html',
            link: link
        };
    });
'use strict';

/**
 * @ngdoc function
 * @name ekoWebSite.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the ekoWebSite
 */
angular.module('ekoWebSite')
    .controller('MenuCtrl', function($scope, $location, $window) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.isOpenMenu = false;
        $scope.toggleMenu = function() {
            $scope.isOpenMenu = !$scope.isOpenMenu;
        };
        $scope.closeMenu = function() {
            $scope.isOpenMenu = false;
        };
    });
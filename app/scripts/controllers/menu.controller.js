'use strict';

/**
 * @ngdoc function
 * @name ekoWebSite.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ekoWebSite
 */
angular.module('ekoWebSite')
  .controller('HeaderCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isActive = function (viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };
  });
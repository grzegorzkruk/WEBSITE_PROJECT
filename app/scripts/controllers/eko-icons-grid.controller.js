'use strict';

/**
 * @ngdoc function
 * @name ekoWebSite.controller:PricesCtrl
 * @description
 * # PricesCtrl
 * Controller of the ekoWebSite
 */
angular.module('ekoWebSite')
  .controller('ekoIconsGridCtrl', function ($http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('content/eko-icons-grid.json').success(function(response) {
        $scope.icons = response;
    });
  });

'use strict';

/**
 * @ngdoc function
 * @name ekoWebSite.controller:PricesCtrl
 * @description
 * # PricesCtrl
 * Controller of the ekoWebSite
 */
angular.module('ekoWebSite')
  .controller('ekoIconsGridCtrl', function ($http, $scope, $log) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm = this;
    vm.icons = [];
    $http.get('content/eko-icons-grid.json').then(function (success){
        $log.info(success.data);
        $scope.icons = success.data;
    },function (error){
        $log.error("Nie udało się pobrać listy ikon");
    });
  });

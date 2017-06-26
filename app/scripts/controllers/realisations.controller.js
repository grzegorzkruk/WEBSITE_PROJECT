'use strict';

/**
 * @ngdoc function
 * @name ekoWebSite.controller:PricesCtrl
 * @description
 * # RealisationsCtrl
 * Controller of the ekoWebSite
 */
angular.module('ekoWebSite')
  .controller('RealisationsCtrl', function ($scope, $http, $log) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('content/realisation-images.json').then(function (success){
        $log.info(success.data);
        $scope.images = success.data;
    },function (error){
        $log.error('Nie udało się pobrać listy zdjęć' + error);
    });
  });

'use strict';

/**
 * @ngdoc function
 * @name ekoWebSite.controller:ekoCarouselCtrl
 * @description
 * # ekoCarouselCtrl
 * Controller of the ekoWebSite
 */
angular.module('ekoWebSite')
  .controller('ekoCarouselCtrl', function ($http, $scope, $log) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm = this;
    vm.photos = [];
    $http.get('content/eko-carousel-images.json').then(function (success){
        $log.info(success.data);
        $scope.photos = success.data;
    },function (error){
        $log.error('Nie udało się pobrać listy zdjęć' + error);
    });
  });

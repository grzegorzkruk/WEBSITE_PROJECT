'use strict';

/**
 * @ngdoc function
 * @name ekoWebSite.controller:ekoCarouselCtrl
 * @description
 * # ekoCarouselCtrl
 * Controller of the ekoWebSite
 */
angular.module('ekoWebSite')
  .controller('ekoCarouselCtrl', function ($http, $scope, $log, EkoCarouselImages) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.photos = [];
    EkoCarouselImages.getPhotos().then(function(){
        $scope.photos = EkoCarouselImages.photos;
    });
  });

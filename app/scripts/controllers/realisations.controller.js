'use strict';

/**
 * @ngdoc function
 * @name ekoWebSite.controller:PricesCtrl
 * @description
 * # RealisationsCtrl
 * Controller of the ekoWebSite
 */
angular.module('ekoWebSite')
  .controller('RealisationsCtrl', function ($scope) {
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

     $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      arrows: false,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true
    });
  });

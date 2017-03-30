'use strict';

/**
 * @ngdoc function
 * @name ekoWebSite.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ekoWebSite
 */
angular.module('ekoWebSite')
  .controller('HeaderCtrl', function ($scope, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.ShowIntro = function(){
        var headerWrapper = angular.element(document).find('.eko__header--logo-wrapper'),
            logo = angular.element(document).find('.eko__logo'),
            textEko = logo.find('#eko_text-eko'),
            textWash = logo.find('#eko_text-wash'),
            leaf = logo.find('.leaf'),
            bubbles = logo.find('.eko__bubble-wrapper');
        headerWrapper.addClass('intro');

        var AnimateLeaf = function(){
            TweenMax.fromTo(leaf, 0.5, {opacity: 0}, {opacity: 1});
        };

        var AnimateText = function(){
            TweenMax.staggerFromTo([textEko, textWash], 0.5, {opacity: 0}, {opacity: 1}, 0.2);
        };

        var AnimateBubbles = function(){
            TweenMax.staggerFromTo(bubbles, 0.5, {opacity: 0, y: 100}, {opacity: 1, y: 0}, 0.3);
        };

        var CloseIntro = function(){
            headerWrapper.removeClass('intro');
        };


        
        var time = 0;
        $timeout(AnimateLeaf, time);

        time += 500;
        $timeout(AnimateBubbles, time);

        time += 1000;
        $timeout(AnimateText, time);

        time += 1000;
        $timeout(CloseIntro, time);
    };
  });

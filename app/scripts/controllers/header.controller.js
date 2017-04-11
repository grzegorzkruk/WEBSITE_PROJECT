'use strict';

/**
 * @ngdoc function
 * @name ekoWebSite.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the ekoWebSite
 */
angular.module('ekoWebSite')
    .controller('HeaderCtrl', function($scope, $timeout) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.ShowIntro = function() {
            var headerWrapper = angular.element(document).find('.eko__header--logo-wrapper'),
                logo = angular.element(document).find('.eko__logo'),
                textEko = logo.find('#eko_text-eko'),
                textWash = logo.find('#eko_text-wash'),
                leaf = logo.find('.leaf')[0],
                bubbles = logo.find('.eko__bubble-wrapper');
            headerWrapper.addClass('intro');

            var AnimateLeaf = function() {
                var tl = new TimelineMax();
                tl.set(leaf, { rotation: 5, opacity: 0, y: "-=9" });
                tl.add([
                        TweenMax.to(leaf, 0.2, {
                            x: "+=2",
                            y: "+=3",
                            rotation: -5,
                            ease: Power1.easeInOut
                        }),
                        TweenMax.to(leaf, 0.2, {
                            opacity: 1,
                            ease: Power1.easeOut
                        })
                    ]).add([
                        TweenMax.to(leaf, 1, {
                            x: "-=6",
                            y: "+=3",
                            rotation: 5,
                            ease: Power1.easeInOut
                        })
                    ])
                    .add([
                        TweenMax.to(leaf, 0.5, {
                            x: "+=4",
                            y: "+=3",
                            rotation: 0,
                            ease: Power1.easeInOut
                        })
                    ]);
            }

            var AnimateText = function() {
                TweenMax.staggerFromTo([textEko, textWash], 0.5, { opacity: 0 }, { opacity: 1 }, 0.2);
            };

            var AnimateBubbles = function() {
                TweenMax.staggerFromTo(bubbles, 0.5, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, 0.3);
            };

            var CloseIntro = function() {
                headerWrapper.removeClass('intro');
            };



            var time = 0;
            AnimateLeaf();

            time += 1000;
            $timeout(AnimateBubbles, time);

            time += 1000;
            $timeout(AnimateText, time);

            time += 1000;
            $timeout(CloseIntro, time);
        };
    });
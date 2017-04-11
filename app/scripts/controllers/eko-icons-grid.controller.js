'use strict';

/**
 * @ngdoc function
 * @name ekoWebSite.controller:PricesCtrl
 * @description
 * # PricesCtrl
 * Controller of the ekoWebSite
 */
angular.module('ekoWebSite')
    .controller('ekoIconsGridCtrl', function($http, $scope, $rootScope, $log, $state) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        var vm = this;
        vm.icons = [];
        $http.get('content/eko-icons-grid.json').then(function(success) {
            $log.info(success.data);
            $scope.icons = success.data;
        }, function(error) {
            $log.error("Nie udało się pobrać listy ikon");
        });

        $scope.ekoGrid = angular.element(document).find('.eko__grid');
        $scope.gridItems = $scope.ekoGrid.find('.item');
        $scope.changeLayout = function() {
            if (!$state.is('home')) {
                $scope.ekoGrid.addClass('horizontal');
                $scope.ekoGrid.find('.item').removeClass('col-xs-6');
                $scope.ekoGrid.find('.item').removeClass('col-md-4');
                $scope.ekoGrid.find('.item').addClass('col-xs-3');
                $scope.ekoGrid.find('.item').addClass('col-sm-1');
            } else {
                $scope.ekoGrid.removeClass('horizontal');
                $scope.ekoGrid.find('.item').removeClass('col-xs-3');
                $scope.ekoGrid.find('.item').removeClass('col-sm-1');
                $scope.ekoGrid.find('.item').addClass('col-xs-6');
                $scope.ekoGrid.find('.item').addClass('col-md-4');
            }
        };
        $rootScope.$on('$stateChangeSuccess', function() {
            $scope.changeLayout();
        });
    });
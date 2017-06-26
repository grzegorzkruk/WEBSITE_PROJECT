'use strict';

/**
 * @ngdoc function
 * @name ekoWebSite.service:ekoCarouselImages
 * @description
 * # EkoCarouselImages
 * Service of the ekoWebSite
 */
angular.module('ekoWebSite')
  .factory('EkoCarouselImages', function ($http, $log) {
      return {
          photos: null,
          getPhotos: function(){
              var self = this;
              return $http.get('content/eko-carousel-images.json').then(function (success){
                  $log.info(success.data);
                  self.photos = success.data;
              },function (error){
                  $log.error('Nie udało się pobrać listy zdjęć' + error);
              });
          }
      }
  });

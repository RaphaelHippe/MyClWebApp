'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:SliderCtrl
 * @description
 * # SliderCtrl
 * Controller of the webappApp
 */

 // var clApp = angular.module('webappApp', [
 //     'ngAnimate',
 //     'ngCookies',
 //     'ngResource',
 //     'ngRoute',
 //     'ngSanitize',
 //     'ngTouch'
 //   ]);

clApp.controller('SliderCtrl', function ($scope) {
  $scope.images = [{
    src: 'slide_one.png',
    link: 'about',
    title: 'Pic 1',
    index: 0
  }, {
    src: 'slide_two.png',
    link: 'leagues',
    title: 'Pic 2',
    index: 1
  }, {
    src: 'slide_three.png',
    link: 'contact',
    title: 'Pic 3',
    index: 2
  }];
  // $scope.imageDots = [{index: 0}, {index: 1}, {index: 2}];
});

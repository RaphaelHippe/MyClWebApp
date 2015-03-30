'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:slider
 * @description
 * # slider
 */
 // var clApp = angular.module('webappApp', [
 //     'ngAnimate',
 //     'ngCookies',
 //     'ngResource',
 //     'ngRoute',
 //     'ngSanitize',
 //     'ngTouch'
 //   ]);

clApp.directive('slider', function ($timeout) {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        images: '=' //,
        // imageDots: '='
      },
      link: function (scope, elem, attrs) {

      		scope.currentIndex = 0;

      		scope.next=function(){
      			scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
      		};

      		scope.prev=function(){
      			scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
      		};

          scope.goTo = function(index){
            scope.currentIndex = index;
            console.log('test index', index);
          };

      		scope.$watch('currentIndex',function(){

            // scope.imageDots.forEach(function(imageDot){
            //   imageDot.border = 0;
            // });

      			scope.images.forEach(function(image){
      				image.visible = false;
      			});

            // scope.imageDots[scope.currentIndex].border = 2;
      			scope.images[scope.currentIndex].visible=true;
      		});

      		/* Start: For Automatic slideshow*/

      		var timer;

      		var sliderFunc=function(){
      			timer = $timeout(function(){
      				scope.next();
      				timer = $timeout(sliderFunc,7000);
      			},7000);
      		};

      		sliderFunc();

      		scope.$on('$destroy',function(){
      			$timeout.cancel(timer);
      		});

      		/* End : For Automatic slideshow*/

          },
      templateUrl: '../views/slider.html'
    };
  });

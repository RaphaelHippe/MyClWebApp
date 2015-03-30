'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('LoginCtrl', function ($scope, close) {
    $scope.modalTitle = 'Login to use all our services!';
    $scope.modalSubmit = 'Login';
    $scope.close = function(result) {
     close(result, 500); // close, but give 500ms for bootstrap to animate
    };


  });

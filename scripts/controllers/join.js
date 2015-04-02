'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('JoinCtrl', function ($scope, close) {
    $scope.modalTitle = 'Join CompeteLeague today!';
    $scope.modalSubmit = 'Join';
    $scope.test = 'eric';
    $scope.template = 'views/join.html';
    $scope.close = function(result) {
     close(result, 500); // close, but give 500ms for bootstrap to animate
    };
  });

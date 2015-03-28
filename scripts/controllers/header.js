'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('HeaderCtrl', function ($scope, Currentuser) {
    $scope.loggedIn = Currentuser.isLoggedIn();
    $scope.currentUser = Currentuser.getCurrentUser();


    $scope.loggMeOut = function(){
      Currentuser.loggMeOut();
      $scope.loggedIn = Currentuser.isLoggedIn();
    };

    $scope.loggMeIn = function(){
      Currentuser.loggMeIn();
      $scope.loggedIn = Currentuser.isLoggedIn();
    }


    console.log($scope.loggedIn);
    console.log($scope.currentUser);
  });

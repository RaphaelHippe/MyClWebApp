'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('HeaderCtrl', function ($scope, Currentuser, ModalService, $timeout) {
    $scope.loggedIn = Currentuser.isLoggedIn();
    $scope.currentUser = Currentuser.getCurrentUser();


    $scope.showJoin = function(){
      ModalService.showModal({
        templateUrl: 'views/modal.html',
        controller: 'JoinCtrl'
      }).then(function(modal){
        modal.element.modal();
        modal.close.then(function(result){
          $scope.message = 'You said ' + result;
          console.log($scope.message);
        });
      });
    };

    $scope.showLogin = function(){
      ModalService.showModal({
        templateUrl: 'views/modal.html',
        controller: 'LoginCtrl'
      }).then(function(modal){
        modal.element.modal();
        modal.close.then(function(result){
          if (result === 'login') {
            $timeout(function () {
              loggMeIn();

            });
          }
        });
      });
    };

    $scope.loggMeOut = function(){
      $scope.loggedIn = Currentuser.loggMeOut();
    };

    var loggMeIn = function(){
      $scope.loggedIn = Currentuser.loggMeIn();
    };
    // console.log($scope.loggedIn);
    // console.log($scope.currentUser);
  });

'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('ProfileCtrl', function ($scope, Currentuser) {

    $scope.myCurrentUser = Currentuser;
    $scope.loggedIn = Currentuser.isLoggedIn();
    $scope.currentUser = Currentuser.getCurrentUser();

    $scope.$watch('myCurrentUser.isLoggedIn()', function (newValue, oldValue) {
      // console.log('profile loggedIN' ,$scope.loggedIn);
      console.log('newVal', newValue, 'oldVal', oldValue);
      if (newValue !== oldValue) {
        $scope.loggedIn = newValue;
      }
    });


  });

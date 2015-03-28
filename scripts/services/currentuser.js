'use strict';

/**
 * @ngdoc service
 * @name webappApp.currentuser
 * @description
 * # currentuser
 * Service in the webappApp.
 */
angular.module('webappApp')
  .service('Currentuser', function Currentuser() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    // cus = current user service
    // my variables
    var cus = {};

    var bspUser = {
      userID: 0, // 0 - * index of user (INTEGER)
      displayName: 'Youchra', //The display name of the user
      username: 'admin', //username of the user. Used for logging in
      userpw: 'competeleague', //userpassword. Used for logging in
      player: false, //Is player in a league or not (BOOLEAN)
      playerRank: 0, //The Rank of the player: 0 = no player, 1 = sub, 2 = player, 3 = viceCaptain, 4 = captain (INTEGER)
      staff: true, //is staff member or not (BOOLEAN)
      staffRank: 10 // The rank 10 = admin for now (INTEGER)
    };

    cus._loggedIn = true;

    cus._currentUser = bspUser;



    // API USAGE
    cus._isLoggedIn = function(){
      return cus._loggedIn;
    };

    cus._getCurrentUser = function(){
      return cus._currentUser;
    };

    cus._loggMeOut = function(){
      cus._loggedIn = false;
      console.log('test');
      // more later
    };

    cus._loggMeIn = function(){
      cus._loggedIn = true;
      // more later
    };

    cus._joinCompeteLeague = function(){
      // do something
    }





    // PUBLIC API

    return {
      isLoggedIn: function(){
        return cus._isLoggedIn();
      },
      getCurrentUser: function(){
        return cus._getCurrentUser();
      },
      loggMeOut: function(){
        return cus._loggMeOut();
      },
      loggMeIn: function(){
        return cus._loggMeIn();
      },
      joinCompeteLeague: function(){
        return cus._joinCompeteLeague();
      }
    };


  });

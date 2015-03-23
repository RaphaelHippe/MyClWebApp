'use strict';

/**
 * @ngdoc service
 * @name webappApp.DataBaseImage
 * @description
 * # DataBaseImage
 * Service in the webappApp.
 */
 // var clApp = angular.module('webappApp', [
 //     'ngAnimate',
 //     'ngCookies',
 //     'ngResource',
 //     'ngRoute',
 //     'ngSanitize',
 //     'ngTouch'
 //   ]);

clApp.factory('Databaseimage', function Databaseimage() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    //Safe srv area
    var srv = {};

    srv._users = [
      {
        userID: 0, // 0 - * index of user (INTEGER)
        displayName: 'CL Admin', //The display name of the user
        username: 'admin', //username of the user. Used for logging in
        userpw: 'competeleague', //userpassword. Used for logging in
        player: false, //Is player in a league or not (BOOLEAN)
        playerRank: 0, //The Rank of the player: 0 = no player, 1 = sub, 2 = player, 3 = viceCaptain, 4 = captain (INTEGER)
        staff: true, //is staff member or not (BOOLEAN)
        staffRank: 10 // The rank 10 = admin for now (INTEGER)
      },
      {
        userID: 1, // 0 - * index of user (INTEGER)
        displayName: 'Youchra', //The display name of the user
        username: 'youchra', //username of the user. Used for logging in
        userpw: 'youchra', //userpassword. Used for logging in
        player: false, //Is player in a league or not (BOOLEAN)
        playerRank: 0, //The Rank of the player: 0 = no player, 1 = sub, 2 = player, 3 = viceCaptain, 4 = captain (INTEGER)
        staff: true, //is staff member or not (BOOLEAN)
        staffRank: 8 // The rank 10 = admin for now (INTEGER)
      },
      {
        userID: 2, // 0 - * index of user (INTEGER)
        displayName: 'mindmesser', //The display name of the user
        username: 'mindmesser', //username of the user. Used for logging in
        userpw: 'mindmesser', //userpassword. Used for logging in
        player: false, //Is player in a league or not (BOOLEAN)
        playerRank: 0, //The Rank of the player: 0 = no player, 1 = sub, 2 = player, 3 = viceCaptain, 4 = captain (INTEGER)
        staff: true, //is staff member or not (BOOLEAN)
        staffRank: 8 // The rank 10 = admin for now (INTEGER)
      },
      {
        userID: 3, // 0 - * index of user (INTEGER)
        displayName: 'Captain', //The display name of the user
        username: 'captain', //username of the user. Used for logging in
        userpw: 'captain', //userpassword. Used for logging in
        player: true, //Is player in a league or not (BOOLEAN)
        playerRank: 4, //The Rank of the player: 0 = no player, 1 = sub, 2 = player, 3 = viceCaptain, 4 = captain (INTEGER)
        staff: false, //is staff member or not (BOOLEAN)
        staffRank: 0 // The rank 10 = admin for now (INTEGER)
      },
      {
        userID: 4, // 0 - * index of user (INTEGER)
        displayName: 'player', //The display name of the user
        username: 'player', //username of the user. Used for logging in
        userpw: 'player', //userpassword. Used for logging in
        player: true, //Is player in a league or not (BOOLEAN)
        playerRank: 2, //The Rank of the player: 0 = no player, 1 = sub, 2 = player, 3 = viceCaptain, 4 = captain (INTEGER)
        staff: false, //is staff member or not (BOOLEAN)
        staffRank: 0 // The rank 10 = admin for now (INTEGER)
      },

    ];
    //service
    srv.getUserByUserId = function(userId){
      for(var i = 0, n = srv._users.length; i < n; i++){
        if(userId === srv_users[i].userId){
          return angular.copy(srv._users[i]);
        }
      }
      return null;
    };

    srv.getAllUsers = function(){
      return angular.copy(srv._users);
    };

    srv.createNewUser = function(user){
      srv._users.push(user);
    };

    //public api
    return {
      getUserByUserId: function(userId){
        return srv.getUserByUserId(userId);
      },
      getAllUsers: function(){
        return srv.getAllUsers();
      },
      createNewUser: function(user){
        srv.createNewUser(user);
      }
    };
  });

'use strict';

/**
 * @ngdoc overview
 * @name webappApp
 * @description
 * # webappApp
 *
 * Main module of the application.
 */
var clApp = angular.module('webappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularModalService'
  ]);

  clApp.config(function ($routeProvider) {
    $routeProvider
    /* MAIN NAV ROUTES */
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl' //Main/homeCtrl
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl' //Main/homeCtrl
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl' //aboutCtrl
      })
      .when('/leagues', {
        templateUrl: 'views/leagues.html',
        controller: 'AboutCtrl' //leaguesCtrl
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'AboutCtrl' //newsCtrl
      })
      .when('/sponsors', {
        templateUrl: 'views/sponsors.html',
        controller: 'AboutCtrl' //sponsorsCtrl
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'AboutCtrl' //contactCtrl
      })
    /* PP and TAC*/
      .when('/privacyPolicy',{
        templateUrl: 'views/privacyPolicy.html',
        controller: 'AboutCtrl' //privacyPolicyCtrl
      })
      .when('/termsAndConditions', {
        templateUrl: 'views/termsAndConditions.html',
        controller: 'AboutCtrl' //termsAndConditionsCtrl
      })
    /* PROFIEL and ACCOUNT*/
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
    /* LEAGUES ROUTES*/
      .when('/leaguesSilverPremier', {
          templateUrl: 'views/leaguesDetails.html',
          controller: 'AboutCtrl' //silverPremierCtrl
      })
      .when('leaguesPlatinumPremier', {
          templateUrl: 'views/leaguesDetails.html',
          controller: 'AboutCtrl' //platinumPremierCtrl
      })
      .when('leaguesDiamondPremier', {
          templateUrl: 'views/leaguesDetails.html',
          controller: 'AboutCtrl' //diamondPremierCtrl
      })
      .when('/leaguesSilverOpen', {
          templateUrl: 'views/leaguesDetails.html',
          controller: 'AboutCtrl' //silverOpenCtrl
      })
      .when('leaguesPlatinumOpen', {
          templateUrl: 'views/leaguesDetails.html',
          controller: 'AboutCtrl' //platinumOpenCtrl
      })
      .when('leaguesDiamondOpen', {
          templateUrl: 'views/leaguesDetails.html',
          controller: 'AboutCtrl' //diamondOpenCtrl
      })
        .otherwise({
          redirectTo: '/'
      });
});

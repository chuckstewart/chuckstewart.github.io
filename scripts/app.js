'use strict';

/**
 * @ngdoc overview
 * @name portfolio3App
 * @description
 * # portfolio3App
 *
 * Main module of the application.
 */
angular
  .module('portfolio3App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'angular-carousel-3d',
    'ngSanitize',
    'duScroll',
    'ngTouch',
    'portfolio3App.directives'
  ])


  .config(function ($routeProvider) {

    $routeProvider
      .when('/', {
        url: "/main",
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc overview
 * @name sofeApp
 * @description
 * # sofeApp
 *
 * Main module of the application.
 */
angular
  .module('sofeApp', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'todos'
      })
      .when('/todo/:id', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl',
        controllerAs: 'todo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

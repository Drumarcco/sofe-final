'use strict';

/**
 * @ngdoc function
 * @name sofeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sofeApp
 */
angular.module('sofeApp')
  .controller('MainCtrl', function($scope, $http, $location) {
    $scope.todos = [];
    $scope.newTodo = {
      todo: {
        title: '',
        isCompleted: false
      }
    };

    $http.get('http://api.mylist.io/v1/todos')
      .success(function(response) {
        $scope.todos = response.todos;
        console.log(response.todos);
      })
      .error(function(data) {
        console.log(data);
      });

      $scope.goTo = function(id) {
        $location.path('/todo/' + id);
      };

    $scope.delete = function(id) {
      $http.delete('http://api.mylist.io/v1/todos/' + id)
        .success(function() {
          console.log("Wuu se borro!");
        })
        .error(function(data) {
          console.log(data);
        });

    };

    $scope.put = function(todo) {
      $http.put('http://api.mylist.io/v1/todos/' + todo._id, {
          todo
        })
        .success(function(response) {
          console.log(response);
        })
        .error(function(data) {
          console.log(data);
        });
    };

    $scope.post = function() {
      $http.post('http://api.mylist.io/v1/todos', $scope.newTodo)
        .success(function(response) {
          $scope.todos.push(response.todo);
        })
        .error(function(error) {
          console.log(error);
        });
    };
  })

.controller('TodoCtrl', function($scope, $http, $routeParams) {
  $scope.todo = {};
  $scope.get = function() {
    $http.get('http://api.mylist.io/v1/todos/' + $routeParams.id)
      .success(function(response) {
        $scope.todo = response.todo;
      })
      .error(function(error) {
        console.log(error);
      });
  };

  $scope.get();
});

'use strict';

angular.module('AngularJsTestson')
  .controller('HomeController', function($scope, $http, _cartItem_){

    $scope.message = 'Hello AngularJsTestson home';
    $scope.cartItems = [];

    $http.get('/api/products').success(function(data) {
      $scope.products = data;
    });

/*
    $scope.addCart = function(index) {
      cartItem.add($scope.products[index]);
    };
*/

    $scope.addCart = function(products) {
      cartItem.add(products);
    };

    $scope.CartItemCount = function(){
      return cartItem.items.length;
    };

  });

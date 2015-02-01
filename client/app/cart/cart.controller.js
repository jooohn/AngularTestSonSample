'use strict';

angular.module('AngularJsTestson')
  .controller('CartCtrl', function ($scope, cartItem) {

    $scope.cartItems = cartItem.getCartItems();

    $scope.addCart = function(product) {
      cartItem.add(product);
    };

    $scope.removeCart = function(product) {
      cartItem.remove(product.productId);
    };

    $scope.clearCart = function() {
      cartItem.clear();
    };
  });

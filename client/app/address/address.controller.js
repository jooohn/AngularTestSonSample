'use strict';

angular.module('AngularJsTestson')
  .controller('AddressCtrl', function ($scope, $state, cartItem, Purchase, $window) {
    if(cartItem.getCartItems().length === 0) {
      $state.go('main.app.home');
    }
    $scope.isLoading = false;
    $scope.order = Purchase;

    $scope.payment = function(){
      $scope.isLoading=true;
      $scope.order.purchases = cartItem.getCartItems();
      Purchase.order(function(data){
        $window.alert(data.message);
        cartItem.clear();
        $state.go('main.app.home');
      });
    };
  });

'use strict';

angular.module('AngularJsTestson')
  .controller('AddressCtrl', function ($scope, $state, cartItem, Purchase) {
    $scope.isLoading = false;
    $scope.order = Purchase;

    console.log($scope.order.purchases);
    $scope.payment = function(){
      $scope.isLoading=true;
      $scope.order.purchases = cartItem.getCartItems();
      Purchase.order(function(data){
        window.alert(data.message);
        cartItem.clear();
        $state.go('main.app.home');
      });
    };
  });

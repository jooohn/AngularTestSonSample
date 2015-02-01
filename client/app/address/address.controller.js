'use strict';

angular.module('AngularJsTestson')
  .controller('AddressCtrl', function ($scope, $state, cartItem, Purchase, $log) {
    $scope.isLoading = false;
    $scope.payment = function(){
      $scope.isLoading=true;
      var p = new Purchase();
      p.firstName = $scope.order.firstName;
      p.lastName = $scope.order.lastName;
      p.tel = $scope.order.tel;
      p.address = $scope.order.address;
      p.mailaddress = $scope.order.mailaddress;
      p.purchases = cartItem.getCartItems();

      $log.info(p);
      p.$save(function(data){
        window.alert(data.message);
        cartItem.clear();
        $state.go('main.app.home');
      });
    };
  });

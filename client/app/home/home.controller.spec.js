'use strict';

describe('Controller: HomeController', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var HomeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_cartItem_) {
   var cartItems = _cartItem_;
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeController', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });

/*
  describe('HomeController',function(){
    it('$scope',function(){
      expect(scope.message).toBe('Hello AngularJsTestson home');
    })
  });
*/

/*
  describe('HomeController',function(){
    beforeEach(function(){
      scope.cartItems = [0,1,2,3];
    });
    it('$scope',function(){
      expect(scope.cartItems.length).toBe(1);
    });
  });
*/

  describe('HomeController',function(){
    beforeEach(function(){
      scope.addCart = [0,1,2,3];
    });
    it('$scope',function(product){
      expect(scope.addCart(product)).toBe(1);
    });
  });

});

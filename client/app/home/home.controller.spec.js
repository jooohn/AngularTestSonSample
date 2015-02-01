'use strict';

describe('Controller: HomeController', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var HomeCtrl, scope;
  var cartItems;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_cartItem_) {
   cartItems = _cartItem_;
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
    var cartItems, bar = null;

    beforeEach(function() {
      cartItems = {
        add: function(product) {
          bar = product;
        }
      };
    //spyOn
      spyOn(cartItems, 'add');
      cartItems.add();
    });

    //呼び出し回数を追跡
    it("tracks its number of calls", function() {
      expect(cartItems.add.calls.length).toEqual(3);
    });
  });

});

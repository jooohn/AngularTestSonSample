'use strict';

describe('Controller: HomeController', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var HomeCtrl, scope;
  var cartItem;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_cartItem_) {
   cartItem = _cartItem_;
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeController', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });


  //messageTest_describe
  describe('HomeController',function(){
    it('$scope',function(){
      expect(scope.message).toBe('Hello AngularJsTestson home');
    })
  });


  //cartItemTest_beforeEach
  describe('HomeController',function(){
    beforeEach(function(){
      scope.cartItem = [0,1,2,3];
    });
    it('$scope',function(){
      expect(scope.cartItem.length).toBe(4);
    });
  });


  describe('HomeController',function(){
    //spyOn
    beforeEach(function() {
      spyOn(cartItem, 'add');
      cartItem.add();
    });
    //呼び出し回数を追跡
    it("tracks its number of calls", function() {
      expect(cartItem.add.calls.length).toEqual(1);
    });
  });

});

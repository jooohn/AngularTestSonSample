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
    var foo, bar = null;

    beforeEach(function() {
      foo = {
        setBar: function(value) {
          bar = value;
        }
      };

      spyOn(foo, 'setBar');

      foo.setBar(123);
      foo.setBar(456, 'another param');
      foo.setBar(456, 'another param');
    });

    //呼び出し回数を追跡します
    it("tracks its number of calls", function() {
      expect(foo.setBar.calls.length).toEqual(3);
    });
  });

});

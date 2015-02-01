'use strict';

describe('Controller: CartCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var CartCtrl, scope, CartItem, testProduct1;
  testProduct1 = {
    productId: 1
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, cartItem) {
    scope = $rootScope.$new();
    CartItem = cartItem;
    CartCtrl = $controller('CartCtrl', {
      $scope: scope
    });

    spyOn(CartItem, 'add');
    spyOn(CartItem, 'remove');
    spyOn(CartItem, 'clear');
  }));

  it('should cart items empty', function() {
    expect(scope.cartItems.length).toEqual(0);
    expect(CartItem.add).not.toHaveBeenCalled();
    expect(CartItem.remove).not.toHaveBeenCalled();
    expect(CartItem.clear).not.toHaveBeenCalled();
  });

  it('should call cartItem.add', function() {
    scope.addCart(testProduct1);
    expect(CartItem.add).toHaveBeenCalled();
    expect(CartItem.add.calls.length).toEqual(1);
  });
  it('should call cartItem.remove', function() {
    scope.removeCart(testProduct1);
    expect(CartItem.remove).toHaveBeenCalled();
    expect(CartItem.remove.calls.length).toEqual(1);
  });
  it('should call cartItem.clear', function() {
    scope.clearCart();
    expect(CartItem.clear).toHaveBeenCalled();
    expect(CartItem.clear.calls.length).toEqual(1);
  });
});

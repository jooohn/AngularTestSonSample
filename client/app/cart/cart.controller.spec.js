'use strict';

describe('Controller: CartCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var CartCtrl, scope, CartItem, testProduct1, testProduct2;
  testProduct1 = { productId: 1 };
  testProduct2 = { productId: 2 };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, cartItem) {
    scope = $rootScope.$new();
    CartItem = cartItem;
    spyOn(CartItem, 'getCartItems')
      .andReturn(['dummy1', 'dummy2']);
    spyOn(CartItem, 'add');
    spyOn(CartItem, 'remove');
    spyOn(CartItem, 'clear');

    CartCtrl = $controller('CartCtrl', {
      $scope: scope
    });
  }));

  it('should spied method called expected times', function() {
    expect(CartItem.getCartItems).toHaveBeenCalled();
    expect(CartItem.getCartItems.calls.length).toEqual(1);

    expect(CartItem.add).not.toHaveBeenCalled();
    expect(CartItem.remove).not.toHaveBeenCalled();
    expect(CartItem.clear).not.toHaveBeenCalled();
  });

  it('should cartItems set 2 items', function() {
    expect(scope.cartItems.length).toEqual(2);
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

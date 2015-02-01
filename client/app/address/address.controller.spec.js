'use strict';

describe('Controller: AddressCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var AddressCtrl, scope, $httpBackend, _cartItem;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, cartItem) {
    scope = $rootScope.$new();
    _cartItem = cartItem;
    _cartItem.add({
      price: 2000,
      productId: 10,
      productName: 'productName'
    });
    AddressCtrl = $controller('AddressCtrl', {
      $scope: scope
    });
  }));
  beforeEach(inject(function($injector, $templateCache){
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('components/views/navbar/navbar.html').respond(200, '');
    $httpBackend.whenGET('components/views/footer/footer.html').respond(200, '');
    $httpBackend.whenGET('app/home/home.html').respond(200, '');
    $templateCache.put('app/frame/main.html', 'components/views/navbar/navbar.html', 'components/views/footer/footer.html');
  }));
  beforeEach(inject(function($state){
    spyOn($state, 'go');
  }));
  beforeEach(inject(function($window){
    spyOn($window, 'alert');
  }));

  it('should set isLoading to be true after $scope.payment called', inject(function ($state, $window) {
    $httpBackend.expectPOST('/api/purchases').respond({'status':'ok','message':'transaction completed'});
    expect(scope.isLoading).toBe(false);
    scope.payment();
    expect(scope.isLoading).toBe(true);
    $httpBackend.flush();
    expect($window.alert).toHaveBeenCalledWith('transaction completed');
    expect($state.go).toHaveBeenCalledWith('main.app.home');
    expect(_cartItem.getCartItems().length).toBe(0);
  }));
});

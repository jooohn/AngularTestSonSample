'use strict';

describe('Controller: NavbarController', function(){
  // load the controller's module
  beforeEach(module('AngularJsTestson'));

  var NavbarCtrl, scope;

    // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarCtrl = $controller('NavbarController', {
      $scope: scope
    });
  }));
  it('has 1 item in scope.menu', function(){
    expect(scope.menu.length).toBe(1);
  });
});

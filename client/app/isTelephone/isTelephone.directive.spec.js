'use strict';

describe('Directive: isTelephone', function () {

  // load the directive's module
  beforeEach(module('AngularJsTestson'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('can be instantiated via attribute', inject(function($compile){
    element = angular.element('<input type="tel" is-telephone ng-model="order.tel">');
    element = $compile(element)(scope);
    expect(element).not.toBeNull();
  }));

});

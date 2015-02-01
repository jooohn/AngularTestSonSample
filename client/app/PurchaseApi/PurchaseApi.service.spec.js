'use strict';

describe('Service: PurchaseApi', function () {

  // load the service's module
  beforeEach(module('AngularJsTestson'));

  // instantiate service
  var PurchaseApi;
  beforeEach(inject(function (_PurchaseApi_) {
    PurchaseApi = _PurchaseApi_;
  }));

  it('should do something', function () {
    expect(!!PurchaseApi).toBe(true);
  });

});

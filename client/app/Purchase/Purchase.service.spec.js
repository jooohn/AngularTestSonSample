/* jshint camelcase: false */

'use strict';

describe('Service: Purchase', function () {

  // load the service's module
  beforeEach(module('AngularJsTestson'));

  // instantiate service
  var Purchase;
  beforeEach(inject(function (_Purchase_) {
    Purchase = _Purchase_;
  }));

  it('should do something', function () {
    expect(!!Purchase).toBe(true);
  });

});

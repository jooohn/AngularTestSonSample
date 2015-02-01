/* jshint camelcase: false */

'use strict';

describe('Service: Purchase', function () {
  var $httpBackend;
  // load the service's module
  beforeEach(module('AngularJsTestson'));

  // instantiate service
  var Purchase;
  beforeEach(inject(function (_Purchase_) {
    Purchase = _Purchase_;
  }));

  beforeEach(inject(function($injector){
    $httpBackend = $injector.get('$httpBackend');
  }));

  describe('$save', function(){
    it('should return status ok', inject(function(Purchase){
      $httpBackend.expectPOST('/api/purchases').respond({'status':'ok','message':'transaction completed'});
      var p = new Purchase();
      p.$save();
      $httpBackend.flush();
      expect(p.status).toBe('ok');
    }));
  });
});

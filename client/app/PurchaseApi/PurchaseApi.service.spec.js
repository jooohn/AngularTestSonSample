/* jshint camelcase:false */
'use strict';

describe('Service: PurchaseApi', function () {

  // load the service's module
  beforeEach(module('AngularJsTestson'));

  // instantiate service
  var PurchaseApi, $httpBackend;
  beforeEach(inject(function (_PurchaseApi_) {
    PurchaseApi = _PurchaseApi_;
  }));

  beforeEach(inject(function($injector){
    $httpBackend = $injector.get('$httpBackend');
  }));

  describe('$save', function(){
    it('should post something', inject(function(PurchaseApi) {
      $httpBackend.expectPOST('/api/purchases').respond({'status':'ok','message':'transaction completed'});
      var p = new PurchaseApi();
      p.$save();
    }));
  });

});

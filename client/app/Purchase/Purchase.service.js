'use strict';

angular.module('AngularJsTestson')
  .service('Purchase', function (PurchaseApi) {
    this.order = function(callback){
      var p = new PurchaseApi();
      p.firstName = this.firstName;
      p.lastName = this.lastName;
      p.tel = this.tel;
      p.address = this.address;
      p.mailaddress = this.mailaddress;
      p.purchases = this.purchases;
      p.$save(callback);
      return p;
    };
  });

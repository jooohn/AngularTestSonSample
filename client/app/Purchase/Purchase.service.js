'use strict';

angular.module('AngularJsTestson')
  .service('Purchase', function ($resource) {
    var Purchase = $resource('/api/purchases', {}, {
      save: {
        method: 'POST'
      }
    });
    return Purchase;
  });

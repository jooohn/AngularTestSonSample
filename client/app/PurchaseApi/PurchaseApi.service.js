'use strict';

angular.module('AngularJsTestson')
  .service('PurchaseApi', function ($resource) {
    return $resource('/api/purchases');
  });

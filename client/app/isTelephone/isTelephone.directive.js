'use strict';

angular.module('AngularJsTestson')
  .directive('isTelephone', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, element, attrs, ctrl) {

        var reg = /^[0-9]+$/;

        ctrl.$parsers.unshift(function(value){
          ctrl.$setValidity('telephone', reg.test(value));
          return value;
        });
      }
    };
  });

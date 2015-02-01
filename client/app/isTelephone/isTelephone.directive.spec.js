'use strict';

describe('Directive: isTelephone', function () {

  // load the directive's module
  beforeEach(module('AngularJsTestson'));

  var element, scope, form;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<form name="form"><input type="tel" name="telephone" is-telephone ng-model="model.telephone"></form>');
    scope.model = {telephone: null};
    element = $compile(element)(scope);
    form = scope.form;
  }));

  it('accepts digits only', function(){
    form.telephone.$setViewValue('0123456789');
    scope.$digest();
    expect(form.telephone.$valid).toBe(true);
    expect(scope.model.telephone).toEqual('0123456789');
  });

  it('rejects blank string', function(){
    form.telephone.$setViewValue('');
    scope.$digest();
    expect(form.telephone.$invalid).toBe(true);
  });

  it('rejects string with space', function(){
    form.telephone.$setViewValue(' ');
    scope.$digest();
    expect(form.telephone.$invalid).toBe(true);
  });

  it('rejects string with non-digits', function(){
    form.telephone.$setViewValue('03-1234-5678');
    scope.$digest();
    expect(form.telephone.$invalid).toBe(true);
    form.telephone.$setViewValue('+811234567890');
    scope.$digest();
    expect(form.telephone.$invalid).toBe(true);
  });
});

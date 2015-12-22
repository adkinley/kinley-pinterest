'use strict';

describe('Directive: signature', function () {

  // load the directive's module and view
  beforeEach(module('kinleyPinterestApp'));
  beforeEach(module('app/signature/signature.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<signature></signature>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the signature directive');
  }));
});
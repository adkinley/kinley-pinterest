'use strict';

describe('Controller: RecentsCtrl', function () {

  // load the controller's module
  beforeEach(module('kinleyPinterestApp'));

  var RecentsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RecentsCtrl = $controller('RecentsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

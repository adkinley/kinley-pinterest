'use strict';

describe('Service: finDB', function () {

  // load the service's module
  beforeEach(module('kinleyPinterestApp'));

  // instantiate service
  var finDB;
  beforeEach(inject(function (_finDB_) {
    finDB = _finDB_;
  }));

  it('should do something', function () {
    expect(!!finDB).toBe(true);
  });

});

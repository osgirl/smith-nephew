(function() {
  'use strict';

  describe('service request', function() {
    var request;

    beforeEach(module('smithNephew'));
    beforeEach(inject(function(_request_) {
      request = _request_;
    }));

    it('should be registered', function() {
      expect(request).not.toEqual(null);
    });

    describe('get request function', function() {
      it('should exist', function() {
        expect(request.getRequest).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = request.getRequest();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 3).toBeTruthy();
      });
    });
  });
})();

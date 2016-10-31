(function() {
  'use strict';

  describe('service news', function() {
    var news;

    beforeEach(module('smithNephew'));
    beforeEach(inject(function(_news_) {
      news = _news_;
    }));

    it('should be registered', function() {
      expect(news).not.toEqual(null);
    });

    describe('article function', function() {
      it('should exist', function() {
        expect(news.getArticle).not.toEqual(null);
      });

      it('should return array of object', function() {
        var data = news.getArticle();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 3).toBeTruthy();
      });
    });
  });
})();

(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('smithNephew'));
    beforeEach(inject(function(_$controller_, _news_) {
      spyOn(_news_, 'getArticle').and.returnValue([{}, {}, {}, {}]);

      vm = _$controller_('MainController');
    }));

    it('should define more than 4 articles', function() {
      expect(angular.isArray(vm.newsArticles)).toBeTruthy();
      expect(vm.newsArticles.length === 4).toBeTruthy();
    });
  });
})();

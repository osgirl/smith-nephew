(function () {
	'use strict';

	describe('controllers', function () {
		var vm;

		beforeEach(module('smithNephew'));
		beforeEach(inject(function (_$controller_, _news_, _request_) {
			spyOn(_news_, 'getArticle').and.returnValue([{}, {}, {}, {}]);
			spyOn(_request_, 'getRequest').and.returnValue([{}, {}, {}, {}]);

			vm = _$controller_('MainController');
		}));

		it('should define more than 4 articles', function () {
			expect(angular.isArray(vm.newsArticles)).toBeTruthy();
			expect(vm.newsArticles.length === 4).toBeTruthy();
		});

		it('should define more than 4 requests', function () {
			expect(angular.isArray(vm.requests)).toBeTruthy();
			expect(vm.requests.length === 4).toBeTruthy();
		});
	});
})();

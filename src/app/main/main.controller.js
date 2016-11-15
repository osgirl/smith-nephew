(function () {
	'use strict';

	angular
		.module('smithNephew')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController(news, request, search, moment) {
		var vm = this;

		vm.newsArticles = [];
		vm.requests = [];

		activate();

		function activate() {
			getNewsArticle();
			getRequestItem();
		}

		function getNewsArticle() {
			vm.newsArticles = news.getArticle();

			angular.forEach(vm.newsArticles, function (article) {
				article.relativeDate = moment(article.date, 'YYYY MM DD').fromNow();
			});
		}

		function getRequestItem() {
			vm.requests = request.getRequest();

			angular.forEach(vm.requests, function (item) {
				item.relativeDate = moment(item.date, 'YYYY MM DD').fromNow();
			});
		}

		vm.getQuestions = function(val) {
			return search.getQuestions(val);
		};
	}
})();

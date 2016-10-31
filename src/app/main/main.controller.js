(function () {
	'use strict';

	angular
		.module('smithNephew')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController(news, moment) {
		var vm = this;

		vm.newsArticles = [];

		activate();

		function activate() {
			getNewsArticle();
		}

		function getNewsArticle() {
			vm.newsArticles = news.getArticle();

			angular.forEach(vm.newsArticles, function (article) {
				article.relativeDate = moment(article.date).fromNow();
			});
		}
	}
})();

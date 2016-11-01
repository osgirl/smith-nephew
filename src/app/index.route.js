(function () {
	'use strict';

	angular
		.module('smithNephew')
		.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				views: {
					content: {
						templateUrl: 'app/main/main.html',
						controller: 'MainController',
						controllerAs: 'main'
					},
					footer: {
						templateUrl: 'app/templates/footer.html'
					}
				}
			});

		$urlRouterProvider.otherwise('/');
	}

})();

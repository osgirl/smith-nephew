(function () {
	'use strict';

	angular
		.module('smithNephew')
		.config(config);

	/** @ngInject */
	function config($logProvider) {
		// Enable log
		$logProvider.debugEnabled(true);

	}

})();

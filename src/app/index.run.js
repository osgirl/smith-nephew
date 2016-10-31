(function () {
	'use strict';

	angular
		.module('smithNephew')
		.run(runBlock);

	/** @ngInject */
	function runBlock($log) {

		$log.debug('runBlock end');
	}

})();

(function () {
	'use strict';

	angular
		.module('smithNephew')
		.directive('primaryNavbar', primaryNavbar);

	/** @ngInject */
	function primaryNavbar() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/navbar/navbar.html',
			scope: {
				//creationDate: '='
			},
			controller: NavbarController,
			controllerAs: 'vm',
			bindToController: true
		};

		return directive;

		/** @ngInject */
		function NavbarController() {
			var vm = this;

			// "vm.creationDate" is available by directive option "bindToController: true"
			//vm.relativeDate = moment(vm.creationDate).fromNow();
			vm.isNavCollapsed = true;
			vm.isCollapsed = false;
			vm.isCollapsedHorizontal = false;
		}
	}

})();

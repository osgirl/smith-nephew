(function () {
	'use strict';

	angular
		.module('smithNephew')
		.service('request', request);

	/** @ngInject */
	function request() {
		var data = [
			{
				'id': 'RQ00291',
				'item': 'iPhone 6s',
				'date': '2016 11 06'
			},
			{
				'id': 'RQ00290',
				'item': 'MacBook Pro - 15 inch',
				'date': '2016 11 01'
			},
			{
				'id': 'RQ00289',
				'item': 'iPad mini',
				'date': '2016 10 30'
			},
			{
				'id': 'RQ00288',
				'item': 'Monitor - 27 inch',
				'date': '2016 10 27'
			},
			{
				'id': 'RQ00287',
				'item': 'PC Mouse',
				'date': '2016 10 17'
			}
		];

		this.getRequest = getRequest;

		function getRequest() {
			return data;
		}
	}

})();

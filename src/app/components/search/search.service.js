/**
 * Created by esko on 11/12/16.
 */
angular
	.module('smithNephew')
	.factory('search', search);

search.$inject = ['$http', '$log'];

/* @ngInject */
function search($http, $log) {
	var service = {
		getQuestions: getQuestions
	};

	return service;

	////////////////

	function getQuestions(val) {
		return $http.get('//api.stackexchange.com/2.2/search', {
			params: {
				order: 'desc',
				sort: 'activity',
				intitle: val,
				pagesize: 8,
				site: 'stackoverflow'
			}
		}).then(function(response){
			$log.log(response.data.items);
			return response.data.items.map(function(item){
				$log.log(item.title);
				return item.title;
			});
		});
	}


}

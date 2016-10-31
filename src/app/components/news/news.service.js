(function () {
	'use strict';

	angular
		.module('smithNephew')
		.service('news', news);

	/** @ngInject */
	function news() {
		var data = [
			{
				'title': 'New Portal is Live!',
				'date': '2016, 10, 30',
				'description': 'Proin sit amet quam quis urna interdum porta. Sed efficitur est mauris, sit amet feugiat est vestibulum quis. Nullam sed magna arcu. Nam ullamcorper turpis purus, ac rutrum lectus imperdiet non. Curabitur sit amet tincidunt lectus, vitae dapibus nibh. Etiam ac tincidunt odio. Vestibulum sapien ipsum, volutpat sed tellus ut, vulputate interdum dui. Aenean dapibus bibendum volutpat.',
				'url': 'http://gulpjs.com/'
			},
			{
				'title': 'Get Ready for Launch!',
				'date': '2016, 10, 24',
				'description': 'Pellentesque hendrerit odio sit amet cursus imperdiet. Integer egestas tellus ut neque aliquam dignissim. Nulla sem augue, consectetur pretium accumsan quis, blandit ac magna. Phasellus a mi diam. Donec malesuada vehicula sem, euismod sagittis enim finibus eu. Morbi nec nunc sit amet leo iaculis cursus et in tellus.',
				'url': 'http://getbootstrap.com/'
			},
			{
				'title': 'New Horizons',
				'date': '2016, 10, 17',
				'description': 'Sed bibendum turpis magna, sed laoreet tortor malesuada suscipit. Nullam ornare, ex non aliquet efficitur, sem urna ultrices dolor, id euismod enim neque eu tortor. Aliquam erat volutpat. Nullam pellentesque metus et nulla dictum, pharetra pharetra ligula congue. Sed at massa ut mi auctor varius a non nulla.',
				'url': 'https://github.com/sass/node-sass'
			},
			{
				'title': 'One More Time',
				'date': '2016, 10, 07',
				'description': 'Aenean rhoncus justo eget orci vehicula suscipit. Praesent ac sapien ut nunc venenatis ornare. Morbi nisl ante, tempus sed commodo eget, laoreet et tellus. Cras mattis ex magna, ac tempor erat pretium eget. Pellentesque feugiat iaculis suscipit. Donec vel egestas est.',
				'url': 'http://jasmine.github.io/'
			},
			{
				'title': 'New Beginnings!',
				'date': '2016, 09, 30',
				'description': 'Donec faucibus elementum ullamcorper. Duis sed est eu ex eleifend vulputate eu vel sapien. Suspendisse potenti. Quisque a quam blandit, ultrices erat rutrum, venenatis nibh. Fusce aliquam sem at tellus rutrum, convallis posuere mauris facilisis.',
				'url': 'http://karma-runner.github.io/'
			}
		];

		this.getArticle = getArticle;

		function getArticle() {
			return data;
		}
	}

})();

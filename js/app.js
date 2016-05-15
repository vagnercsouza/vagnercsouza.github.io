var GitHubPage = {
	init: function() {
		GitHubPage.initTooltip();
	},
	initTooltip: function() {
		$('[data-toggle="tooltip"]').tooltip();
	},
	initFullPage: function() {
		$('#fullpage').fullpage({
			'verticalCentered': false,
			'css3': true,
			'navigation': true,
			'navigationPosition': 'right'
		});
	}
};

window.onload = GitHubPage.init();

angular.module('app', [])
  	.controller('AppController', function($scope, $http) {
	    $http.get('projects.json').then(function(projects) {
			$scope.projects = projects.data;
			setTimeout(GitHubPage.initFullPage, 100);
	    });

	    $scope.projects = [];
	}
);
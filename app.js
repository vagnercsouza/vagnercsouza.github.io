angular.module('app', [])
  	.controller('AppController', function($scope, $http) {
	    $http.get('projects.json').then(function(projects) {
			$scope.projects = projects.data;
	    });

	    $scope.projects = [];
	}
);
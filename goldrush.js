angular.module('myApp',[])

var mainControllerFunc = function ($scope) {	
	// $scope.myHTML = <p>"I work"</p>
	$scope.coordinates = []

	$scope.click1 = function(event) {
		$scope.coordinates.push( {x:event.clientX,y:event.clientY} )
		console.log($scope.coordinates)
	}

}

angular.module('myApp').controller('mainController',['$scope', mainControllerFunc]);

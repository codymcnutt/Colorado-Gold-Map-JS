angular.module('myApp',[])

var mainControllerFunc = function ($scope) {	
	// $scope.myHTML = <p>"I work"</p>
	$scope.coordinates = []
 var textarray = ["I'm old", "I'm lost", "Grandma lives here", "Hardcore Donkeys Required Here", "Ain't no darn gold here", "Brrr, it's cold here", "I'm out of food", "Call 911", "This is fools gold", "OOOHHHH BOY, I'm rich", "Where's the gold", "I don't want silver", "On the big rock candy mountain", "I'm out of whiskey", "My donkey died", "Danielle found a nugget!!", "WTF", "There's Gold in Them Thar Hills!", "I've fallen and I can't get up", "There's a snake in my boot"]
var imagearray = ["images/01.png", "images/02.png", "images/03.png", "images/04.png", "images/05.png", "images/06.png", "images/07.png", "slack-imgs.png", "images/08.png", "images/09.png", "images/10.png", "images/11.png", "images/12.png", "images/13.png", "images/14.png", "images/15.png" ,"images/16.png"]
	$scope.click1 = function(event) {
	
		console.log($scope.coordinates)
		console.log(event)
		var r =Math.floor(Math.random() * textarray.length)
		var i =Math.floor(Math.random() * imagearray.length)
		$scope.coordinates.push( {x:event.pageX,y:event.pageY,text:textarray[r], image:imagearray[i]} )
	}

}

angular.module('myApp').controller('mainController',['$scope', mainControllerFunc]);

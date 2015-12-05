angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {})

.controller('DiscoverCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('DiscoverDetailCtrl', function($scope, $stateParams) {

})

.controller('MotivesCtrl', function($scope, MotivesService) {

  $scope.addMotive = function () {

  	var motive = {
  		title:"Tenpin Bowling",
  		foursquareId:"",
  		location:"",
  	}

	MotivesService.createMotive({
	  success: function(response) {
	  	console.log(response);
	  },
	  error: function(error) {
	  	console.log(error);
	  }
	});    
  }

})

.controller('ProfileCtrl', function($scope) {

});
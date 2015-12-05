angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {})

.controller('DiscoverCtrl', function($scope,$http) {

  var location = {
    longitude:"51.499840",
    latitude:"-0.5530055"
  }


$http({
  method: 'GET',
  url: 'https://api.foursquare.com/v2/venues/search?client_id=R3FGZMI124B1GQBTLAS45EZ5YC0TPT3VI0ZANLTUEROIORER&client_secret=2NM0Z15Z3NYGDGVQSFT2FOUDQZ4PPMB4L3GH3Y4HJKJALHBV&v=20130815&ll=51.499840,-0.5530055&query=',
}).then(function successCallback(response) {
        console.log(response.data.response.venues)
        $scope.venues=response.data.response.venues;
  }, function errorCallback(response) {
    console.log(response)
  });




  function getVenues(search){
    $http({
        method: 'GET',
        url: 'https://api.foursquare.com/v2/venues/search?client_id=R3FGZMI124B1GQBTLAS45EZ5YC0TPT3VI0ZANLTUEROIORER&client_secret=2NM0Z15Z3NYGDGVQSFT2FOUDQZ4PPMB4L3GH3Y4HJKJALHBV&v=20130815&ll=51.499840,-0.5530055&query='+search,
      }).then(function successCallback(response) {
        console.log(response.data.response.venues)
        $scope.venues=response.data.response.venues;
      }, function errorCallback(response) {
        console.log(response)
      });
  }


  $scope.doSearch = function (search) {
    getVenues(search)
  }




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
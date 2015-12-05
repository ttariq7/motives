angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {})

.controller('DiscoverCtrl', function($scope,$http) {

  var location = {
    longitude:"51.499840",
    latitude:"-0.5530055"
  }

  var clientId = "R3FGZMI124B1GQBTLAS45EZ5YC0TPT3VI0ZANLTUEROIORER";
  var clientSecret = "2NM0Z15Z3NYGDGVQSFT2FOUDQZ4PPMB4L3GH3Y4HJKJALHBV";


  $http({
  		method: 'GET',
  		url: 'https://api.foursquare.com/v2/venues/search?client_id='+clientId+'&client_secret='+clientSecret+'&v=20130815&ll='+location.longitude+','+location.latitude+'&query=',
  	}).then(function successCallback(response) {
        console.log(response.data.response.venues)
        $scope.venues=response.data.response.venues;
  	}, function errorCallback(response) {
    	console.log(response)
  	});




  function getVenues(search){
    $http({
        method: 'GET',
        url: 'https://api.foursquare.com/v2/venues/search?client_id='+clientId+'&client_secret='+clientSecret+'&v=20130815&ll='+location.longitude+','+location.latitude+'&query='+search,
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


  function getVenue(){
    $http({
        method: 'GET',
        url: 'https://api.foursquare.com/v2/venues/search?client_id='+clientId+'&client_secret='+clientSecret+'&v=20130815&ll='+location.longitude+','+location.latitude+'&query='+search,
      }).then(function successCallback(response) {
        console.log(response.data.response.venues)
        $scope.venues=response.data.response.venues;
      }, function errorCallback(response) {
        console.log(response)
      });
  }
  getVenue();


})

.controller('MotivesCtrl', function($scope, MotivesService) {

  $scope.$on('$ionicView.enter', function(e) {
  	getMotives();
  });

  function getMotives(){
	MotivesService.getMotives()
	  .then(function(response) {
	  	console.log(response);
	  	$scope.motives = response;
	  })
  }
  

  $scope.addMotive = function () {

  	var motive = {
  		title:"Default name",
  		description:"",
  		foursquareId:"",
  		location:"",
  	}

	MotivesService.createMotive(motive)
	  .then(function(response) {
	  	console.log(response);
	  	getMotives();
	  })

  }

})

.controller('MotivesDetailCtrl', function($scope, $state, $stateParams, MotivesService) {

	$scope.editMode = false;
	function getMotive(){
		MotivesService.getMotive($stateParams.motivesId)
		  .then(function(response) {
		  	console.log(response);
		  	$scope.motive = response;
		  	$scope.motiveData = {
		  		title:response.attributes.title,
		  		date:response.attributes.date,
		  		description:response.attributes.description,
		  	}
		  })		
	}
	getMotive();

	$scope.toggleEdit = function() {
		$scope.editMode = !$scope.editMode;
		var editMode = $scope.editMode;

		if(editMode == false){
			// save
			MotivesService.updateMotive($scope.motive, $scope.motiveData)
			  .then(function(response) {
			  	console.log(response);

			  })
		}
	}

	$scope.deleteMotive = function(){
		// save
		MotivesService.deleteMotive($scope.motive)
		  .then(function(response) {
		  	console.log(response);
		  	$state.go("tab.motives");
		  })
	}

})

.controller('ProfileCtrl', function($scope) {

});
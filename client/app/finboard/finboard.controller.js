'use strict';

angular.module('kinleyPinterestApp')
  .controller('FinboardCtrl', function ($scope, finDB, Auth,socket) {
 
$scope.awesomeThings = [];
	$scope.username = Auth.getCurrentUser().name;

  	finDB.loadUser($scope.username).success(function (data) {
  	 $scope.awesomeThings = data;
      socket.syncUpdates('thing', $scope.awesomeThings);
  	});


    $scope.message = 'Hello';
  });

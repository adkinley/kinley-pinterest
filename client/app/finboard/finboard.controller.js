'use strict';

angular.module('kinleyPinterestApp')
  .controller('FinboardCtrl', function ($scope, finDB, Auth,socket, $stateParams) {

$scope.awesomeThings = [];
$scope.showAddButton = false;
$scope.username = undefined;	
 if ($stateParams.username!=undefined) {
 	$scope.username = $stateParams.username;
 	if (Auth.isLoggedIn() && Auth.getCurrentUser().name == $scope.username)
 		$scope.showAddButton = true;
 }
 else if (Auth.isLoggedIn())  {
 	$scope.username = Auth.getCurrentUser().name;
 	$scope.showAddButton = true;
}
if ($scope.username!=undefined) {
  	finDB.loadUser($scope.username).success(function (data) {
  	 $scope.awesomeThings = data;
      socket.syncUpdates('thing', $scope.awesomeThings);
  	});
}

    $scope.message = 'Hello';
  });

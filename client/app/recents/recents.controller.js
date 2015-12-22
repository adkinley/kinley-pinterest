'use strict';

angular.module('kinleyPinterestApp')
  .controller('RecentsCtrl', function ($scope, finDB, socket) {

$scope.awesomeThings = [];
	$scope.showView = false;
  	finDB.loadAll().success(function (data) {
  	 $scope.awesomeThings = data;
      socket.syncUpdates('thing', $scope.awesomeThings);
      $scope.showView =true;

  	});

    $scope.message = 'Hello';
  });

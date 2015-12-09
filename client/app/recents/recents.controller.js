'use strict';

angular.module('kinleyPinterestApp')
  .controller('RecentsCtrl', function ($scope, finDB, socket) {

$scope.awesomeThings = [];

  	finDB.loadAll().success(function (data) {
  	 $scope.awesomeThings = data;
      console.log("The Owner is " + $scope.awesomeThings[0].owner);
      socket.syncUpdates('thing', $scope.awesomeThings);
  	});


    $scope.message = 'Hello';
  });

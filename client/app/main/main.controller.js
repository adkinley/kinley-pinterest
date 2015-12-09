'use strict'

angular.module('kinleyPinterestApp')
  .controller('MainCtrl', function ($scope, $http, socket,$uibModal,$log,Auth, finDB) {

    $scope.showBanner = true;
    $scope.modalInstance = undefined;
    $scope.awesomeThings = [];
    console.log("Main: USer is " + Auth.getCurrentUser().name)
    finDB.loadAll().success(function(things) {
      $scope.awesomeThings = things;
      console.log("The Owner is " + $scope.awesomeThings[0].owner);
      socket.syncUpdates('thing', $scope.awesomeThings);
    });


    $scope.finDB = finDB;


    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

// Update likes of thing
  $scope.like = function(thing) {

    var index = _.findIndex($scope.awesomeThings, function( elt) { 
      return (elt._id == thing._id);});
    $scope.awesomeThings[index].likes++;
  }

$scope.currentPicture = '';
$scope.comment = '';
//$scope.currentPicture = 'http://lorempixel.com/300/100';
$scope.addItem = function(picture, comment) {
  if (Auth.isLoggedIn() || true) { // this wil let anyone add, remove the or true to limit
  //  var owner = Auth.getCurrentUser().name || 'fonzie';
    var owner = 'fonzie';
    var d = new Date();

    console.log("owner is " + owner);
   
    if (picture!=undefined && picture != '') {  // only add if image exists
      $http.get(picture).then(
        function(data) {
          var tmp = {imgUrl: picture, likes:0, owner:owner,created: new Date()};
          if (comment!=undefined && comment!='') {
            tmp.name = comment;
          }
          $scope.awesomeThings.push(tmp);
          $scope.currentPicture = '';
          $scope.ok();

        });
    }
  }
}
  /*************************MODAL*****************/
  // MODAL STUFF
$scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;
  
  $scope.open = function (size) {

    $scope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
     // controller: 'MainCtrl',
     scope: $scope,
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    $scope.modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };


  $scope.ok = function () {
    $scope.modalInstance.close('ok');
  };

  $scope.cancel = function () {
    $scope.modalInstance.dismiss('cancel');
  };
  });


/*
$(document).ready(function() {
$('.grid').masonry({
  // options...
  itemSelector: '.grid-item',
  columnWidth: 200
});
});*/
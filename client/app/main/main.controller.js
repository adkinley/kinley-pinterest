'use strict'

angular.module('kinleyPinterestApp')
  .controller('MainCtrl', function ($scope, $http, socket,$uibModal,$log) {
    $scope.awesomeThings = [];
    $scope.modalInstance = undefined;
    console.log("Am I reloading the controller!");
    $scope.pics = [ 'http://lorempixel.com/200/300',
    'http://lorempixel.com/200/310',
        'http://lorempixel.com/200/320',
            'http://lorempixel.com/200/330',
                'http://lorempixel.com/200/340',
                    'http://lorempixel.com/200/200',
                        'http://lorempixel.com/200/210',
                            'http://lorempixel.com/200/220',
'http://lorempixel.com/300/100',
    'http://lorempixel.com/150/110',
        'http://lorempixel.com/250/120',
            'http://lorempixel.com/260/130',
                'http://lorempixel.com/140/140',
                    'http://lorempixel.com/200/250',
                        'http://lorempixel.com/200/260',
                            'http://lorempixel.com/200/270',

  ];


    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.printPics = function() {
      _.forEach($scope.pics, function(elt) {
        console.log(elt);
      });
    }

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


$scope.currentPicture = '';
$scope.comment = '';
//$scope.currentPicture = 'http://lorempixel.com/300/100';
$scope.addItem = function(picture, comment) {
  if (picture!=undefined && picture != '') {
    $scope.pics.push(picture);
    if (comment!=undefined && comment!='') {
      $scope.comments = comment;
    }
      $scope.currentPicture = '';
      $scope.ok();

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
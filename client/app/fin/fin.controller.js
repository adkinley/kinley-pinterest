  'use strict'

  angular.module('kinleyPinterestApp')
  .controller('FinCtrl', function ($scope, $uibModal, $log, finDB, Auth) {
  	
  	$scope.username = Auth.getCurrentUser().name;
/*
  if ($scope.username==undefined) // should ultimately get rid of this line
   $scope.username = 'kskinley';
*/


 $scope.remove= function(thing) {
  finDB.remove(thing);
  }

  	// Update likes of thing
    $scope.like = function(thing) {
      if (Auth.isLoggedIn()) {
        finDB.like(thing,Auth.getCurrentUser().name); /*.success(function (data) {
          $scope.thing = data;
          $scope.thing.likes = $scope.thing.likers.length;
          console.log("$scope.thing is " + JSON.stringify($scope.thing));
        });*/
      }
    }
    
    /*************************MODAL*****************/
  // MODAL STUFF

  $scope.animationsEnabled = true;
  $scope.items = "";  
  $scope.open = function (size) {
  //	console.log("Open Modal");

     $scope.modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
//      controller: 'ModalInstanceCtrl',
	scope: $scope,
      size: size,
        		resolve: {
  			items: function () {
  				return $scope.items;
  			}
  		}
      });

     $scope.modalInstance.result.then(function (res) {
     	console.log(res);
     });
    };



  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

  
  $scope.addItem = function(url, title) {
  	//console.log("Item added");
  	var item = {owner: $scope.username,
  		imgUrl: url,
  		name:title,
  		likes:0,
  		likers:[],
  		created:Date.now(),


  	}
  finDB.addItem(item);
  $scope.ok();
}

  $scope.ok = function () {
    $scope.modalInstance.close("Success");
  };

  $scope.cancel = function () {

    $scope.modalInstance.dismiss('cancel');
  };

  });


angular.module('kinleyPinterestApp').controller('ModalInstanceCtrl', 
  function ($scope, $uibModalInstance, Auth, finDB,items) {

  $scope.addItem = function(url, title) {
  	var item = {owner: $scope.username,
  		imgUrl: url,
  		name:title,
  		likes:0,
  		likers:[],
  		created:Date.now(),


  	}
  finDB.addItem(item);
  $scope.ok();
}

  $scope.ok = function () {
    $uibModalInstance.close("Success");
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});


  function changeImage(thing,str) {
    thing.imgUrl = str;
  }
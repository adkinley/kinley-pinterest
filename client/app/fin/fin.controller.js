'use strict'

angular.module('kinleyPinterestApp')
  .controller('FinCtrl', function ($scope, $uibModal, $log, finDB, Auth) {
  	
  	$scope.username = Auth.getCurrentUser().name;
if ($scope.username==undefined) // should ultimately get rid of this line
	$scope.username = 'kskinley';
  	//console.log("User is " + JSON.stringify(Auth.getCurrentUser()));
 /* 	$scope.createFin = function() {
  		console.log("Add Fin");
  		$scope.open('lg');
  	}
*/


  $scope.remove= function(thing) {
    finDB.remove(thing);
  }
  	// Update likes of thing
  $scope.like = function(thing) {
  	finDB.like(thing,$scope.username);
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
  //	console.log("Cancel clicked");
    $scope.modalInstance.dismiss('cancel');
  };
  });


angular.module('kinleyPinterestApp').controller('ModalInstanceCtrl', 
  function ($scope, $uibModalInstance, Auth, finDB,items) {
   // console.log("Create a ModalInstancCtrl");
  
  $scope.addItem = function(url, title) {
  //	console.log("Item added");
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
  	//console.log("Cancel clicked");
    $uibModalInstance.dismiss('cancel');
  };
});
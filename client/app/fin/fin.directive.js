'use strict';

angular.module('kinleyPinterestApp')
  .directive('fin', function () {
    return {
      templateUrl: 'app/fin/fin.html',
      controller: 'FinCtrl',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      	var vals = attrs["fin"];

      	var vals = JSON.parse(attrs["fin"]);
      	
        scope.value = vals.add == "add";

      	scope.thing = vals.thing;
      	//scope.value = attrs["fin"] =="add" ? true  : false;
      }
    };
  });
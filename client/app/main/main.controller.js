'use strict'

angular.module('kinleyPinterestApp')
  .controller('MainCtrl', function ($scope, finDB) {

    $scope.showBanner = true;
    $scope.finCount = 5;

    $scope.awesomeThings = [];
    $scope.topics = ['one', 'two', 'three'];

    finDB.loadCount($scope.finCount).success(function(things) {
      $scope.awesomeThings = things;
    });
    angular.element(document).ready(function () {
                  var timeline = new TimelineLite();
          timeline.to(["#pan1", "#pan2", "#pan3", "#pan4","#pan5"], .1,{x:'15%',position:'absolute'});
          timeline.to("#pan1",1, {opacity:1});   
    timeline.to("#pan1", 1, {left:'+=15%'});
              timeline.to("#pan2",1, {opacity:1});   
    timeline.to(["#pan2","#pan1"], 1, {left:'+=15%'});
              timeline.to("#pan3",1, {opacity:1});   
    timeline.to(["#pan3","#pan2","#pan1"], 1, {left:'+=15%'});
              timeline.to("#pan4",1, {opacity:1});   
    timeline.to(["#pan4","#pan3","#pan2","#pan1"], 1, {left:'+=15%'});
              timeline.to("#pan5",1, {opacity:1});   
    
    });
  });

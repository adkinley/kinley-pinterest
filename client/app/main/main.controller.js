'use strict'

angular.module('kinleyPinterestApp')
  .controller('MainCtrl', function ($scope, finDB) {

    $scope.showBanner = true;
    $scope.finCount = 5;

    $scope.awesomeThings = [];
    $scope.topics = ['one', 'two', 'three'];

    finDB.loadCount($scope.finCount).success(function(things) {
      //$scope.awesomeThings = things;
      if ($scope.awesomeThings.length<5) {
        var len = $scope.awesomeThings.length;
        for (var i = 5;i>len;i--) 
        {
          $scope.awesomeThings.push({imgUrl:'http://lorempixel.com/'+(40*(i%4+4))+'/200',});
        }
      }
    });
    angular.element(document).ready(function () {
                  var timeline = new TimelineLite();
          timeline.add(new TweenLite(["#pan1", "#pan2", "#pan3", "#pan4","#pan5"], 
            .1,{x:'15%',position:'absolute'}));
          timeline.add(new TweenLite("#pan1",1.5, {opacity:1}));   
    timeline.add(new TweenLite("#pan1", 2, {left:'+=15%'}),1);
              timeline.add(new TweenLite("#pan2", 1.5, {opacity:1}),'-=1.5');   
    timeline.add(new TweenLite(["#pan2","#pan1"], 2, {left:'+=15%'}));
              timeline.add(new TweenLite("#pan3",1.5, {opacity:1}),'-=1.5');   
    timeline.add(new TweenLite(["#pan3","#pan2","#pan1"], 2, {left:'+=15%'}));
              timeline.add(new TweenLite("#pan4",1.5, {opacity:1}),'-=1.5');   
    timeline.add(new TweenLite(["#pan4","#pan3","#pan2","#pan1"], 2, {left:'+=15%'}));
              timeline.add(new TweenLite("#pan5",1.5, {opacity:1}),'-=1.5');   
              timeline.add(new TweenLite(["#pan5","#pan4","#pan3","#pan2","#pan1"], 2, {left:'+=15%'}));
  
  timeline.play();  
    });
  });

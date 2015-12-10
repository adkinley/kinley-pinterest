'use strict'

angular.module('kinleyPinterestApp')
.animation('.jams', function() {
  //console.log("Animation jam");
  return {
    enter: function(element, done) {
    //  console.log("this");
          TweenMax.to(element, 2, {left:"+=300"});  
    },
    leave: function(element, done) {
          TweenMax.to(element, 2, {left:"+=300"});  
    
        }
};
})
.run(['$animate', function($animate) {
  console.log("run");
  $animate.enabled(true);
}])
  .controller('MainCtrl', function ($scope, finDB) {

    $scope.showBanner = true;
    $scope.finCount = 5;

    $scope.awesomeThings = [];
    $scope.topics = ['one', 'two', 'three'];

    finDB.loadCount($scope.finCount).success(function(things) {
      $scope.awesomeThings = things;
      //e.log("there are " + $scope.awesomeThings.length + " items");
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
//  $animate.animate();
  /*.animation('.list-out', ['$window',function($window) {
    return {
      start : function(element, done) {
        console.log("Test 1");
        TweenMax.set(element, {position:'relative'});

        var duration = 1; 
        //we can use onComplete:done with TweenMax, but lets use
        //a delay value for testing purposes
        TweenMax.to(element, 1, {opacity:0, width:0});
        $window.setTimeout(done, duration * 1000);
      }
    }
  }])*/

/*
.animation('.slide', function() {
  console.log("Does this execute");
  return {
    // make note that other events (like addClass/removeClass)
    // have different function input parameters
    enter: function(element, doneFn) {
      TweenMax.to(element,1,{opacity:100})
      console.log("Element is " + Object.keys(element));
      // remember to call doneFn so that angular
      // knows that the animation has concluded
    },

    move: function(element, doneFn) {
      console.log("Test");
      jQuery(element).fadeIn(1000, doneFn);
      TweenMax.to(element,1,{left:'+=200'})
    },

    leave: function(element, doneFn) {
      jQuery(element).fadeOut(1000, doneFn);
    }
  }
});*/
/*  .animation('.list-in', ['$window',function($window) {
    return {
      setup: function(element) {
        TweenMax.set(element, {opacity:0, width:0});
      },
      start : function(element, done) {
                console.log("Test 2");
        var duration = 1; 
        //we can use onComplete:done with TweenMax, but lets use
        //a delay value for testing purposes
        TweenMax.to(element, duration, {opacity:1, width:210});
        $window.setTimeout(done, duration * 1000);
      }
    }
  }])

  .animation('.list-move', ['$window',function($window) {
    return {
      start : function(element, done) {
                console.log("Test 3");
        var duration = 1; 
        //we can use onComplete:done with TweenMax, but lets use
        //a delay value for testing purposes
        TweenMax.to(element, duration, {left:'+=300',opacity:1, width:210});
        $window.setTimeout(done, duration * 1000);
      }
    }
  }]);
  */  

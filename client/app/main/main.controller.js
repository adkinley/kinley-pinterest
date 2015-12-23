'use strict'

angular.module('kinleyPinterestApp')
  .controller('MainCtrl', function ($scope, finDB) {

    $scope.showBanner = true;
    $scope.finCount = 5;

    $scope.awesomeThings = [];
    $scope.topics = ['one', 'two', 'three'];
    $scope.loadComplete = false;

    finDB.loadAll().success(function(things) {
      $scope.awesomeThings = things;
      if ($scope.awesomeThings.length<5) {
        var len = $scope.awesomeThings.length;
        for (var i = 5;i>len;i--) 
        {
          $scope.awesomeThings.push({imgUrl:'http://lorempixel.com/'+(40*(i%4+4))+'/200',});
        }

      }
              $scope.loadComplete = true;
    });


    angular.element(document).ready(function () {

      var beginning = 0;

      /* generate the next url and title to appear on the screen */
      function getNextImageTitle() {
        var curImg =  $scope.awesomeThings[beginning].imgUrl;
        var title = $scope.awesomeThings[beginning].name;
        beginning= (beginning+1)%$scope.awesomeThings.length;
        return {imgUrl:curImg, title:title};
  }

/* Create the next item to go on the screen */
    function addItem() {
      var container = $("#container-animate");
      var obj = getNextImageTitle();
      var nextId = "element"+beginning;
      console.log(nextId);
      var str = 
     "<div id=\""
      + nextId+
          "\" class=\"panel panel-default panel-display\">"+
          " <div class=\"panel-body\" >" +
          "<img src="+obj.imgUrl+

          " class=\"img-sizer\" ></img>" +
          "<div class = \"title\"> <center>"+obj.title+"</center></div>" +  
          "</div></div>";

          var element = $(str);
      container.append(element);

      return "#"+nextId;
    //  timeline.add(getAnimation(element),'-=10');
    }


/* Create the animation for each element */
  function getAnimation() {
      var element =  addItem();
      var tween = new TimelineLite();
tween.to(element,.5, {opacity:0}).
  to(element, 
        0,{x:'25%',position:'absolute'}).
      to(element,2, {opacity:1}).
          to(element, 2, {left:'+=15%'}).
      to(element, 2, {left:'+=15%'}).
      to(element, 2, {left:'+=15%'}).
      to(element, 2, {left:'+=15%'}).
      to(element, 2, {left:'+=15%'}).
     to(element,1.5, {opacity:0});
      return tween; 
    }

    /* Star the animation timeline once the DB is loaded */
    function startTimeLine() {
/*      console.log("Time is called");
      var elt = addItem();
      TweenLite.to(elt,1, {opacity:1});
      TweenLite.to(elt,4, {left:'+=500'});
*/

    var timeline = new TimelineMax({repeat:10});
    for (var i =0;i<$scope.awesomeThings.length;i++)  {
      timeline.add(getAnimation(),'-=12');
    }
      timeline.play();  
  }


var myinterval =   setInterval(function () {
      console.log("Checking");
      if ($scope.loadComplete) {
        console.log("success");
        clearInterval(myinterval);

        startTimeLine();
      }
    },
    2000);


      /*
      timeline.add(getAnimation($("#pan2")),'-=10');
      timeline.add(getAnimation($("#pan3")),'-=10');
      timeline.add(getAnimation($("#pan4")),'-=10');
      timeline.add(getAnimation($("#pan5")),'-=10');
  */
  /*          timeline.add(new TweenLite(["#pan1", "#pan2", "#pan3", "#pan4","#pan5"], 
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
  */

    });
  });

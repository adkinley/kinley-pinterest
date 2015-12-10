'use strict';

angular.module('kinleyPinterestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      /*.state('recent', {
        url:'/recents',
        templateUrl:'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('finboard', {
        url:'/finboard',
        templateUrl:'app/main/main.html',
        controller: 'MainCtrl'
      });*/
  });


  function move() {
  TweenMax.to(["#pan0,#jam"], 2, {opacity:"0"});  
   // TweenMax.to("#pan2", 2, {y:"-200" });  
}

function goHome() {
  console.log("Called");
    TweenMax.to(["#jam"], 2, {left:"+=300"});  
}




/*	$(function () {
		var $container = $('#container');
    console.log("ready to check");
    $container.imagesLoaded( function(){
			console.log("Iages loaded");
			$container.masonry({
				itemSelector : '.grid-item'

			});

		});
	});

*/


$(document).ready(function () {
 console.log("JQuery ready");
  $(window).load(function () {

    $("#pan2").imagesLoaded( function(){
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
    
    //  TweenMax.to("#pan1", 1, {left:'+=200'});

    });
  });
	});

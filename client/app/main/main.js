'use strict';

angular.module('kinleyPinterestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });


  function move() {
  TweenMax.to(["#pan2", "#pan"], 2, {left:"+=300" ,scale:".8"});  
   // TweenMax.to("#pan2", 2, {y:"-200" });  
}

function goHome() {
    TweenMax.to("#pan", 2, {left:20});  
}




	$(function () {
		var $container = $('#container');
		console.log("ready to check");
		$container.imagesLoaded( function(){
			console.log("Iages loaded");
			$container.masonry({
				itemSelector : '.grid-item'

			}); 
		});
	});




$(document).ready(function () {
 console.log("JQuery ready");


	});
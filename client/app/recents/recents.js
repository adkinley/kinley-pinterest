'use strict';

angular.module('kinleyPinterestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('recents', {
        url: '/recents',
        templateUrl: 'app/recents/recents.html',
        controller: 'RecentsCtrl'
      });
  });
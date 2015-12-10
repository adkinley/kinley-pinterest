'use strict';

angular.module('kinleyPinterestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('finboard', {
        url: '/finboard',
        templateUrl: 'app/finboard/finboard.html',
        controller: 'FinboardCtrl'
      })
      .state('finboardUser', {
        url: '/finboard/:username',
        templateUrl: 'app/finboard/finboard.html',
        controller: 'FinboardCtrl'
      });
  });
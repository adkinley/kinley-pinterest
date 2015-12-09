'use strict';

angular.module('kinleyPinterestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('finboard', {
        url: '/finboard',
        templateUrl: 'app/finboard/finboard.html',
        controller: 'FinboardCtrl'
      });
  });
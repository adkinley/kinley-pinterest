'use strict';

angular.module('kinleyPinterestApp')
  .directive('signature', function () {
    return {
      templateUrl: 'app/signature/signature.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
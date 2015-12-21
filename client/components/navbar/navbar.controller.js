'use strict';

angular.module('kinleyPinterestApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
    {
      'show': Auth.isLoggedIn(),
        'title':'Your Finboard',
        'link': '/finboard'+'/'+ Auth.getCurrentUser().name

      },
      {
        'show': true,
      'title': 'Recent Fins',
      'link': '/recents'
    }];

    
    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
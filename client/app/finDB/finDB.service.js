'use strict';

angular.module('kinleyPinterestApp')
  .factory('finDB', function ($http, socket, Auth) {
    // Service logic
    // ...

    /* load all the things from the db */
    var loadAll = function() {

      return $http.get('/api/things');

    }

    var loadCount = function(count) {
      return $http.get('/api/things/count/'+count);
    }
    /* Just load the fins belonging to username*/
    var loadUser = function(username) {
      return $http.get('/api/things/user/'+username);
    }

    var addItem = function(thing) {
      if(thing === undefined) {
        return;
      }
      if (!Auth.isLoggedIn())
        return;
      if (Auth.getCurrentUser().name!=thing.owner)
        return;
      $http.post('/api/things', thing);

    };

    
/* Delete an item from the list */
/* Only the current user should be able to delete an item they own */
  var remove = function(thing) {
    if (!Auth.isLoggedIn())
      return;
    if (thing.owner == Auth.getCurrentUser().name)
      $http.delete('/api/things/'+thing._id);
  }

    /* Update the like counter for a thing */
    /* Add username to the likers list */
    /* If they are already a liker then unlike */
    var like = function(thing, username) { 
    // instead of updating the item, we need to update the db adn let ht sync do the work

     // if user is in likers list it should remove it
  // how to i write a function to update a value in my db
  // verify userame not in the likes list
  // add username to likers list
  // update likes
  // send it as an update to the db
  if (!Auth.isLoggedIn()) 
    return;
 // console.log("User in like is " + username);
  var index = _.findIndex(thing.likers, function( elt) { 
    return (elt == username);
  });
  if (index==-1)  // not currentl likeing it
  {
    thing.likers.push(username);
    thing.likes++;
  }
  else {  // user unliking
    _.pull(thing.likers, username);
    thing.likes--;
  }

  $http.put('/api/things/'+thing._id, thing).success(function (data) {
    //console.log("Successfull update " + data);
  });
  }

    // Public API here
    return {
      loadCount: loadCount,
      remove: remove,
      loadAll: loadAll,
      like: like,
      addItem: addItem,
      loadUser: loadUser
    };
  });
  
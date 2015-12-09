/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Fun Fun',
    likes: 2,
    imgUrl:  'http://lorempixel.com/250/150',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'More Fun',
        likes: 3,
    imgUrl:  'http://lorempixel.com/225/200',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Win Win',
        likes: 2,
    imgUrl:  'http://lorempixel.com/175/250',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Go Dog Go',
        likes: 7,
    imgUrl:  'http://lorempixel.com/200/180',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Is this the end my friend',   
    likes: 1,
    imgUrl:  'http://lorempixel.com/250/290',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },
  {
    name : 'Fun Fun',
    likes: 2,
    imgUrl:  'http://lorempixel.com/210/120',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'More Fun',
        likes: 3,
    imgUrl:  'http://lorempixel.com/100/300',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Win Win',
        likes: 2,
    imgUrl:  'http://lorempixel.com/300/100',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Go Dog Go',
        likes: 7,
    imgUrl:  'http://lorempixel.com/200/320',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Is this the end my friend',   
    likes: 1,owner:'sally',
    imgUrl:  'http://lorempixel.com/200/330',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },
  {
    name : 'Fun Fun',
    likes: 2,
    owner:'sally',
    imgUrl:  'http://lorempixel.com/200/150',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'More Fun',
        likes: 3,
    imgUrl:  'http://lorempixel.com/150/200',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Win Win',     owner:'sally',
       likes: 2,
    imgUrl:  'http://lorempixel.com/200/310',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Go Dog Go',
    owner:'sly',
            likes: 7,
    imgUrl:  'http://lorempixel.com/200/320',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Is this the end my friend',   
    owner:'bob',    likes: 1,
    imgUrl:  'http://lorempixel.com/200/330',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },
  {
    name : 'Fun Fun',
    owner:'bob',    likes: 2,
    imgUrl:  'http://lorempixel.com/200/150',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'More Fun',
        likes: 3,
    imgUrl:  'http://lorempixel.com/150/200',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Win Win',
    owner:'bob',
        likes: 2,
    imgUrl:  'http://lorempixel.com/200/310',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Go Dog Go',
        likes: 7,
    imgUrl:  'http://lorempixel.com/200/320',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Is this the end my friend',   
    likes: 1,
    imgUrl:  'http://lorempixel.com/200/330',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },
  {
    name : 'Fun Fun',
    likes: 2,
    imgUrl:  'http://lorempixel.com/200/150',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'More Fun',
        likes: 3,
    imgUrl:  'http://lorempixel.com/150/200',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Win Win',
        likes: 2,
    imgUrl:  'http://lorempixel.com/200/310',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Go Dog Go',
        likes: 7,
    imgUrl:  'http://lorempixel.com/200/320',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Is this the end my friend',   
    likes: 1,
    imgUrl:  'http://lorempixel.com/200/330',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Who you looking at',   
     likes: 0,
    imgUrl:  'http://lorempixel.com/200/340',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  }

  );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
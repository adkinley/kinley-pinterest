'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  imgUrl: String,
  likes: Number,
  info: String,
  active: Boolean,
  created: {type: Date, default:Date.now},
  owner: {type: String, default:'adkinley'}
});

module.exports = mongoose.model('Thing', ThingSchema);
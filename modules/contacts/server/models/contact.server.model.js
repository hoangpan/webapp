'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Contact Schema
 */
var ContactSchema = new Schema({
  product_id: {
    type: String,
    default: '',
    required: 'Please fill Contact name',
    trim: true
  },
  user_name: {
    type: String,
    default: '',
    required: 'Please fill Contact name',
    trim: true
  },
  user_email: {
    type: String,
    default: '',
    required: 'Please fill Contact name',
    trim: true
  },
  user_phone: {
    type: String,
    default: '',
    required: 'Please fill Contact name',
    trim: true
  },
  comments: {
    type: String,
    default: '',
    required: 'Please fill Contact Comment',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  product: {
    type: Schema.ObjectId,
    ref: 'Product'
  }
});

mongoose.model('Contact', ContactSchema);

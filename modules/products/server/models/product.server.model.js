'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
  catalog_id: {
    type: String,
    default: '',
    required: 'Please fill Catalogs',
    trim: true
  },
  name: {
    type: String,
    default: '',
    required: 'Please fill Product name',
    trim: true
  },
  price: {
    type: String,
    default: '',
    required: 'Please fill Product price',
    trim: true
  },
  description: {
    type: String,
    default: '',
    required: 'Please fill Product description',
    trim: true
  },
  discount: {
    type: String,
    default: '',
    required: 'Please fill Product discount',
    trim: true
  },
  image_link: {
    type: String,
    default: '',
    required: 'Please fill Product image_link',
    trim: true
  },
  image_list: {
    type: String,
    default: '',
    required: 'Please fill Product image_list',
    trim: true
  },
  tags: {
    type: String,
    default: '',
    required: 'Please fill Product tags',
    trim: true
  },
  views: {
    type: String,
    default: '',
    required: 'Please fill Product views',
    trim: true
  },
  status: {
    type: String,
    default: '',
    required: 'Please fill Product stt',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  catalog: {
    type: Schema.ObjectId,
    ref: 'Catalog'
  }
});

mongoose.model('Product', ProductSchema);

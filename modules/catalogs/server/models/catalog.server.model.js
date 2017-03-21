'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Catalog Schema
 */
var CatalogSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Catalog Name',
    trim: true
  },
  parent_id: {
    type: String,
    default: '',
    required: 'Please fill Catalog Sub',
    trim: true
  }
});

mongoose.model('Catalog', CatalogSchema);

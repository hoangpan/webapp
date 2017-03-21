'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Order Schema
 */
var OrderSchema = new Schema({
  product_id: {
    type: String,
    default: '',
    required: 'Please fill Productid',
    trim: true
  },
  user_id: {
    type: String,
    default: '',
    required: 'Please fill Userid',
    trim: true
  },
  transaction_id: {
    type: String,
    default: '',
    required: 'Please fill Transactionid',
    trim: true
  },
  qty: {
    type: String,
    default: '',
    required: 'Please fill Order qty',
    trim: true
  },
  unitPrice: {
    type: String,
    default: '',
    required: 'Please fill Order unitPrice',
    trim: true
  },
  status: {
    type: String,
    default: '',
    required: 'Please fill Order stt',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  product: {
    type: Schema.ObjectId,
    ref: 'Product'
  },
  transaction: {
    type: Schema.ObjectId,
    ref: 'Transaction'
  },
});

mongoose.model('Order', OrderSchema);

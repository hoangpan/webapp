'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Catalog = mongoose.model('Catalog'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  _ = require('lodash');

/**
 * Create a Catalog
 */
exports.create = function(req, res) {
  var catalog = new Catalog(req.body);
  catalog.user = req.user;

  catalog.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(catalog);
    }
  });
};

/**
 * Show the current Catalog
 */
exports.read = function(req, res) {
  // convert mongoose document to JSON
  var catalog = req.catalog ? req.catalog.toJSON() : {};

  // Add a custom field to the Article, for determining if the current User is the "owner".
  // NOTE: This field is NOT persisted to the database, since it doesn't exist in the Article model.
  catalog.isCurrentUserOwner = req.user && catalog.user && catalog.user._id.toString() === req.user._id.toString();

  res.jsonp(catalog);
};

/**
 * Update a Catalog
 */
exports.update = function(req, res) {
  var catalog = req.catalog;

  catalog = _.extend(catalog, req.body);

  catalog.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(catalog);
    }
  });
};

/**
 * Delete an Catalog
 */
exports.delete = function(req, res) {
  var catalog = req.catalog;

  catalog.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(catalog);
    }
  });
};

/**
 * List of Catalogs
 */
exports.list = function(req, res) {
  Catalog.find().sort('-created').populate('user', 'displayName').exec(function(err, catalogs) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(catalogs);
    }
  });
};

/**
 * Catalog middleware
 */
exports.catalogByID = function(req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Catalog is invalid'
    });
  }

  Catalog.findById(id).populate('user', 'displayName').exec(function (err, catalog) {
    if (err) {
      return next(err);
    } else if (!catalog) {
      return res.status(404).send({
        message: 'No Catalog with that identifier has been found'
      });
    }
    req.catalog = catalog;
    next();
  });
};

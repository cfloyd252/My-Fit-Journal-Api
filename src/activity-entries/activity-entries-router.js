const express = require('express');
const ActivityEntriesService = require('./activity-entries-service');
const path = require('path');
const { requireAuth } = require('../../middleware/jwt-auth');

const activityEntriesRouter = express.Router();
const jsonBodyParser = express.json();

activityEntriesRouter
  .route('/')
  // .all(requireAuth)
  .get((req, res, next) => {
    
  })
  .post(jsonBodyParser, (req, res, next) => {

  });

module.exports = activityEntriesRouter;
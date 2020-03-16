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
    ActivityEntriesService.getEntries(req.app.get('db'))
      .then(activity_entries => {
        res.json(activity_entries)
      })
      .catch(next)
  })
  .post(jsonBodyParser, (req, res, next) => {

  });

module.exports = activityEntriesRouter;
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
    const { activity_name, start_log_time, end_log_time, calories_burned } = req.body;
    const newEntry = { activity_name, start_log_time, end_log_time, calories_burned, user_id: 1 };

    ActivityEntriesService.insertEntry(req.app.get('db'), newEntry)
      .then(entry => {
        return res
          .status(201)
          .json(entry)
      })
  });

module.exports = activityEntriesRouter;
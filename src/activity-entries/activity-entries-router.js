const express = require('express');
const ActivityEntriesService = require('./activity-entries-service');
const path = require('path');
const { requireAuth } = require('../../middleware/jwt-auth');

const activityEntriesRouter = express.Router();
const jsonBodyParser = express.json();

const serializeEntry = entry => ({
  id: entry.id,
  user_id: entry.user_id,
  activity_name: entry.activity_name,
  log_time: entry.start_log_time,
  duaration: entry.start_log_time - entry.end_log_time,
  calories_burned: entry.calories_burned,
})

activityEntriesRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    ActivityEntriesService.getEntries(req.app.get('db'))
      .then(activity_entries => {
        res.json(activity_entries.map(serializeEntry))
      })
      .catch(next)
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { activity_name, start_log_time, end_log_time, calories_burned } = req.body;
    const newEntry = { activity_name, start_log_time, end_log_time, calories_burned};

    newEntry.user_id = req.user.id

    ActivityEntriesService.insertEntry(req.app.get('db'), newEntry)
      .then(entry => {
        return res
          .status(201)
          .json(entry)
      })
  });

module.exports = activityEntriesRouter;
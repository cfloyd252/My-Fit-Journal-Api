const express = require('express');
const LogEntriesService = require('./log-entries-service');
const { requireAuth } = require('../../middleware/jwt-auth');
const xss= require('xss');

const logEntriesRouter = express.Router();
const jsonBodyParser = express.json();

const serializeEntry = entry => ({
  log_id: entry.log_id,
  user_id: entry.user_id,
  log_type: entry.log_type,
  log_title: xss(entry.log_title),
  quanity: entry.quanity,
  unit_of_measurement: xss(entry.unit_of_measurement),
  start_time: entry.start_time,
  end_time: entry.end_time,
  calories: entry.calories
});


logEntriesRouter
  .route('/water')
  .all(requireAuth)
  .get((req, res, next) => {
    LogEntriesService.getWaterEntries(req.app.get('db'))
      .then(water_entries => {
        res.json(water_entries);
      })
      .catch(next);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { quanity, unit_of_measurement, start_time } = req.body;
    const newEntry = { quanity, unit_of_measurement, start_time, user_id: 1, log_type: 'water' };

    // newEntry.user_id = req.user.id

    LogEntriesService.insertEntry(req.app.get('db'), newEntry)
      .then(entry => {
        return res
          .status(201)
          .json(serializeEntry(entry));
      })
      .catch(next);
  });

logEntriesRouter
  .route('/weight')
  .all(requireAuth)
  .get((req, res, next) => {
    LogEntriesService.getWeightEntries(req.app.get('db'))
      .then(weight_entries => {
        res.json(weight_entries);
      })
      .catch(next);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { quanity, unit_of_measurement, start_time } = req.body;
    const newEntry = { quanity, unit_of_measurement, start_time, user_id: 1, log_type: 'weight' };

    // newEntry.user_id = req.user.id

    LogEntriesService.insertEntry(req.app.get('db'), newEntry)
      .then(entry => {
        return res
          .status(201)
          .json(serializeEntry(entry));
      })
      .catch(next);
  });

logEntriesRouter
  .route('/activity')
  // .all(requireAuth)
  .get((req, res, next) => {
    LogEntriesService.getActivityEntries(req.app.get('db'))
      .then(activity_entries => {
        res.json(activity_entries);
      })
      .catch(next);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { log_title , start_time, end_time, calories } = req.body;
    const newEntry = { log_title , start_time, end_time, calories, user_id: 1, log_type: 'activity' };

    // newEntry.user_id = req.user.id

    LogEntriesService.insertEntry(req.app.get('db'), newEntry)
      .then(entry => {
        return res
          .status(201)
          .json(serializeEntry(entry));
      })
      .catch(next);
  });

module.exports = logEntriesRouter;
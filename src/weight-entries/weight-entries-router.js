const express = require('express');
const WeightEntriesService = require('./weight-entries-service');
const path = require('path');
const { requireAuth } = require('../../middleware/jwt-auth');

const weightEntriesRouter = express.Router();
const jsonBodyParser = express.json();

const serializeEntry = entry => ({
  id: entry.id,
  log_time: entry.log_time,
  quanity: entry.quanity,
  unit_of_measurement: entry.unit_of_measurement,
  user_id: entry.user_id,
})

weightEntriesRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    WeightEntriesService.getEntries(req.app.get('db'))
      .then(weight_entries => {
        res.json(weight_entries)
      })
      .catch(next)
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { quanity, unit_of_measurement, log_time } = req.body;
    const newEntry = { quanity, unit_of_measurement, log_time, user_id: 1 };

    // newEntry.user_id = req.user.id

    WeightEntriesService.insertEntry(req.app.get('db'), newEntry)
      .then(entry => {
        return res
          .status(201)
          .json(serializeEntry(entry))
      })
      .catch(next)
  });

module.exports = weightEntriesRouter;
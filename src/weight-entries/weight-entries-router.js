const express = require('express');
const WeightEntriesService = require('./weight-entries-service');
const path = require('path');
const { requireAuth } = require('../../middleware/jwt-auth');

const weightEntriesRouter = express.Router();
const jsonBodyParser = express.json();

weightEntriesRouter
  .route('/')
  // .all(requireAuth)
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

    WeightEntriesService.insertEntry(req.app.get('db'), newEntry)
      .then(entry => {
        return res
          .status(201)
          .json(entry)
      })
  });

module.exports = weightEntriesRouter;
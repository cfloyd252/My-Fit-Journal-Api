const express = require('express');
const WaterEntriesService = require('./water-entries-service');
const path = require('path');
const { requireAuth } = require('../../middleware/jwt-auth');

const waterEntriesRouter = express.Router();
const jsonBodyParser = express.json();

const serializeEntry = entry => ({
  id: entry.id,
  log_time: entry.log_time,
  quanity: entry.quanity,
  unit_of_measurement: entry.unit_of_measurement,
  user_id: entry.user_id,
})

waterEntriesRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    WaterEntriesService.getEntries(req.app.get('db'))
      .then(water_entries => {
        res.json(water_entries)
      })
      .catch(next)
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { quanity, unit_of_measurement, log_time } = req.body;
    const newEntry = { quanity, unit_of_measurement, log_time, user_id: 1 };

    // newEntry.user_id = req.user.id

    WaterEntriesService.insertEntry(req.app.get('db'), newEntry)
      .then(entry => {
        return res
          .status(201)
          .json(serializeEntry(entry))
      })
      .catch(next)
  });

module.exports = waterEntriesRouter;
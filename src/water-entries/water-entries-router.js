const express = require('express');
const WaterEntriesService = require('./water-entries-service');
const path = require('path');
const { requireAuth } = require('../../middleware/jwt-auth');

const waterEntriesRouter = express.Router();
const jsonBodyParser = express.json();

waterEntriesRouter
  .route('/')
  // .all(requireAuth)
  .get((req, res, next) => {
    WaterEntriesService.getEntries(req.app.get('db'))
      .then(water_entries => {
        res.json(water_entries)
      })
      .catch(next)
  })
  .post(jsonBodyParser, (req, res, next) => {

  });

module.exports = waterEntriesRouter;
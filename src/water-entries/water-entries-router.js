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
    
  })
  .post(jsonBodyParser, (req, res, next) => {

  });

module.exports = waterEntriesRouter;
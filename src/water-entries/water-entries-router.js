const express = require('express');
const WaterEntriesService = require('./water-entries-service');
const path = require('path');
const { requireAuth } = require('../../middleware/jwt-auth');

const waterEntriesRouter = express.Router();
const jsonBodyParser = express.json();

waterEntriesRouter
  .route('/')
  .get()
  .post();

module.exports = waterEntriesRouter;
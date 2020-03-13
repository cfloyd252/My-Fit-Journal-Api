const express = require('express');
const WeightEntriesService = require('./weight-entries-service');
const path = require('path');
const { requireAuth } = require('../../middleware/jwt-auth');

const weightEntriesRouter = express.Router();
const jsonBodyParser = express.json();

weightEntriesRouter
  .route('/')
  .all(requireAuth)
  .get((req, res, next) => {
    
  })
  .post(jsonBodyParser, (req, res, next) => {

  });

module.exports = weightEntriesRouter;
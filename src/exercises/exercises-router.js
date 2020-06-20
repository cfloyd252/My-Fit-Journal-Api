'use strict';

const express = require('express');
const ExercisesService = require('./exercises-service');
const { requireAuth } = require('../../middleware/jwt-auth');
const xss= require('xss');

const exercisesRouter = express.Router();
const jsonBodyParser = express.json();

const serializeExercise = exercise => {
  
};

exercisesRouter
  .route('/')
  .all(requireAuth)
  .get(async(req, res, next) => {
    try {
      
    } catch(error) {
      next(error)
    }
  })
  .post(jsonBodyParser, async (req, res, next) => {
    try{
      
    } catch(error) {
      next(error)
    }
  });

module.exports = exercisesRouter;
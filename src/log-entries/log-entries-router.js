'use strict';

const express = require('express');
const LogEntriesService = require('./log-entries-service');
const { requireAuth } = require('../../middleware/jwt-auth');
const xss= require('xss');

const logEntriesRouter = express.Router();
const jsonBodyParser = express.json();

const serializeEntry = entry => {
  const serializedEntry = {
    log_id: entry.log_id,
    user_id: entry.user_id,
    log_type: entry.log_type,
    quanity: entry.quanity,
    start_time: entry.start_time,
    end_time: entry.end_time
  }
  
  if(entry.exercise_name) {
    serializedEntry.exercise_name = xss(entry.exercise_name)
  } else if(entry.unit_of_measurement) {
    serializedEntry.unit_of_measurement = xss(entry.unit_of_measurement)
  } else if (entry.calories) {
    serializedEntry.calories = Number(entry.calories)
  }

  return serializedEntry
};

logEntriesRouter
  .route('/')
  .all(requireAuth)
  .get(async(req, res, next) => {
    try {
      const waterEntries = await LogEntriesService.getWaterEntries(
        req.app.get('db'),
        req.user.id
      )
  
      const weightEntries = await LogEntriesService.getWeightEntries(
        req.app.get('db'),
        req.user.id
      )
  
      const exerciseEntries = await LogEntriesService.getExerciseEntries(
        req.app.get('db'),
        req.user.id
      )

      res.json({
        water: waterEntries.map(serializeEntry),
        weight: weightEntries.map(serializeEntry),
        exercise: exerciseEntries.map(serializeEntry),
      })
    } catch(error) {
      next(error)
    }
  })
  .post(jsonBodyParser, async (req, res, next) => {
    try{
      const { exercise_name, quanity, unit_of_measurement, start_time, end_time, calories, log_type } = req.body;
      const user_id = req.user.id
      const newEntry = { exercise_name, quanity, unit_of_measurement, start_time, end_time, calories, user_id, log_type };
      
      const newLog = await LogEntriesService.insertEntry(req.app.get('db'), newEntry, log_type)
      res.status(201).json(serializeEntry(newLog))
    } catch(error) {
      next(error)
    }
  });

module.exports = logEntriesRouter;
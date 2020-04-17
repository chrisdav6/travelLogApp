const express = require('express');
const router = express.Router();
const LogEntry = require('../models/LogEntry');

//API Password
const { PASSWORD } = process.env;

//GET /api/logs
router.get('/', async (req, res, next) => {
  try {
    const logEntries = await LogEntry.find();
    res.json(logEntries);
  } catch (error) {
    next(error);
  }
});

//POST /api/logs
router.post('/', async (req, res, next) => {
  const logEntry = new LogEntry(req.body);

  try {
    if (req.get('X-API-PASSWORD') !== PASSWORD) {
      res.status(401);
      throw new Error('Unauthorized');
    }

    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;

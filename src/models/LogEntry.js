const mongoose = require('mongoose');

const logEntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    comments: {
      type: String
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      defualt: 0
    },
    image: {
      type: String
    },
    latitude: {
      type: Number,
      required: true,
      min: -90,
      max: 90
    },
    longitude: {
      type: Number,
      required: true,
      min: -180,
      max: 180
    },
    visitDate: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('LogEntry', logEntrySchema);

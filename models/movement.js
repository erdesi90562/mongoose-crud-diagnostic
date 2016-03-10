"use strict";
const mongoose = require('mongoose');

const movementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    validates: {
      validator: function(string) {
        return string.length <= 200;
      },
      message: 'Description cannot be longer than 200 characters.'
    }
  },
  startYear: {
    type: String,
    match: /^\d{4}$/
  },
  endYear: {
    type: String,
    match: /^\d{4}$/
  },
  _ancestor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movement'
  }
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;

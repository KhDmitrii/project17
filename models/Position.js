const mongoose = require('mongoose');

const PositionSchema = new mongoose.Schema({
  value: {
    type: String,
    required: [true, 'Значение обязательно'],
    trim: true,
    maxlength: [100, 'Максимальная длина значения - 100 символов'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Position', PositionSchema);

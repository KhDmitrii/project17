const mongoose = require('mongoose');

// https://mongoosejs.com/docs/api/schema.html
const PersonalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Имя обязательное поле'],
    trim: true,
    maxlength: [100, 'Максимальная длина имени - 100 символов'],
  },
  surname: {
    type: String,
    required: [true, 'Фамилия обязательное поле'],
    trim: true,
    maxlength: [100, 'Максимальная длина фамилии - 100 символов'],
  },
  patronymic: {
    type: String,
    required: false,
    trim: true,
    maxlength: [100, 'Максимальная длина отчества - 100 символов'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  position: {
    type: mongoose.Schema.ObjectId,
    ref: 'Position',
    required: [true, 'Должность обязательна'],
  },
});

module.exports = mongoose.model('Personal', PersonalSchema);

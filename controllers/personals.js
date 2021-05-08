const Personal = require('../models/Personal');

// @desc    Получение всех персоналий
// @route   GET /api/v1/personals
exports.getPersonals = async (req, res, next) => {
  try {
    const personals = await Personal.find().populate('position');
    res.status(200).json({
      success: true,
      data: personals,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

// @desc    Получение одной персоналии по id
// @route   GET /api/v1/personals/:id
exports.getPersonal = async (req, res, next) => {
  try {
    const personal = await Personal.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: personal,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

// @desc    Создание одной персоналии
// @route   POST /api/v1/personals
exports.createPersonal = async (req, res, next) => {
  try {
    const personal = await Personal.create(req.body);
    res.status(201).json({
      success: true,
      data: personal,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

// @desc    Изменение персоналии по id
// @route   PUT /api/v1/personals/:id
exports.updatePersonal = async (req, res, next) => {
  try {
    const personal = await Personal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      data: personal,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

// @desc    Удаление персоналии по id
// @route   DELETE /api/v1/personals/:id
exports.deletePersonal = async (req, res, next) => {
  try {
    await Personal.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

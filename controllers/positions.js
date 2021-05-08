const Position = require('../models/Position');

// @desc    Получение всех должностей
// @route   GET /api/v1/positions
exports.getPositions = async (req, res, next) => {
  try {
    const positions = await Position.find();
    res.status(200).json({
      success: true,
      data: positions,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

// @desc    Получение одной должности по id
// @route   GET /api/v1/positions/:id
exports.getPosition = async (req, res, next) => {
  try {
    const position = await Position.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: position,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

// @desc    Создание одной должности
// @route   POST /api/v1/positions
exports.createPosition = async (req, res, next) => {
  try {
    const position = await Position.create(req.body);
    res.status(201).json({
      success: true,
      data: position,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

// @desc    Изменение должности по id
// @route   PUT /api/v1/positions/:id
exports.updatePosition = async (req, res, next) => {
  try {
    const position = await Position.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      data: position,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

// @desc    Удаление должности по id
// @route   DELETE /api/v1/positions/:id
exports.deletePosition = async (req, res, next) => {
  try {
    await Position.findByIdAndRemove(req.params.id);
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

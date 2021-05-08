const express = require('express');
const {
  updatePosition,
  deletePosition,
  getPosition,
  getPositions,
  createPosition,
} = require('../controllers/positions');

const router = express.Router({ mergeParams: true });

router.route('/').post(createPosition).get(getPositions);
router
  .route('/:id')
  .get(getPosition)
  .delete(deletePosition)
  .put(updatePosition);

module.exports = router;

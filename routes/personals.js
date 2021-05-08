const express = require('express');
const {
  updatePersonal,
  deletePersonal,
  getPersonal,
  getPersonals,
  createPersonal,
} = require('../controllers/personals');

const router = express.Router({ mergeParams: true });

router.route('/').post(createPersonal).get(getPersonals);
router
  .route('/:id')
  .get(getPersonal)
  .delete(deletePersonal)
  .put(updatePersonal);

module.exports = router;

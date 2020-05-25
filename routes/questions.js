
const express = require('express');
const router = express.Router();

// requiring questions controller
const questionController = require('../controllers/questionsController');

router.post('/create', questionController.questionCreate);
router.post('/:id/options/create', questionController.addOptions);
router.delete('/:id/delete', questionController.deleteQuestion);
router.get('/:id', questionController.view);


// Exporting the ROuter
module.exports = router;

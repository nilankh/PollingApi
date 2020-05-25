
const express = require('express');
const router = express.Router();

// requiring questions controller
const questionController = require('../controllers/questionsController');
const optionController = require('../controllers/optionsController');


router.post('/create', questionController.questionCreate);
router.post('/:id/options/create', optionController.addOption);
router.post('/:id/delete', questionController.deleteQuestion);
router.get('/:id', questionController.view);


// Exporting the ROuter
module.exports = router;

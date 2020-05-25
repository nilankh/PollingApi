const express = require('express');
const router = express.Router();


// requiring options controller
const optionsController = require('../controllers/optionsController');

router.delete('/:id/delete', optionsController.delete);
router.get('/:id/add-vote', optionsController.voteAdd);


// Exporting the Router
module.exports = router;



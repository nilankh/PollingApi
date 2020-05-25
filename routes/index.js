const express = require('express');
const router = express.Router();

// router.get('/', (req, res) =>{
//     res.json({"message": "welcome"})
// });

// all questions routes will follow this routes
router.use('/questions', require('./questions'));


// all options routes to will follow this routes
router.use('/options', require('./options'));

module.exports = router;
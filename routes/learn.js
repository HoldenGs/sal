const express = require('express')
const router = express.Router()

// @route  GET /
// @desc   Display learn page
// @access Public
router.get('/', (req, res) => {
    res.render('learn');
});

module.exports = router;
const express = require('express')
const router = express.Router()

// @route  GET /
// @desc   Display dashboard
// @access Public
router.get('/', (req, res) => {
    res.render('dashboard');
});

module.exports = router;
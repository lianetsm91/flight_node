const express = require('express');
const router = express.Router();
const control = require('../control/control');

router.get('/', (req, res) => control.getFlights(req, res));

module.exports = router;

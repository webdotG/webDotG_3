const express = require('express');
const router = express.Router();
const {} = require('../models/community')
const Auth = require('../midlewear/auth')

/* api/community/... */
router.get('/', Auth, GetAll);


module.exports = router;
const express = require('express');
const router = express.Router();
const {AddUser ,GetAll} = require('../models/community')
const Auth = require('../midlewear/auth')

/* api/community/... */

router.post('/', Auth, AddUser);

router.get('/', Auth, GetAll);


module.exports = router;
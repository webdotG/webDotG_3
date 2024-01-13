const express = require('express');
const router = express.Router();
const {AddUser, GetAllUsers } = require('../models/community')
const Auth = require('../midlewear/auth')

/* api/community/... */

router.post('/', Auth, AddUser);

router.get('/', Auth, GetAllUsers);


module.exports = router;
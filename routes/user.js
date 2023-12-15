const express = require('express');
const router = express.Router();
const {Login, Register, Current} = require('../controllers/users')
const {Auth} = require('../midlewear/auth')


/* api/user/login */
router.post('/login', Login );


/* api/user/register */
router.post('/register', Register);


/* api/user/current */
router.get('/current', Auth ,Current);

module.exports = router;

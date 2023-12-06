var express = require('express');
var router = express.Router();

const {Login, Register, Current} = require('../controllers/users')

/* api/user/login */
router.post('/login', Login );


/* api/user/register */
router.post('/register', Register);


/* api/user/current */
router.get('/current', Current);

module.exports = router;

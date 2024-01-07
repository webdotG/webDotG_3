const express = require('express');
const router = express.Router();
const {Create} = require('../models/post')
const Auth = require('../midlewear/auth')


/* api/postx`/... */
// router.get('/', GetAll);
// router.get('/:id', GetOne);
router.post('/', Auth, Create)
// router.delete('/', Remove)
// router.patch('/', Update)

module.exports = router;

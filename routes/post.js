const express = require('express');
const router = express.Router();
const {GetAll, GetOne, Create, Remove} = require('../models/post')
const Auth = require('../midlewear/auth')


/* api/postx`/... */
router.get('/', GetAll);
router.get('/:id', GetOne);
router.post('/', Auth, Create)
router.delete('/:id', Auth, Remove)
// router.patch('/', Update)

module.exports = router;

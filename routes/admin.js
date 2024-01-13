const express = require('express');
const router = express.Router();
const { LoginAdmin, CurrentAdmin, AddUserAdmin, RemoveUserAdmin} = require('../models/admin')
const Auth = require('../midlewear/auth')


/* admin/user/... */
router.post('/login', LoginAdmin );
router.get('/current', Auth ,CurrentAdmin);
router.post('/add', Auth, AddUserAdmin );
router.delete('/remove', Auth, RemoveUserAdmin );

module.exports = router;

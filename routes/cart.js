const express = require('express');
const router = express.Router();
const {MakeOrder} = require('../models/cart')
const Auth = require('../midlewear/auth')

console.log('AUTH >>>>> : ', Auth)

/* api/cart/... */
router.post('/makeOrder', Auth, MakeOrder );
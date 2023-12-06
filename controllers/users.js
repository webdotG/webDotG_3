// @route
// @desc
// @access

import {prisma} = require('../prisma/client')


const Login = async (req, res) => {
  const {email, password } = req.body
  if(!email && !password) {
    return res.status(400).json({message: 'пожалуйста заполните поля они обязательны'}) //message для отображения на фронте
  }


}

const Register = async (req, res) => {
  res.send('register')
}

const Current = async (req, res) => {
  res.send('current')
}


module.exports = {
  Login,
  Register,
  Current
}
const {prisma} = require ('../prisma/prisma-client')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')

/**
 * 
 * @route POST /api/user/register
 * @desc Регистрация
 * @access Public
 */
const Register = async (req, res) => {
  const { email, name, password } = req.body

  if (!email || !password || !name) {
    return res.status(400).json({ message: 'пожалуйста заполните обязательные поля' })
  }

  const regesteredUser = await prisma.user.findFirst({     //проверяю есть ли уже такой пользователь в бд
    where: {
      email
    }
  })

  if (regesteredUser) {
    return res.status(400).json({ message: 'пользователь с таким email уже существует' })
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await prisma.user.create({  //создаю пользователя в бд
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  const secret = process.env.JWT_SECRET
  if (user && secret) {
    res.status(201).json({
      id: user.id,
      email: user.email,
      name,
      token: jwt.sign({id: user.id}, secret, {expiresIn: '100d'}) //шифрую id юзера
    })
  } else {
    return res.status(400).json({message: 'не удалось создать пользователя'})
  }
}

/**
 * @route POST /api/user/login
 * @desс Логин
 * @access Public
 */
const Login = async (req, res) => {
  console.log("SERVER LOGIN : ")
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'пожалуйста заполните поля они обязательны' }) //message для отображения на фронте
  }

  const user = await prisma.user.findFirst({
    where: {
      email: email
    }
  })

  const isPasswordCorrect = user && (await bcrypt.compare(password, user.password))
  const secret = process.env.JWT_SECRET
  if (user && isPasswordCorrect && secret) {     //если нашёлся пользователь и пароль верный
    res.status(200).json({
      id: user.id,
      email: user.email,
      name: user.name,
      token: jwt.sign({id: user.id}, secret, {expiresIn: '1d'})  //шифрую id юзера
    })
  } else {
    return res.status(400).json({ message: 'неверный логин или пароль' })
  }

}


const Current = async (req, res) => {
  return res.status(200).json(req.user)
}


module.exports = {
  Login,
  Register,
  Current
}
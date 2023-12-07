const { prisma } = require('../prisma/prisma-client')
const jwt = require('jsonwebtoken')

const Auth = async (req, res, next) => {
  try {

    const token = (req.headers.authorization || '' ).replace(/Bearer\s?/, '');
                  //req.Headers.Authorization?.split('')[1] 
    console.log('TOKEN', token)    
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id
      }
    })

    req.user = user

    next()

  } catch (err) {
    res.status(401).json({message: 'не авторизован'})
  }
}

module.exports = { Auth }
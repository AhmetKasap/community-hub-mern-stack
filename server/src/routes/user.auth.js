const express = require('express')
const router = express.Router()

const userAuth = require('../controllers/user.auth')
const userValidationMiddlewares = require('../middlewares/validations/user')
const userAuthMiddlewares = require('../middlewares/user.auth')


router.post('/login',userValidationMiddlewares.login, userAuth.login)
router.post('/register', userValidationMiddlewares.register, userAuth.register)

router.get('/authUserControl', userAuthMiddlewares.checkToken, userAuth.authUserControl)



module.exports = router
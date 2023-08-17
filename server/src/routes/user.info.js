const express = require('express')
const router = express.Router()
const userInfoControllers = require('../controllers/user.info')
const userAuthMiddlewares = require('../middlewares/user.auth')

router.get('/user/profile', userAuthMiddlewares.checkToken, userInfoControllers.getUser)
router.post('/user/profile-edit', userAuthMiddlewares.checkToken, userInfoControllers.editProfile)






module.exports = router
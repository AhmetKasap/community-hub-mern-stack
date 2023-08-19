const express = require('express')
const router = express.Router()
const userInfoControllers = require('../controllers/user.info')
const userAuthMiddlewares = require('../middlewares/user.auth')
const upload = require('../middlewares/lib/upload')

router.get('/user/profile', userAuthMiddlewares.checkToken, userInfoControllers.getUser)
router.post('/user/profile-edit', userAuthMiddlewares.checkToken, userInfoControllers.editProfile)
router.post('/user/profile-edit-avatar', userAuthMiddlewares.checkToken, upload.single('image'), userInfoControllers.editAvatar)







module.exports = router
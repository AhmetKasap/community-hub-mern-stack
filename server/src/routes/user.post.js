const express = require('express')
const router = express.Router()
const userPostControllers = require('../controllers/user.post')
const userAuthMiddlewares = require('../middlewares/user.auth')



router.get('/user/profile/post', userAuthMiddlewares.checkToken, userPostControllers.getPost)
router.post('/user/profile/add-post',userAuthMiddlewares.checkToken,userPostControllers.addPost)

module.exports = router
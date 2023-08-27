const express = require('express')
const router = express.Router()
const userAllControllers = require('../controllers/all.user.info')
const authControllers = require('../middlewares/user.auth')

router.post('/users/info', userAllControllers.getUsersInfo)
router.post('/users/post', userAllControllers.getUsersPost)
router.post('/user/post', userAllControllers.addPost)

router.post('/categories/post', userAllControllers.getCategoriesPost)

router.post('/post/details', userAllControllers.postDetails)

router.post('/post/add-comment', authControllers.checkToken, userAllControllers.addComment)
router.post('/post/comments', userAllControllers.postComments)



module.exports = router
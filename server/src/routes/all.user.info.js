const express = require('express')
const router = express.Router()
const userAllControllers = require('../controllers/all.user.info')

router.post('/users/info', userAllControllers.getUsersInfo)
router.post('/users/post', userAllControllers.getUsersPost)
router.post('/user/post', userAllControllers.addPost)

router.post('/categories/post', userAllControllers.getCategoriesPost)

router.post('/post/details', userAllControllers.postDetails)



module.exports = router
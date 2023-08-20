const express = require('express')
const router = express.Router()
const userAllControllers = require('../controllers/all.user.info')

router.post('/users/info', userAllControllers.getUsersInfo)
router.post('/users/post', userAllControllers.getUsersPost)


module.exports = router
const express = require('express')
const router = express.Router()


const userAuth = require('../routes/user.auth')
router.use(userAuth)

const userInfo = require('../routes/user.info')
router.use(userInfo)

const userPost = require('../routes/user.post')
router.use(userPost)





module.exports = router
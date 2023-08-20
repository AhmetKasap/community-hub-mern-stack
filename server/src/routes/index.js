const express = require('express')
const router = express.Router()


const userAuth = require('../routes/user.auth')
router.use(userAuth)

const userInfo = require('../routes/user.info')
router.use(userInfo)

const userPost = require('../routes/user.post')
router.use(userPost)

allUsersInfos = require('../routes/all.user.info')
router.use(allUsersInfos)




module.exports = router
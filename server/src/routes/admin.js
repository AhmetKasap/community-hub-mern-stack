const express = require('express')
const router = express.Router()
const adminControllers = require('../controllers/admin')
const authMiddlewares = require('../middlewares/user.auth')
const upload = require('../middlewares/lib/upload')

router.get('/admin/info', authMiddlewares.checkToken, adminControllers.getAdmin)
router.post('/admin/edit', authMiddlewares.checkToken, adminControllers.editAdmin)

router.post('/admin/edit-avatar',authMiddlewares.checkToken, upload.single('image'), adminControllers.editAvatar )


module.exports = router
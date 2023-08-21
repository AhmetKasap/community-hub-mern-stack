const express = require('express')
const router = express.Router()
const adminControllers = require('../controllers/admin')
const authMiddlewares = require('../middlewares/user.auth')

router.get('/admin/info', authMiddlewares.checkToken, adminControllers.getAdmin)
router.post('/admin/edit', authMiddlewares.checkToken, adminControllers.editAdmin)


module.exports = router
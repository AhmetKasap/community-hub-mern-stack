const express = require('express')
const router = express.Router()
const upload = require('../middlewares/lib/upload')
const multer = require('multer')
const Response = require('../utils/Response')

const userAuth = require('../routes/user.auth')
router.use(userAuth)

router.post("/upload", function (req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            throw err
        }

        else {
            return new Response(req.savedImages, "Yükleme Başarılı").success(res)
        }
    })
})


module.exports = router
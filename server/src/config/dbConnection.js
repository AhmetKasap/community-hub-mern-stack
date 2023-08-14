const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Veri tabanı bağlandı.")
})
.catch((err) => {
    console.log("Veritabanı bağlantı hatası", err)
})


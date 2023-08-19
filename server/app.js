const express = require('express')
const app = express()
const path = require('path')
require('express-async-errors')

//! database-connection
require('./src/config/dbConnection')

//! body-parser - express.json
const bodyParser = require('body-parser');     
app.use(bodyParser.urlencoded({extended:false}));  

//! middlewares
//* gelen isteklerin veri alışverişini düzenlemek ve sınırlamak için kullanılan middleware'leri ayarlar.
app.use(express.json())
app.use(express.json({limit : "50mb"}))
app.use(express.urlencoded({limit : "50mb", extended : true , parameterLimit : 50000}))

//! cors
const cors = require('cors')
const corsOptions = require('./src/helpers/cors')
app.use(cors(corsOptions))

//* public altındaki bütün dosyalar artık sunucu da kullanılabilir.
app.use(express.static('public'));


//! json-web-token and cookie-parser
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
app.use(cookieParser())

//! methodOverride
const methodOverride = require('method-override');
app.use(methodOverride('_method'))

//! routes
const routes = require('./src/routes/index')
app.use('/api', routes)


//! app.js - error

app.get('/', (req,res) => {
    res.send('merhabass')
})



app.listen(5000, () => {
    console.log(`Sunucu ${5000} portunda çalışıyor`);
});


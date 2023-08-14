const User = require('../models/user')
const bcrypt = require('bcrypt');
const Response = require('../utils/Response')
const userAuthMiddlewares = require('../middlewares/user.auth')
const APIError = require('../utils/Error')


const login = async (req,res) => {
    const checkUser = await User.findOne({email : req.body.email})

    if(checkUser && await bcrypt.compare(req.body.password, checkUser.password)) {
        userAuthMiddlewares.createToken(checkUser,res) //?token oluşturuldu
    }
    else{
        throw new APIError("Hatalı Giriş Bilgileri", 401).messages(res)
    }
}

const register = async (req,res) => {
    const userCheck = await User.findOne({email : req.body.email})
    if(userCheck){
        return new Response(userCheck, "Bu email adresine kayıtlı zaten bir kullanıcı var.").error404(res)
    }
    else {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const user = new User(req.body)
        user.save()
        .then(data => {
            return new Response (data, "Kayıt Başarılı").created(res)
        })
    }
}


const authUserControl = (req,res)  => {
    return new Response(req.user, "Yetkilendirme Başarılı").success(res)
}

module.exports = {
    login, register, authUserControl
}
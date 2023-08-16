    const jwt = require('jsonwebtoken')
    const Response = require('../utils/Response')
    const User = require('../models/user')
    const APIError = require('../utils/Error')

    const createToken = async (user,res) => {
        const payload = {
            id : user._id,
            email : user.email,
        }
        const token = await jwt.sign({payload}, process.env.JWT_SECRET, {expiresIn:'7d', algorithm:"HS512"})
        if (token) {
            return new Response(token, "Token Oluşturuldu, Giriş Başarılı").created(res)
        }
        else throw APIError("Token oluşturulamadı", 500).messages(res)
    } 

    const checkToken = async (req,res,next) => {
        const bearerToken = req.headers.authorization && req.headers.authorization.startsWith('Bearer ')
        if(! bearerToken) {
            return new Response("Token bulunamadı, oturum açın", 401).error401(res)
        } 
        else {
            const token = req.headers.authorization.split(' ')[1]
            await jwt.verify(token, process.env.JWT_SECRET, async (err,decoded) => {
                if(err) {
                    throw APIError("Token çözümlenemedi", 500).messages(res)
                }
                else {
                    const userInfo = await User.findOne({_id : decoded.payload.id})
                    console.log("user Info :", userInfo)
                    if(!userInfo) {
                        throw new APIError("Kullancı veri tabanınında bulunamadı", 500).messages(res)
                    }
                    else{
                        req.user = userInfo         //ikisi de olur
                        //res.locals.user = userInfo;
                        next()
                    }
                }
            })
        }
    }


    module.exports = {
        createToken,checkToken
    }

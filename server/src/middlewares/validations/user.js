const joi = require('joi');

const register = async (req,res,next) => {
    try {
        const schema = await joi.object({
            name : joi.string().trim().min(3).max(50).required().messages({
                "string.base" : "İsim sadece metin içermelidir.",
                "string.empty" : "İsim alanı boş bıraklılmaz.",
                "string.min" : "Minimum 3 harfli isim girmelisiniz.",
                "string.max" : "Maximum 50 harfli isim girmelisiniz.",
                "string.required" : "İsim alanı zorunludur."

            }),
            lastname : joi.string().trim().min(3).max(50).required().messages({
                "string.base" : "Soyad sadece metin içermelidir.",
                "string.empty" : "Soyad alanı boş bıraklılmaz.",
                "string.min" : "Minimum 3 harfli Soyad girmelisiniz.",
                "string.max" : "Maximum 50 harfli Soyad girmelisiniz.",
                "string.required" : "Soyad alanı zorunludur."

            }),
            email : joi.string().email().trim().min(3).max(50).required().messages({
                "string.base" : "E-mail",
                "string.empty" : "E-mail alanı boş bıraklılmaz.",
                "string.min" : "Minimum 3 harfli E-mail girmelisiniz.",
                "string.max" : "Maximum 50 harfli E-mail girmelisiniz.",
                "string.required" : "E-mail alanı zorunludur."

            }),
            username : joi.string().trim().min(3).max(50).required().messages({
                "string.base" : "username",
                "string.empty" : "username alanı boş bıraklılmaz.",
                "string.min" : "Minimum 3 harfli username girmelisiniz.",
                "string.max" : "Maximum 50 harfli username girmelisiniz.",
                "string.required" : "username alanı zorunludur."

            }),
            explanation : joi.string().min(3).max(50).messages({
                "string.base" : "explanation",
                "string.min" : "Minimum 3 harfli explanation girmelisiniz.",
                "string.max" : "Maximum 50 harfli explanation girmelisiniz.",
            }),
            password : joi.string().trim().min(6).max(50).required().messages({
                "string.base" : "Password",
                "string.empty" : "Password alanı boş bıraklılmaz.",
                "string.min" : "Minimum 6 harfli Password girmelisiniz.",
                "string.max" : "Maximum 50 harfli Password girmelisiniz.",
                "string.required" : "Password alanı zorunludur."

            })
        })
        await schema.validateAsync(req.body)
       
        next()
        
        
    } 
    catch (error) {
        next(error);

    }
   
    
}

const login = async (req,res,next) => {
    try {
        const schema = await joi.object({
            email : joi.string().email().trim().min(3).max(50).required().messages({
                "string.base" : "E-mail",
                "string.empty" : "E-mail alanı boş bıraklılmaz.",
                "string.min" : "Minimum 3 harfli E-mail girmelisiniz.",
                "string.max" : "Maximum 50 harfli E-mail girmelisiniz.",
                "string.required" : "E-mail alanı zorunludur."

            }),
            password : joi.string().trim().min(6).max(50).required().messages({
                "string.base" : "Password",
                "string.empty" : "Password alanı boş bıraklılmaz.",
                "string.min" : "Minimum 6 harfli Password girmelisiniz.",
                "string.max" : "Maximum 50 harfli Password girmelisiniz.",
                "string.required" : "Password alanı zorunludur."

            })
        })
        await schema.validateAsync(req.body)
       
        next()
        
        
    } 
    catch (error) {
        next(error);

    }
   

}

module.exports = {
    login,register
}
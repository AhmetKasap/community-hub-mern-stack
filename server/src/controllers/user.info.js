const User = require('../models/user')
const Response = require('../utils/Response')
const APIError = require('../utils/Error')

const getUser = (req,res) => {
    //tokena göre kullancıyı bulacağız.
    User.findById(req.user.id)
    .then(data => {
        return new Response(data, "kullanıcı bilgileri : ").success(res)
    })
    
}

const editProfile = async (req,res) => {
    const id = await req.user.id
    
    const update = {
        name : req.body.name,
        lastname : req.body.lastname,
        username : req.body.username,
        explanation : req.body.explanation,
    }

        
    const user = await User.findByIdAndUpdate(id, update, { new: true })
    if(user) {
        return new Response(user, "Güncellenen, kullanıcı bilgileri : ").success(res)
    }
    else{
        return new APIError('kullanıcı verileri güncellenemedi', '404').messages(res)
    }
    
}


const editAvatar = async (req,res) => {
    const userId = await req.user.id
    const newAvatar = req.file.filename
    console.log(newAvatar)

    const user = await User.findOneAndUpdate({_id : userId}, {avatar : newAvatar}, { new: true })
    if(user) {
        return new Response(user, "Güncellenen, kullanıcı bilgileri : ").success(res)
    }
    else{
        return new APIError('kullanıcı verileri güncellenemedi', '404').messages(res)
    }


}







module.exports = {
    getUser,editProfile,editAvatar
}
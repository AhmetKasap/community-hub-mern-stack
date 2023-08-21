const User = require('../models/user')
const Response = require('../utils/Response')
const Post = require('../models/post')

const getAdmin = async (req,res) => {

    const id = await req.user.id

    const user = await User.findOne({_id : id})
    if(user) {
        return new Response(user, 'admin bilgileri').success(res)
    }

}   


const editAdmin = async (req,res) => {

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


module.exports = {
    getAdmin, editAdmin
}




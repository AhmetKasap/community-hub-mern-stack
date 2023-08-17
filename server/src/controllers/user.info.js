const User = require('../models/user')
const Post = require('../models/post')
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
    const update = await {
        name : req.body.name,
        lastname : req.body.lastname,
        username : req.body.username,
        explanation : req.body.explanation
    }

        
    const user = await User.findByIdAndUpdate(id, update, { new: true })
    if(user) {
        return new Response(user, "Güncellenen, kullanıcı bilgileri : ").success(res)
    }
    else{
        return new APIError('kullanıcı verileri güncellenemedi', '404').messages(res)
    }
    
}


const addPosts = (req,res) => {

    const id = req.user.id
    const title = req.body.title
    const content = req.body.content

    User.findById(id)
    .then(user => {
        const post = new Post({
            title,
            content,
            userRef : user._id
        })
        post.save()
        return new Response(post,"eklenen post").success(res)
    })


}

const getPosts =  async (req,res) => {

    const id = req.user.id
    
    const post = await Post.find({userRef:id})
   
    return new Response(post, "kullanıcının paylaştıgı postlar : ").success(res)


}





module.exports = {
    getUser,editProfile,getPosts,addPosts
}
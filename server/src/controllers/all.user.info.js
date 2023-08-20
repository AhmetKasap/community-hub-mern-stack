const User = require('../models/user')
const Post = require('../models/post')
const Response = require('../utils/Response')


const getUsersInfo = async (req,res) => {
 

    const user = await User.findOne({username : req.body.username})
    if(user) {
        return new Response(user, 'kullanıcı bilgileri').success(res)
    }
    else {
        return new Response('böyle bir kullanıcı yok').error404(res)
    }

} 

const getUsersPost = async (req,res) => {
    console.log(req.body.username)

    const user = await User.findOne({username : req.body.username})

    const post = await Post.find({userRef:user._id})

    if(post) {
        return new Response(post, 'kullanıcının postları' ).success(res)
    }
    else {
        return new Response('böyle bir kullanıcı yok').error404(res)

    }
    
    

    
} 


module.exports ={
    getUsersInfo,getUsersPost
}
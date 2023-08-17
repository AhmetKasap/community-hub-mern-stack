const User = require('../models/user')
const Post = require('../models/post')
const Response = require('../utils/Response')

const addPost = (req,res) => {

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

const getPost =  async (req,res) => {

    const id = req.user.id
    
    const post = await Post.find({userRef:id})
   
    return new Response(post, "kullanıcının paylaştıgı postlar : ").success(res)
    


}

module.exports = {
    getPost,addPost
}
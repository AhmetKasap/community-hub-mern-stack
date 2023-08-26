const User = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comment')
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
       
    

    const user = await User.findOne({username : req.body.username})

    const post = await Post.find({userRef:user._id})

    if(post) {
        return new Response(post, 'kullanıcının postları' ).success(res)
    }
    else {
        return new Response('böyle bir kullanıcı yok').error404(res)

    }
    
    

    
} 


const addPost = async (req,res) => {
    const id = await req.user.id

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






const getCategoriesPost = async (req,res) => {

    const categories = req.body.categories

    

    const post = await Post.find({ content: { $regex: categories, $options: 'i' } })
        .populate('userRef', 'name lastname avatar username ') 
    if(post) {
        return new Response(post, `${categories} ile eşleşen postlar`).success(res)
    }
    else {
        return new Response(post, `${categories} ile eşleşen post bulunamadı`).error404(res)

    }


}


const postDetails = async (req,res) => {

    const postId = await req.body.postId
    const post = await Post.findById(postId)
    .populate('userRef', 'name lastname avatar username')

    if(post) {
        return new Response(post, 'post detayları').success(res)
    }

}

const addComment = async (req,res) => {
    const userId = req.user.id

    const userComment = req.body.content
    const postId = req.body.postId



    if(userId) {
        const post = await Post.findById(postId)
        if(post) {
            const comment = await new Comment({
            
                content : userComment,
                postRef : post._id,
                userRef : userId
            })
            await comment.save()            
            await comment.populate('userRef', 'name lastname avatar username')

            


            
    
            return new Response(comment, 'yorum eklendi').success(res)

        }

    }
}


const postComments = async (req,res) => {
    const postId = await req.body.postId
    const post = await Post.findById(postId)
    if(post) {
        const comment = await Comment.find({postRef : post._id})
        .populate('userRef', 'name lastname avatar username')

        return new Response (comment, 'post yorumlari').success(res)
    }

}











module.exports ={
    getUsersInfo,getUsersPost,addPost,getCategoriesPost,postDetails,addComment,postComments
}
const User = require('../models/user')
const Post = require('../models/post')
const Comment = require('../models/comment')
const Response = require('../utils/Response')
const Like = require('../models/like')
const Follow = require('../models/follow')
require('dotenv').config()


const getUsersInfo = async (req, res) => {


    const user = await User.findOne({ username: req.body.username })
    if (user) {
        return new Response(user, 'kullanıcı bilgileri').success(res)
    }
    else {
        return new Response('böyle bir kullanıcı yok').error404(res)
    }

}


const getUsersPost = async (req, res) => {
    const username = req.body.username;

    // Kullanıcı bilgilerini bul
    const user = await User.findOne({ username });

    if (!user) {
        return new Response('Böyle bir kullanıcı yok').error404(res);
    }

    // Kullanıcının postlarını bul
    const userPosts = await Post.find({ userRef: user._id })
        .populate('userRef', 'name lastname avatar username');

    // Kullanıcının postlarının _id değerlerini alarak bu postlara ait yorumları bul
    const userPostIds = userPosts.map(post => post._id);
    const userComments = await Comment.find({ postRef: { $in: userPostIds } })
        .populate('userRef', 'name lastname avatar username')
        .populate('postRef', 'title content');

    // Kullanıcının postlarını ve bu postlara ait yorumları birleştirip dön
    const userPostsWithComments = userPosts.map(post => {
        const postComments = userComments.filter(comment => comment.postRef.equals(post._id));
        return {
            post: post,
            comments: postComments
        };
    });

    return new Response(userPostsWithComments.reverse(), 'Kullanıcının postları ve yorumları').success(res);
}


/*
const getUsersPost = async (req, res) => {



    const user = await User.findOne({ username: req.body.username })

    const post = await Post.find({ userRef: user._id })

    if (post) {
        return new Response(post, 'kullanıcının postları').success(res)
    }
    else {
        return new Response('böyle bir kullanıcı yok').error404(res)

    }


}

*/









const addPost = async (req, res) => {
    const id = await req.user.id

    const title = req.body.title
    const content = req.body.content

    User.findById(id)
        .then(user => {
            const post = new Post({
                title,
                content,
                userRef: user._id
            })
            post.save()
            return new Response(post, "eklenen post").success(res)
        })
}





const getCategoriesPost = async (req, res) => {
    const categories = req.body.categories;

    // İlgili kategorilere sahip postları bul
    const posts = await Post.find({ content: { $regex: categories, $options: 'i' } })
        .populate('userRef', 'name lastname avatar username ');

    if (posts.length > 0) {
        // Postların _id değerlerini alarak bu postlara ait yorumları bul
        const postIds = posts.map(post => post._id);
        const comments = await Comment.find({ postRef: { $in: postIds } })
            .populate('userRef', 'name lastname avatar username')
            .populate('postRef', 'title content');

        // Postları ve ilgili yorumları birleştirip dön
        const postsWithComments = posts.map(post => {
            const postComments = comments.filter(comment => comment.postRef.equals(post._id));
            return {
                post: post,
                comments: postComments
            };
        });

        return new Response(postsWithComments.reverse(), 'Postlar ve yorumlar').success(res);
    } else {
        return new Response([], `${categories} ile eşleşen post bulunamadı`).error404(res);
    }
}




/*
const getCategoriesPost = async (req, res) => {

    const categories = req.body.categories



    const post = await Post.find({ content: { $regex: categories, $options: 'i' } })
        .populate('userRef', 'name lastname avatar username ')
    if (post) {
        return new Response(post, `${categories} ile eşleşen postlar`).success(res)
    }
    else {
        return new Response(post, `${categories} ile eşleşen post bulunamadı`).error404(res)

    }


}
*/
















const postDetails = async (req, res) => {

    const postId = await req.body.postId
    const post = await Post.findById(postId)
        .populate('userRef', 'name lastname avatar username')

    if (post) {
        return new Response(post, 'post detayları').success(res)
    }

}

const addComment = async (req, res) => {
    const userId = req.user.id

    const userComment = req.body.content
    const postId = req.body.postId



    if (userId) {
        const post = await Post.findById(postId)
        if (post) {
            const comment = await new Comment({

                content: userComment,
                postRef: post._id,
                userRef: userId
            })
            await comment.save()
            await comment.populate('userRef', 'name lastname avatar username')

            return new Response(comment, 'yorum eklendi').success(res)

        }

    }
}







const postComments = async (req, res) => {
    const postId = await req.body.postId
    const post = await Post.findById(postId)
    if (post) {
        const comment = await Comment.find({ postRef: post._id })
            .populate('userRef', 'name lastname avatar username')

        return new Response(comment, 'post yorumlari').success(res)
    }

}


//*config openAI
const Configuration = require("openai");
const OpenAIApi = require('openai')
const configuration = new Configuration({

    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const chatGpt = async (req, res) => {
    const userData = await req.body.userData

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: userData }],
        model: "gpt-3.5-turbo",
      });

    return new Response(completion.choices[0],'').success(res)

}


const addFollow = async (req,res) => {

    //tokeni olan kullanıcı usernamei olan kullanıcııyı takip edebilecek.

    const id = await req.user.id
    const followUsername = await req.user.username
    const username =await req.body.username

    const user = await User.findOne({username : username})

    if(id) { //token varsa
        const follower = await Follow.findOne({userRef : user._id})  
        if(follower) { //kullanıcı takipçi modeli daha önceden oluşturulmuş ise

            await follower.follower.push(followUsername)
            await follower.save()
    
            return new Response(follower, 'takipçi ekleni').success(res)
        }
        else{ //kullanıcı takipçisi daha önceden yok ise 
            const follow = await new Follow({
                follower : [followUsername],
                userRef : user._id
            })
            await follow.save()
            return new Response(follow, 'takipçi ekleni').success(res)

        }
      

    }

}

const unFollow = async (req,res) => {

    const id = req.user.id
    const tokenUserName = req.user.username

    const username = req.body.username
    const user = await User.findOne({username : username})



    //Tokeni olan kullanıcı username olan bir kullanıcıyı takip ediyorsa, takipten çıkartabilecek
    if(id) {
        const follow = await Follow.findOne({follower : tokenUserName})

        if (follow) {
            const check = await follow.updateOne({ $pull: { follower: tokenUserName } }, {new:true});
            if(check) {
                const updated = await Follow.find({userRef : user._id})
                return new Response(updated, 'takipden çıkıldı').success(res)

            }
            
        }
        else {
            return new Response('sssssssss yoks').success(res)
        }

    }
    else {
        return new Response('tokens yoks').success(res)

    }


}





module.exports = {
    getUsersInfo, getUsersPost, addPost, getCategoriesPost, postDetails, addComment, postComments, chatGpt, addFollow, unFollow
}
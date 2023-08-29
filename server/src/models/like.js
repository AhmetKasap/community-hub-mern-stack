const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema({

    numberLikes : {type : Number, required : true},
    postRef : {type : mongoose.Schema.Types.ObjectId, ref:'Post'},
    userRef : {type : mongoose.Schema.Types.ObjectId, ref:'User'}

})

const like = mongoose.model('Like', likeSchema)

module.exports = like
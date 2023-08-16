const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

   title : {type : String, required : true},
   content : {type : String, required : true},

   userRef: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

})

const Post = mongoose.model('POST', postSchema)
module.exports = Post
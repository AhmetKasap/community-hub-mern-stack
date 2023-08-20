const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

   title : {type : String},
   content : {type : String, required : true},

   userRef: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

},{
   timestamps:true,
  
})

const Post = mongoose.model('POST', postSchema)
module.exports = Post
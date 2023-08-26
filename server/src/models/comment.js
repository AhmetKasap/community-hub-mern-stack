const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({

    content : {type : String, required : true },
    postRef : {type : mongoose.Schema.Types.ObjectId, ref:'Post'},
    userRef : {type : mongoose.Schema.Types.ObjectId, ref:'User'}



},{
    timestamps:true,
   
})

const comment = mongoose.model('Comment', commentSchema)
module.exports = comment
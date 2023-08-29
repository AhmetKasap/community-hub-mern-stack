const mongoose = require('mongoose')

const followSchema = mongoose.Schema({

    follower : {type : [String]},
    userRef : {type : mongoose.Schema.Types.ObjectId, ref:'User'}



})

const follow = mongoose.model('Follow', followSchema)
module.exports = follow
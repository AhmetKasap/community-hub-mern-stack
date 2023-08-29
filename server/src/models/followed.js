const mongoose = require('mongoose')

const followedSchema = mongoose.Schema({

    follows : {type : [String]},
    userRef : {type : mongoose.Schema.Types.ObjectId, ref:'User'}



})

const followed = mongoose.model('Followed', followedSchema)
module.exports = followed
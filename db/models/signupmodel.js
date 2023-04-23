

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email:  String,
    password: {type: String}
},{strict:false,strictQuery:false});



const userModel = new mongoose.model("usersignup",userSchema);






module.exports = userModel;
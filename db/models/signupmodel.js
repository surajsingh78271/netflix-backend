

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email:  String,
    password:  String
})
  
  mongoose.set("strictQuery","true")


const userModel = new mongoose.model("usersignup",userSchema);






module.exports = userModel;
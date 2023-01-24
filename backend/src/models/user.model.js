const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{type:String , required : true },
    email :{ type : String , required : true , unique : true },
     password : { type : String , required : true },
     confirmpassword : { type : String , required : true },
     location : { type : String , required : true },
     role : { type : String , enum : [ "Admin", "Explorer"], required : true },
     DOB : { type : Number , required : true }

})


const Users = mongoose.model("user", userSchema)
module.exports = Users;
const { Schema } = require("mongoose");

const user = new Schema({
    name:{
        type:String,
        required:true 
    },
    email:{
        type:String,
        required:true 
    },
    password:String,
    category:{
        type:String,
        default:"User"
    }
})


const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true

    },
    roll:{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
        
       
    },
    password:{
        required:true,
        type:String
    },
    c_password:{
        type:String,
        required:true
    }

})

const crudcol = new mongoose.model("crudcol",studentSchema)
module.exports = crudcol;
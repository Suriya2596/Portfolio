const mongoose = require("mongoose")
const { Schema } = mongoose

const isEmail = require("validator/lib/isEmail")
const isNumeric = require("validator/lib/isNumeric")

const userSchema = new Schema({
    name:{
        type:String,
        requires:[true,"Name is Required"]
    },
    email:{
        type:String,
        required:[true,"Email is Required"],
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return "Email is not validate"
            },
        }
    },
    phone:{
        type:String,
        required:[true,"Phone is Required"],
        validate : {
            message : function(){
                return "Phone should me Number"
            },
            validator : function(value){
                return isNumeric(value)
            }
        }
    },
    location:{
        type:String,
    }
},{timestamps:true})

const User = mongoose.model("User",userSchema)
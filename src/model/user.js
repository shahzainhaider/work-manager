import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name:String,
    email:{
        type:String,
        require:[true,'Email.required !!']
    },
    password:{
        type:String,
        required:[true,'Password required !!']
    },
    about:String,
    profileURL:String
})

export const User = mongoose.model('users',userSchema)

// mongoose.models.users
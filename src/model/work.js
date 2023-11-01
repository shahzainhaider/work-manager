import mongoose, { Schema } from "mongoose";


const workSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    addedDate:{
        type:Date,
        required:true,
        default: Date.now()
    },
    status:{
        type:String,
        enum:['pending','compeleted'],
        // default:'pending'
    },
    userId:{
        type:mongoose.ObjectId,
        required:true
    }
})

export const Work = mongoose.models.works || mongoose.model('works',workSchema)
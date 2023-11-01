import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique:[true, 'unique value required !!'],
        required: [true, 'Email required !!']
    },
    password: {
        type: String,
    },
    about: String,
    profileURL: String,
})

export const User = mongoose.models.users || mongoose.model('users', userSchema)

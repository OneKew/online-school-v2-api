import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: String,
    phone: String,
    courses:[{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }]


})

export const User = mongoose.model('User', userSchema)
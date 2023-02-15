import mongoose from "mongoose";

const Schema = mongoose.Schema

export const moduleSchema = new Schema({
    _id: Schema.Types.ObjectId,
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    },
    name: {
        type: String,
        required: true,
    },
    lessons: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    }]


})


export const Module = mongoose.model('Module', moduleSchema)
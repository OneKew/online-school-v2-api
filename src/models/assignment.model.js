import mongoose from "mongoose";

const Schema = mongoose.Schema

export const assignmentSchema = new Schema({
    _id: Schema.Types.ObjectId,

    lessons: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson'
    }],

    modules: [{
        type: Schema.Types.ObjectId,
        ref: 'Module'
    }],

    name: {type: String, required: true},

    questions: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }]

})

export const Assignment = mongoose.model('Assignment', assignmentSchema)
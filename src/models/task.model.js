import mongoose from 'mongoose';

const {Schema} = mongoose;

export const taskSchema = new Schema({
    _id: Schema.Types.ObjectId,

    lessons: [{
        type: Schema.Types.ObjectId,
        ref: 'Lesson',
    }],

    modules: [{
        type: Schema.Types.ObjectId,
        ref: 'Module',
    }],

    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    name: {type: String, required: true, },

    type: {type: String, required: true},

    questions: [{
        // required: true,
        // minlength: 1,

        name: {type: String, default: 'Question'},

        question: {type: String, required: true},

        answers: [{
            value: {type: String, required: true},
            description: {type: String, required: true},
            correct: Boolean,
        }],

    }]
});

export const Task = mongoose.model('Task', taskSchema);

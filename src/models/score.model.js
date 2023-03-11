import mongoose from 'mongoose';

const {Schema} = mongoose;

export const scoreSchema = new Schema({
    _id: Schema.Types.ObjectId,
    task: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: true
    },
    wrongAnswers: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],
    correctAnswers: [{
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }],

    student: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    total: {
        type: Number,
        default: 0,
        required: true
    }
})

export const Score = mongoose.model('Score', scoreSchema);

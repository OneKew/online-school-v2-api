import mongoose from 'mongoose';

const { Schema } = mongoose;

export const questionSchema = new Schema({
  _id: Schema.Types.ObjectId,

  assignments: [{
    type: Schema.Types.ObjectId,
    ref: 'Assignment',
  }],

  type: { type: String, required: true },

  name: { type: String },

  question: { type: String, required: true },

  answers: [{
    value: { type: String, required: true },
    description: { type: String, required: true },
    correct: Boolean,
  }],

});

export const Question = mongoose.model('Question', questionSchema);

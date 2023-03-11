import mongoose from 'mongoose';

const { Schema } = mongoose;

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

  name: { type: String, required: true },

  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Question',
  }],

  scores: [{
    type: Schema.Types.ObjectId,
    ref: 'Score'
  }]

});

export const Task = mongoose.model('Task', taskSchema);

import mongoose from 'mongoose';

const { Schema } = mongoose;

export const moduleSchema = new Schema({
  _id: Schema.Types.ObjectId,

  course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },

  name: { type: String, required: true },

  lessons: [{
    type: Schema.Types.ObjectId,
    ref: 'Lesson',
  }],

  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
  }],

});

export const Module = mongoose.model('Module', moduleSchema);

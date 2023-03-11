import mongoose from 'mongoose';

const { Schema } = mongoose;

export const lessonSchema = new Schema({
  _id: Schema.Types.ObjectId,

  module: { type: Schema.Types.ObjectId, ref: 'Module', required: true },

  name: { type: String, required: true },

  description: String,

  text: String,

  embedded: {
    type: {
      url: { type: String, required: true },
      checkpoints: [{
        timestamp: { type: Number, required: true },
        question: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
      }],
    },
    required: false,
  },

  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
  }],

});

export const Lesson = mongoose.model('Lesson', lessonSchema);

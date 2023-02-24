import mongoose from 'mongoose';

const { Schema } = mongoose;

export const lessonSchema = new Schema({
  _id: Schema.Types.ObjectId,

  module: { type: Schema.Types.ObjectId, ref: 'Module' },

  name: { type: String, required: true },

  description: String,

  text: String,

  embedded: {
    type: {
      url: { type: String, required: true },
      checkpoints: [{
        timestamp: { type: Number, required: true },
        question: { type: Schema.Types.ObjectId, ref: 'Assignment', required: true },
      }],
    },
    required: false,
  },

  assignments: [{
    type: Schema.Types.ObjectId,
    ref: 'Assignment',
  }],

});

export const Lesson = mongoose.model('Lesson', lessonSchema);

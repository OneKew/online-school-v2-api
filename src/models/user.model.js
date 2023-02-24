import mongoose from 'mongoose';

const { Schema } = mongoose;

export const userSchema = new Schema({
  _id: Schema.Types.ObjectId,

  email: { type: String, required: true, unique: true },

  passwordHash: { type: String, required: true },

  name: String,

  phone: String,

  roles: [{ type: String, ref: 'Role', required: true }],

  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course',
  }],
});

export const User = mongoose.model('User', userSchema);

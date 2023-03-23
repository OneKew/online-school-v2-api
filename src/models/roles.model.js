import mongoose from 'mongoose';
import {ROLES} from "../utils/constants/roles.js";

const { Schema } = mongoose;

export const rolesSchema = new Schema({

  value: { type: String, unique: true, default: ROLES.USER },

});

export const Role = mongoose.model('Roles', rolesSchema);

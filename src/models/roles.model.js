import mongoose from "mongoose";

const Schema = mongoose.Schema

export const rolesSchema = new Schema({

    value: {type: String, unique: true, default: 'USER'}

})

export const Role = mongoose.model('Roles', rolesSchema)
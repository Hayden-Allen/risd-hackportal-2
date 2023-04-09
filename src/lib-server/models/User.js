import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const UserSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  passwordSalt: {
    type: String,
    required: true,
  },
})

UserSchema.plugin(uniqueValidator)

export default mongoose.models.User || mongoose.model('User', UserSchema)

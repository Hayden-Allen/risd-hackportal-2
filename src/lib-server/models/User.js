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
  isAdmin: {
    type: Boolean,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  currentLevelOfStudy: {
    type: String,
    required: true,
  },
  numQrScans: {
    type: Number,
    required: true,
  },
})

UserSchema.plugin(uniqueValidator)

export default mongoose.models.User || mongoose.model('User', UserSchema)

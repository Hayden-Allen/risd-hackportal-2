import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const RegistrationKeySchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
  },
  value: {
    type: String,
    required: true,
    unique: true,
  },
})

RegistrationKeySchema.plugin(uniqueValidator)

export default mongoose.models.RegistrationKey ||
  mongoose.model('RegistrationKey', RegistrationKeySchema)

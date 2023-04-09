import connectToDb from '$lib-server/connectToDb.js'
import RegistrationKey from '$lib-server/models/RegistrationKey.js'
import { REGISTRATION_KEY_ADMIN_PASSWORD } from '$env/static/private'

if (!REGISTRATION_KEY_ADMIN_PASSWORD) {
  throw new Error(
    'Please define the REGISTRATION_KEY_ADMIN_PASSWORD environment variable inside .env'
  )
}

export function validateRegistrationKeyAdminPassword(password) {
  return password === REGISTRATION_KEY_ADMIN_PASSWORD
}

export async function createRegistrationKey(value) {
  await connectToDb()

  const key = await RegistrationKey.create({
    createdAt: new Date(),
    value,
  })

  return key
}

export async function findRegistrationKeyByValue(value) {
  await connectToDb()
  return await RegistrationKey.findOne({
    value,
  })
}

export async function deleteRegistrationKeyByValue(value) {
  await connectToDb()
  return await RegistrationKey.deleteMany({
    value,
  })
}

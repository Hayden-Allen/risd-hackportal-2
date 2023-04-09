import { json } from '@sveltejs/kit'
import { createUser } from '$lib-server/userUtils.js'
import {
  findRegistrationKeyByValue,
  deleteRegistrationKeyByValue,
} from '$lib-server/registrationKeyUtils.js'

export async function POST({ request }) {
  let { username, password, registrationKey } = await request.json()
  const matchedRegistrationKey = await findRegistrationKeyByValue(registrationKey)
  if (!matchedRegistrationKey) {
    throw new Error('No matching registration key found')
  }
  username = username.replace(/\s/g, '')
  if (!username || !password) {
    throw new Error('Missing username or password')
  }
  if (password.length < 8) {
    throw new Error('Password too short')
  }
  const user = await createUser({ username, password, registrationKey })
  await deleteRegistrationKeyByValue(registrationKey)
  return json({ _id: user._id })
}

import { json } from '@sveltejs/kit'
import { createUser } from '$lib-server/userUtils.js'

export async function POST({ request }) {
  let {
    username,
    password,
    firstName,
    lastName,
    phoneNumber,
    age,
    country,
    school,
    currentLevelOfStudy,
  } = await request.json()

  username = username.replace(/\s/g, '')
  if (!username || !password) {
    throw new Error('Missing username or password')
  }
  if (password.length < 8) {
    throw new Error('Password too short')
  }

  const user = await createUser({
    username,
    password,
    firstName,
    lastName,
    phoneNumber,
    age,
    country,
    school,
    currentLevelOfStudy,
  })

  return json({ _id: user._id })
}

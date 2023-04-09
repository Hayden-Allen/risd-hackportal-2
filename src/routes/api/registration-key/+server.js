import {
  validateRegistrationKeyAdminPassword,
  createRegistrationKey,
  deleteRegistrationKeyByValue,
} from '$lib-server/registrationKeyUtils.js'

export async function POST({ request }) {
  const { value, password } = await request.json()
  if (!validateRegistrationKeyAdminPassword(password)) {
    throw new Error('Invalid password')
  }
  if (!value) {
    throw new Error('Missing value')
  }
  if (value.length < 8) {
    throw new Error('Value too short')
  }
  await createRegistrationKey(value)
  return new Response(null, { status: 200 })
}

export async function DELETE({ request }) {
  const { value, password } = await request.json()
  if (!validateRegistrationKeyAdminPassword(password)) {
    throw new Error('Invalid password')
  }
  if (!value) {
    throw new Error('Missing value')
  }
  await deleteRegistrationKeyByValue(value)
  return new Response(null, { status: 200 })
}

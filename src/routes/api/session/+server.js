import { json } from '@sveltejs/kit'
import { findUserByCredentials } from '$lib-server/userUtils.js'
import { createSessionCookie, deleteSessionCookie } from '$lib-server/sessionUtils.js'

export async function POST({ request, cookies }) {
  const { username, password } = await request.json()
  const user = await findUserByCredentials({ username, password })
  if (!user) {
    throw new Error('No user matches provided credentials - incorrect username or password?')
  }
  createSessionCookie(cookies, user)
  return json({ _id: user._id })
}

export function DELETE({ cookies }) {
  deleteSessionCookie(cookies)
  return new Response(null, { status: 200 })
}

import { findUserById } from '$lib-server/userUtils.js'

export async function load({ locals }) {
  if (!locals.user) {
    throw new Error('User is not signed in')
  }

  const user = await findUserById(locals.user._id)
  if (!user.isAdmin) {
    throw new Error('User is not an admin')
  }

  return {
    user: {
      ...locals.user,
    },
  }
}

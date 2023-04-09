import { json } from '@sveltejs/kit'
import { findUserById } from '$lib-server/userUtils.js'

export async function POST({ request, locals }) {
  if (!locals.user) {
    throw new Error('Missing user credentials')
  }

  const adminUser = await findUserById(locals.user._id)
  if (!adminUser.isAdmin) {
    throw new Error('User is not an admin')
  }

  const { scannedUserId } = await request.json()
  const scannedUser = await findUserById(scannedUserId)
  if (!scannedUser) {
    throw new Error('Invalid scanned user ID')
  }

  ++scannedUser.numQrScans
  await scannedUser.save()

  return json({
    firstName: scannedUser.firstName,
    lastName: scannedUser.lastName,
    numQrScans: scannedUser.numQrScans,
  })
}

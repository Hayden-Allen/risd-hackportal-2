import { redirect } from '@sveltejs/kit'
import QRCode from 'qrcode'
import { findUserById } from '$lib-server/userUtils.js'

export async function load({ locals }) {
  if (!locals.user) {
    throw redirect(307, '/sign-in')
  }
  console.log(locals.user)

  const user = await findUserById(locals.user._id)

  return {
    user: {
      ...locals.user,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    qrCode: await QRCode.toDataURL(locals.user._id, {
      color: {
        dark: '#09090b',
        light: '#d4d4d8',
      },
    }),
  }
}

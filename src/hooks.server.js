import { verifySessionCookie } from '$lib-server/sessionUtils'

export async function handle({ event, resolve }) {
  event.locals.user = await verifySessionCookie(event.cookies)
  return await resolve(event)
}

import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '$env/static/private'

if (!JWT_SECRET) {
  throw new Error('Please define the JWT_SECRET environment variable inside .env')
}

function createSessionToken(user) {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
    },
    JWT_SECRET,
    {
      expiresIn: '24h',
    }
  )
}

function verifySessionToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export function createSessionCookie(cookies, user) {
  cookies.set('session', createSessionToken(user), {
    path: '/',
    sameSite: 'strict',
  })
}

export function deleteSessionCookie(cookies) {
  cookies.delete('session', {
    path: '/',
    sameSite: 'strict',
  })
}

function getSessionCookie(cookies) {
  return cookies.get('session', {
    path: '/',
    sameSite: 'strict',
  })
}

export function verifySessionCookie(cookies) {
  return verifySessionToken(getSessionCookie(cookies))
}

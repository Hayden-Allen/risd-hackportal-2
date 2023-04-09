import crypto from 'crypto'
import connectToDb from '$lib-server/connectToDb.js'
import User from '$lib-server/models/User.js'

export async function createUser({ username, password }) {
  await connectToDb()

  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

  return await User.create({
    createdAt: new Date(),
    username,
    passwordSalt: salt,
    passwordHash: hash,
  })
}

export async function findUserById(id) {
  await connectToDb()
  return await User.findById(id)
}

export async function findUserByCredentials({ username, password }) {
  await connectToDb()

  const user = await User.findOne({
    username,
  })

  if (!user) {
    return null
  }

  const hash = crypto.pbkdf2Sync(password, user.passwordSalt, 1000, 64, 'sha512').toString('hex')

  if (hash === user.passwordHash) {
    return user
  } else {
    return null
  }
}

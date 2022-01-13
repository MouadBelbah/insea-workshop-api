import dotenv from 'dotenv'

dotenv.config()

export const mongo = {
  uri: process.env.MONGO_URI,
}

export const jwt = {
  secret: process.env.JWT_SECRET,
  timeUnit: 'days',
  expiration: 1,
}

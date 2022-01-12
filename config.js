import dotenv from 'dotenv'

dotenv.config()

export const mongo = {
  uri: process.env.MONGO_URI,
}

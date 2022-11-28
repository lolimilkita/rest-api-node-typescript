import { logger } from './logger'
import mongoose from 'mongoose'
import config from '../config/environment'

mongoose
  .connect(`${config.db}`)
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.info('Could not connect to DB')
    logger.error(error)
    process.exit(1)
  })

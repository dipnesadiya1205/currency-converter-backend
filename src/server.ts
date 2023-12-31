import { createServer } from 'http'
import { config } from 'dotenv'
import { resolve } from 'path'
import { logger } from './utils/logger'

/**
 * Load Env
 */
config({
	path: resolve(__dirname, '../.env')
})

/**
 * Load App
 */
import app from './app'
const server = createServer(app)
const port: number = Number(process.env.PORT) || 8080

server.listen(port, () => {
	logger.info(__filename, '', '', `Server is running on ${port}`, ``)
})

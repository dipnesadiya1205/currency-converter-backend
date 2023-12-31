import got from 'got'
import { HOST, COINGECKO_SERVICE } from './config'
import { logger } from '../utils/logger'

const host = HOST().COINGECKO

class Coingecko {
	public async getExchangeRates() {
		try {
			const uri = `${host}${COINGECKO_SERVICE.GET_EXCHANGE_RATE}`
			const response = await got(uri, {
				method: 'GET',
				json: true,
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				}
			})
			return response.body
		} catch (err) {
			logger.error(__filename, 'getExchangeRates', 'No UUID', 'Error during fetching exchange rates', err)
			throw err
		}
	}
}

export default new Coingecko()

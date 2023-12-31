import got from 'got'
import { HOST, COINGECKO_SERVICE } from './config'
import { logger } from '../utils/logger'

const host = HOST().COINGECKO

class Coingecko {
	public async getExchangeRates(reqBody: any) {
		try {
			const uri = `${host}${COINGECKO_SERVICE.GET_EXCHANGE_RATE}`
			const response = await got(uri, {
				method: 'GET',
				json: true,
				body: reqBody,
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				}
			})
			return response
		} catch (err) {
			logger.error(__filename, 'getExchangeRates', 'No UUID', 'Error during fetching exchange rates', err)
			throw err
		}
	}
}

export default new Coingecko()

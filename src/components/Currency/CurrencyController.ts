import STATUS_CODES from 'http-status-codes'
import { CustomRequest, CustomResponse } from '../../environment'
import { logger } from '../../utils/logger'
import { createResponse } from '../../utils/helper'
import { Coingecko } from '../../services'

class CurrencyController {
	/**
	 * @description get converted rate
	 * @param req
	 * @param res
	 */
	async convertRate(req: CustomRequest, res: CustomResponse) {
		try {
			const { source_currency, target_currency, amount } = req.body

			const currencyRateList = await Coingecko.getExchangeRates()

			const sourceAmount = currencyRateList.rates[source_currency.trim().toLowerCase()].value
			const targetAmount = currencyRateList.rates[target_currency.trim().toLowerCase()].value

			const convertedAmount = (targetAmount * +amount) / sourceAmount

			createResponse(res, STATUS_CODES.OK, req.__('CURRENCY.SUCCESS'), { convertedAmount: `${convertedAmount.toLocaleString('en-US', { maximumFractionDigits: 2 })}` })
		} catch (error) {
			logger.error(__filename, 'convertRate', req.custom.uuid, 'Error during converting currency rate', error)
			createResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, res.__('SERVER_ERROR_MESSAGE'))
		}
	}

	/**
	 * @description get currency list
	 * @param req
	 * @param res
	 */
	async list(req: CustomRequest, res: CustomResponse) {
		try {
			const { rates } = await Coingecko.getExchangeRates()

			const list = []

			for (const currency of Object.keys(rates)) {
				list.push({ name: rates[currency].name, value: currency })
			}

			createResponse(res, STATUS_CODES.OK, req.__('CURRENCY.LIST'), list)
		} catch (error) {
			logger.error(__filename, 'list', req.custom.uuid, 'Error during converting currency rate', error)
			createResponse(res, STATUS_CODES.INTERNAL_SERVER_ERROR, res.__('SERVER_ERROR_MESSAGE'))
		}
	}
}

export default new CurrencyController()

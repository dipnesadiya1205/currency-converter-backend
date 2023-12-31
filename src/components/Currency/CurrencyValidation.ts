import { NextFunction, Request, Response } from 'express'
import { createValidationResponse } from '../../utils/helper'
import { isEmpty, isNumber, isString } from '../../utils/validator'

class CurrencyValidation {
	/**
	 * @description convert rate
	 * @param req
	 * @param res
	 * @param next
	 */
	convertRate(req: Request, res: Response, next: NextFunction) {
		const { source_currency, target_currency, amount } = req.body
		const errors: any = {}

		if (isEmpty(source_currency)) {
			errors.source_currency = res.__('CURRENCY.VALIDATIONS.source_currency.required')
		} else if (!isString(source_currency)) {
			errors.source_currency = res.__('CURRENCY.VALIDATIONS.source_currency.valid')
		}

		if (isEmpty(target_currency)) {
			errors.target_currency = res.__('CURRENCY.VALIDATIONS.target_currency.required')
		} else if (!isString(target_currency)) {
			errors.target_currency = res.__('CURRENCY.VALIDATIONS.target_currency.valid')
		}

		if (isEmpty(amount)) {
			errors.amount = res.__('CURRENCY.VALIDATIONS.amount.required')
		} else if (!isNumber(amount)) {
			errors.amount = res.__('CURRENCY.VALIDATIONS.amount.valid')
		}

		if (Object.keys(errors).length > 0) {
			createValidationResponse(res, errors)
		} else {
			next()
		}
	}
}

export default new CurrencyValidation()

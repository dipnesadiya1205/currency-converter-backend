import { Router, Request, Response } from 'express'
import Controller from './CurrencyController'
import Validation from './CurrencyValidation'

const router = Router()

/**
 * Currency List
 * @route GET /api/v1/currency/list
 */
router.get('/list', (req: Request, res: Response) => {
	Controller.list(req, res)
})

/**
 * Coin Conversion
 * @route POST /api/v1/currency/convert
 */
router.post('/convert', [Validation.convertRate], (req: Request, res: Response) => {
	Controller.convertRate(req, res)
})

export default router

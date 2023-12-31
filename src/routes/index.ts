import { Application } from 'express'
import CurrencyRoutes from '../components/Currency'
/**
 * Init All routes here
 */
export default (app: Application) => {
	app.use('/api/v1/currency', CurrencyRoutes)
}

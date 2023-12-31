import express, { Request, Response, NextFunction } from 'express'
import { v4 } from 'uuid'

export default (app: express.Application) => {
	app.use((req: Request, res: Response, next: NextFunction) => {
		if (req.custom && req.custom.uuid) {
			return next()
		}
		const uuidObj = {
			uuid: v4()
		}
		req.custom = uuidObj
		next()
	})
}

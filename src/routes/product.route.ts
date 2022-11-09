import { logger } from '../utils/logger'
import { Router, Request, Response, NextFunction } from 'express'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success get product data')
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'Sepatu Sport', price: 200000 }] })
})
ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success add new product')
  res.status(200).send({ status: true, statusCode: 200, data: req.body })
})

import { getProduct, createProduct } from '../controllers/product.controller'
import { Router } from 'express'

export const ProductRouter: Router = Router()

ProductRouter.get('/', getProduct)
ProductRouter.get('/:name', getProduct)
ProductRouter.post('/', createProduct)

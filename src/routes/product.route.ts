import { getProduct, createProduct, updateProduct } from '../controllers/product.controller'
import { Router } from 'express'

export const ProductRouter: Router = Router()

ProductRouter.get('/', getProduct)
ProductRouter.get('/:id', getProduct)
ProductRouter.post('/', createProduct)
ProductRouter.put('/:id', updateProduct)

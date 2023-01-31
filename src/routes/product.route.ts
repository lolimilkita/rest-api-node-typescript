import { requireAdmin } from '../middleware/auth'
import { getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller'
import { Router } from 'express'

export const ProductRouter: Router = Router()

ProductRouter.get('/', getProduct)
ProductRouter.get('/:id', getProduct)
ProductRouter.post('/', requireAdmin, createProduct)
ProductRouter.put('/:id', requireAdmin, updateProduct)
ProductRouter.delete('/:id', requireAdmin, deleteProduct)

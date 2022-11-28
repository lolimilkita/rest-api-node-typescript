import { getProductById } from './../services/product.service'
import { Request, Response } from 'express'
import { createProductValidation } from '../validations/product.validation'
import { logger } from '../utils/logger'
import { addProductToDB, getProductFromDB } from '../services/product.service'
import { v4 as uuidv4 } from 'uuid'

export const createProduct = async (req: Request, res: Response) => {
  req.body.product_id = uuidv4()
  const { error, value } = createProductValidation(req.body)

  if (error) {
    logger.error('ERR: product - create', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }
  try {
    await addProductToDB(value)
    logger.info('Success add new product')
    return res.status(201).send({ status: true, statusCode: 201, message: 'Add product success' })
  } catch (error) {
    logger.error('ERR: product - create', error)
    return res.status(422).send({ status: false, statusCode: 422, message: error })
  }
}

export const getProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  // const products = [
  //   { name: 'Sepatu', price: 200000 },
  //   { name: 'Kaos', price: 300000 }
  // ]

  if (id) {
    // const filterProduct = products.filter((product: ProductType) => {
    //   if (product.name === name) {
    //     return product
    //   }
    // })
    // if (filterProduct.length === 0) {
    //   logger.info('Data not found')
    //   return res.status(404).send({ status: false, statusCode: 404, data: {} })
    // }

    const product = await getProductById(id)
    if (product) {
      logger.info('Success get product data')
      return res.status(200).send({ status: true, statusCode: 200, data: product })
    } else {
      return res.status(404).send({ status: true, statusCode: 404, message: 'Data not found', data: {} })
    }
  } else {
    const products: any = await getProductFromDB()
    logger.info('Success get product data')
    return res.status(200).send({ status: true, statusCode: 200, data: products })
  }
}

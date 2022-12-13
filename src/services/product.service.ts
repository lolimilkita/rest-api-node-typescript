import { logger } from '../utils/logger'
import productModel from '../models/product.model'
import ProductType from '../types/product.type'

export const addProductToDB = async (payload: ProductType) => {
  return await productModel.create(payload)
}

export const getProductFromDB = async () => {
  return await productModel
    .find()
    .then((data) => {
      //   console.log(data)
      return data
    })
    .catch((error) => {
      //   console.log(error)
      logger.info('Cannot get data from DB')
      logger.error(error)
    })
}

export const getProductById = async (id: String) => {
  return await productModel.findOne({ product_id: id })
}

export const updateProductById = async (id: String, payload: ProductType) => {
  const result = await productModel.findOneAndUpdate(
    {
      prduct_id: id
    },
    {
      $set: payload
    }
  )
  return result
}

export const deleteProductById = async (id: String) => {
  const result = await productModel.findOneAndDelete({ product_id: id })
  // console.log(result)
  return result
}

import userModel from '../models/user.model'
import UserType from '../types/user.type'

export const createUSer = async (payload: UserType) => {
  return await userModel.create(payload)
}

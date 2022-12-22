import { registerUser } from '../controllers/auth.controller'
import { Router } from 'express'

export const AuthRouter: Router = Router()

AuthRouter.post('/register', registerUser)

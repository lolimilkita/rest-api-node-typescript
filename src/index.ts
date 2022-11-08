import { routes } from './routes/index'
// console.log("Hello world");

import express, { Application } from 'express'

const app: Application = express()
const port: Number = 4000

routes(app)

app.listen(port, () => console.log(`Server is listening on port ${port}`))

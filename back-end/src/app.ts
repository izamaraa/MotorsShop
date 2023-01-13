import "reflect-metadata"
import "express-async-errors"

import express from "express"

import { handleErrorMiddleware } from "./middlewares/errors.middleware"
import { appRoutes } from "./routes"

import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

appRoutes(app)

app.use(handleErrorMiddleware)

export default app

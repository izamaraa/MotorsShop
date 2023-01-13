import { Router } from "express"
import { createLoginController } from "../controllers/login/createLogin.controller"
// import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
// import { loginDoctorSchema } from "../../schemas/login.schema"

const routes = Router()

export const loginRoutes = () => {
  routes.post("", createLoginController)
  return routes
}

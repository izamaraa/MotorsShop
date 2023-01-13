import { Router } from "express"
import { recoveryPasswordController } from "../controllers/login/createRecoveryPassword.controller"

const routes = Router()

export const recoveryPasswordRoutes = () => {
  routes.post("/:id", recoveryPasswordController)
  return routes
}

import { Router } from "express"
import { createUserController } from "../controllers/user/createUser.controller"
import { listOneUserController } from "../controllers/user/listOneUser.controller"
import { listUsersController } from "../controllers/user/listUsers.controller"
import { softDeleteUserController } from "../controllers/user/softDeleteUser.controller"
import { updateUserController } from "../controllers/user/updateUser.controller"

import { authTokenMiddleware } from "../middlewares/authToken.middleware"
import { schemaValidation } from "../middlewares/schemaValidatio.middleware"

import { userSchema } from "../schemas/user.schema"

const routes = Router()

export const usersRoutes = () => {
  routes.post("", createUserController)
  routes.get("", listUsersController)
  routes.get("/:id", listOneUserController)
  routes.patch("/:id", updateUserController)
  routes.delete("/:id", softDeleteUserController)
  return routes
}

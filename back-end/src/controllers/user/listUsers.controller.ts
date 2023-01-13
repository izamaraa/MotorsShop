import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import { listUsersService } from "../../services/user/listUsers.service"

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService()
  return res.json(instanceToPlain(users))
}

import { Request, Response } from "express"
import { softDeleteUserService } from "../../services/user/softDeleteUser.service"

export const softDeleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params
  await softDeleteUserService(id)
  return res.status(204).send()
}

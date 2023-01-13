import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"
import { recoveryPasswordService } from "../../services/login/createRecoveryPassword.service"

export const recoveryPasswordController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params

  const user = await recoveryPasswordService(id)

  return res.status(200).json(instanceToPlain(user))
}

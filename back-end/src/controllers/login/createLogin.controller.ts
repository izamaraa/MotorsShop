import { Request, Response } from "express"
import { createLoginService } from "../../services/login/createLogin.service"

export const createLoginController = async (req: Request, res: Response) => {
  const userData = req.body

  const token = await createLoginService(userData)

  return res.json({ token })
}

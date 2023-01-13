import AppDataSource from "../../data-source"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import { IUserLogin } from "../../interfaces/user"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

export const createLoginService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({ email })

  if (user?.isActive == false) {
    throw new AppError("Esse usuário está inativo!", 400)
  }

  if (!user) {
    throw new AppError("Email ou senha inválidos!", 401)
  }

  if (!user.isActive) {
    throw new AppError("Usuário inválido!", 401)
  }

  const checkPassword = await compare(password, user.password)

  if (!checkPassword) {
    throw new AppError("Email ou senha inválidos!", 403)
  }

  const token = jwt.sign(
    {
      isActive: user.isActive,
      id: user.id,
    },
    process.env.JWT_SECRET as string,
    {
      subject: user.id,
      expiresIn: "2h",
    }
  )

  return token
}

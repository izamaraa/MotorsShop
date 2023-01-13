import { generate } from "generate-password"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

export const recoveryPasswordService = async (id: string): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      id,
    },
  })

  if (!user) {
    throw new AppError("Usuário não encontrado!", 404)
  }

  //   const generateNewPassword = generate({
  //     length: 10,
  //     numbers: true,
  //   })

  user.password = generate({
    length: 10,
    numbers: true,
  })

  await userRepository.save(user)

  return user.password
}

import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

export const listOneUserService = async (id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      id,
    },
  })

  if (!user) {
    throw new AppError("Usuário não encontrado!", 404)
  }

  return user
}

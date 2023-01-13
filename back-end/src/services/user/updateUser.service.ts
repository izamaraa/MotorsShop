import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IUserRequest } from '../../interfaces/user';

export const updateUserService = async (id: string, data: IUserRequest) => {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({
        where: {
            id,
        },
    });

    if (!user) {
        throw new AppError('Usuário não encontrado!', 404);
    }

    const updatedUser = {
        ...user,
        ...data,
    };
    
    await userRepository.save(updatedUser);
    return updatedUser;
};

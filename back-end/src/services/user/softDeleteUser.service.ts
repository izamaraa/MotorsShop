import AppDataSource from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';

export const softDeleteUserService = async (id: string): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id });

    if (!user) {
        throw new AppError('Usuário não encontrado!', 404);
    }

    if (!user.isActive) {
        throw new AppError('Usuário já está inativo!');
    }

    user.isActive = false;

    await userRepository.update({ id }, user);
};

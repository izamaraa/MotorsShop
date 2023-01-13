import { hash } from 'bcryptjs';
import AppDataSource from '../../data-source';
import { Address } from '../../entities/address.entity';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/appError';
import { IUserRequest } from '../../interfaces/user';

export const createUserService = async ({
    name,
    birthDate,
    image,
    email,
    phone,
    password,
    cpf,
    isSeller,
    bio,
    address,
}: IUserRequest): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User);
    const addressRepository = AppDataSource.getRepository(Address);

    const userAlreadyExists = await userRepository.findOneBy({ cpf });
    const emailAlreadyRegistered = await userRepository.findOneBy({ email });

    if (userAlreadyExists || emailAlreadyRegistered) {
        throw new AppError('Usuário já cadastrado!', 400);
    }

    const hashedPassword = await hash(password, 10);

    if (isSeller) {
        const newSeller = userRepository.create({
            name,
            email,
            cpf,
            birthDate,
            image,
            phone,
            password: hashedPassword,
            isSeller: true,
            bio,
        });
        const newAddress = addressRepository.create({
            ...address,
        });
        await addressRepository.save(newAddress);
        newSeller.address = newAddress;
        await userRepository.save(newSeller);
        return newSeller;
    }

    const normalUser = userRepository.create({
        name,
        email,
        cpf,
        birthDate,
        phone,
        password: hashedPassword,
        bio,
        image,
    });
    const newAddress = addressRepository.create({
        ...address,
    });
    await addressRepository.save(newAddress);
    await userRepository.save(normalUser);
    normalUser.address = newAddress;
    return normalUser;
};

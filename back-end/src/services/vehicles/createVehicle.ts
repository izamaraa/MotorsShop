import AppDataSource from '../../data-source';
import { Images } from '../../entities/images.entity';
import { User } from '../../entities/user.entity';
import { Vehicle } from '../../entities/vehicle.entity';

interface ICreateVehicle {
    userId: string;
    type: string;
    price: string;
    images: string[];
    km: number;
    year: string;
    title: string;
    description: string;
    isActive: boolean;
    user: User;
}

export const createVehicleService = async (data: ICreateVehicle) => {
    const VehicleRepo = AppDataSource.getRepository(Vehicle);
    const ImageRepo = AppDataSource.getRepository(Images);
    const UserRepo = AppDataSource.getRepository(User);

    const { userId, images, ...restData } = data;

    const userFound = await UserRepo.findOneBy({ id: userId });

    if (!userFound) {
        throw new Error('User not found');
    }

    restData.user = userFound;

    const vehicleCreated = VehicleRepo.create(restData);

    const imagesPromise = images.map(async (image: string) => {
        const teste = ImageRepo.create({ image });

        return ImageRepo.save(teste);
    });

    Promise.all(imagesPromise).then((res) => (vehicleCreated.images = res));

    await VehicleRepo.save(vehicleCreated);

    const { user, ...vehicle } = vehicleCreated;

    return vehicle;
};

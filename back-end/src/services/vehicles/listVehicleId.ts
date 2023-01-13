import AppDataSource from '../../data-source';

import { Vehicle } from '../../entities/vehicle.entity';
import { AppError } from '../../errors/appError';

const vehicleListIdService = async (id: string): Promise<Vehicle> => {
    const vehicleRepository = AppDataSource.getRepository(Vehicle);

    const vehicle = await vehicleRepository.findOneBy({ id: id });

    if (!vehicle) throw new AppError('Vehicle not found.');

    return vehicle;
};

export default vehicleListIdService;

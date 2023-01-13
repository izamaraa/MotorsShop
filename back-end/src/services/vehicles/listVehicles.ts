import AppDataSource from '../../data-source';
import { Vehicle } from '../../entities/vehicle.entity';

export const listVehicleService = async () => {
    const VehicleRepo = AppDataSource.getRepository(Vehicle);

    const vehicles = await VehicleRepo.find({ relations: { images: true } });

    const carros = vehicles.filter((vehicle) => vehicle.type === 'carro');
    const motos = vehicles.filter((vehicle) => vehicle.type === 'moto');

    return { carros, motos };
};

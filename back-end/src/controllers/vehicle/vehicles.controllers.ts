import { Request, Response } from 'express';
import { IReqCreateVehicle } from '../../interfaces/vehicle';
import { createVehicleService } from '../../services/vehicles/createVehicle';
import vehicleListIdService from '../../services/vehicles/listVehicleId';

import { listVehicleService } from '../../services/vehicles/listVehicles';
import { User } from '../../entities/user.entity';

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

export const createVehicleController = async (req: Request, res: Response) => {
    const data: IReqCreateVehicle = req.body;
    const userId = req.params.userId;
    data.userId = userId;
    const response = await createVehicleService(data as ICreateVehicle);
    return res.status(201).json(response);
};

export const listVehiclesController = async (req: Request, res: Response) => {
    const response = await listVehicleService();
    return res.status(200).json(response);
};

export const vehicleListVehicleIdController = async (
    req: Request,
    res: Response
) => {
    const vehicleId: string = req.params.userId;
    const vehicle = await vehicleListIdService(vehicleId);
    return res.status(200).json(vehicle);
};

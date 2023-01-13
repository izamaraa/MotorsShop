import { Router } from 'express';

import {
    createVehicleController,
    listVehiclesController,
    vehicleListVehicleIdController,
} from '../controllers/vehicle/vehicles.controllers';

import { verifySamePlate } from '../middlewares/vehicles/verifySamePlates';

const routes = Router();

export const vehiclesRoutes = () => {
    routes.post('/:userId', createVehicleController);
    routes.get('', listVehiclesController);
    routes.get('/:userId', vehicleListVehicleIdController);
    return routes;
};

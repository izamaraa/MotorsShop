import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import AppDataSource from "../../data-source"
import { Vehicle } from "../../entities/vehicle.entity"
import { AppError } from "../../errors/appError"

export const verifySamePlate =
    async (req: Request, res: Response, next: NextFunction) => {

        const plate = req.body.plate
        const VehicleRepo = AppDataSource.getRepository(Vehicle)
        const allVehicles = await VehicleRepo.find()
        const allPlates = allVehicles.map((vehicle) => vehicle.plate)

        allPlates.forEach((onePlate) => {
            if (onePlate === plate) {
                throw new AppError("Esta placa de carro ja existe", 400)
            }
        })
        next()
    }

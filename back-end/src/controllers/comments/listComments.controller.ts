import { Request, Response } from "express";

import { listCommentsVehicleService } from "../../services/comments/listComments.service";

export const listCommentVehicleController = async (
  req: Request,
  res: Response
) => {
  const vehicleId: string = req.params.id;
  const comments = await listCommentsVehicleService(vehicleId);
  return res.status(200).json(comments);
};

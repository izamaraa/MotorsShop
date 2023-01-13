import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { AppError } from "../../errors/appError";

export const listCommentsVehicleService = async (vehicleId: string) => {
  const commentsRepository = AppDataSource.getRepository(Comment);
  if (!vehicleId) {
    throw new AppError("Vehicle not found", 404);
  }
  const commentsList = await commentsRepository.find({
    where: {
      vehicle: {
        id: vehicleId,
      },
    },
  });
  if (!commentsList) throw new AppError("comment not found.", 404);

  return commentsList;
};

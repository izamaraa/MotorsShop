import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { User } from "../../entities/user.entity";
import { Vehicle } from "../../entities/vehicle.entity";
import { IUserComment } from "../../interfaces/comments";

export const createCommentService = async ({
  id,
  //id é o id do usuario
  vehicleId,
  comment,
}: IUserComment) => {
  const userRepository = AppDataSource.getRepository(User);
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const commentRepository = AppDataSource.getRepository(Comment);

  const user = await userRepository.findOneBy({ id: id });
  //id é o id do usuario
  if (!user) {
    throw new Error(`User does not exist`);
  }
  const vehicle = await vehicleRepository.findOneBy({ id: vehicleId });
  if (!vehicle) {
    throw new Error(`Vehicle does not exist`);
  }

  const newComment = commentRepository.create({
    comment: comment,
    user: user,
    vehicle: vehicle,
  });

  await commentRepository.save(newComment);

  return newComment;
};

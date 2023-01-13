import { Request, Response } from "express";
import { createCommentService } from "../../services/comments/createComment.service";

export const createCommentController = async (req: Request, res: Response) => {
  const comment = req.body.comment;
  const { id } = req.user;
  //id é o id do usuario
  const vehicleId = req.params.id;
  const newComment = await createCommentService({ comment, vehicleId, id });
  return res.status(201).json(newComment);
};

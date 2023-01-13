import { Router } from "express";
import { createCommentController } from "../controllers/comments/createComment.controller";
import { listCommentVehicleController } from "../controllers/comments/listComments.controller";
import { authTokenMiddleware } from "../middlewares/authToken.middleware";

const routes = Router();

export const commentsRoutes = () => {
  routes.post("/:id", authTokenMiddleware, createCommentController);
  routes.get("/:id", listCommentVehicleController);
  return routes;
};

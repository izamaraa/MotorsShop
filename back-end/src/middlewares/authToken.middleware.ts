import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/appError";
import "dotenv/config";

export const authTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError("Token inválido!", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError("Token inválido", 401);
      }

      req.user = {
        isSeller: decoded.isSeller,
        isActive: decoded.isActive,
        id: decoded.id,
      };
    }
  );
  next();
};

import { Request, Response, NextFunction } from "express";
import {
  BusinessError,
  NotFoundError,
  UnauthorizedError,
} from "@/infra/helpers/Errors";
import { HttpStatusCode } from "@/infra/helpers/HttpStatusCode";

export const errorHandling = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = HttpStatusCode.OK;

  if (error instanceof NotFoundError) statusCode = HttpStatusCode.NOT_FOUND;
  if (error instanceof UnauthorizedError)
    statusCode = HttpStatusCode.UNAUTHORIZED;
  if (error instanceof BusinessError)
    statusCode = HttpStatusCode.UNPROCESSABLE_ENTITY;

  return res.status(statusCode).json(responseErrorFormatter(error));
};

export function responseErrorFormatter(error: Error) {
  return {
    name: error.name,
    message: error.message,
  };
}

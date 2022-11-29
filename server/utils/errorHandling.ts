import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

import AppError from "./appError";

const handleCastErrorDB = (err: Prisma.PrismaClientKnownRequestError) => {
  const message = `Invalid '${err.meta}'!`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err: Prisma.PrismaClientKnownRequestError) => {
  const message = `Duplicate field. Please use a value different than '${err.meta}'!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err: Prisma.PrismaClientValidationError) => {
  const errors = Object.values(err).map((el) => el.message);
  const message = `Invalid input data: ${errors.join(". ")}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err: any, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err: any, res: Response) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    console.error("ERROR 💥", err);

    // 2) Send generic message
    res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

export = (err: any, req: Request, res: Response, next: NextFunction) => {
  // console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    if (err.code === "P2002") err = handleDuplicateFieldsDB(err);
    if (err.code === "P2005") err = handleCastErrorDB(err);
    if (err.code === "P2006") err = handleValidationErrorDB(err);

    // sendErrorProd(err, res);
    sendErrorDev(err, res);
  }
};

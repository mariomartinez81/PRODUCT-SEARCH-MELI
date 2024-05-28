import { NextFunction, Request, Response } from 'express';
import { author } from '../utils/constants';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    author,
    message: err.message || 'Internal Server Error',
  });
};

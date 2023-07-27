import { Request, Response, NextFunction } from 'express';

interface Error {
    status?: number;
    message?: string;
}

export function errorLogger(error: Error, req: Request, res: Response, next: NextFunction) {
    console.error(error.message);
    next(error);
}

export function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    res.status(status).send({
        status,
        message,
    });
    }

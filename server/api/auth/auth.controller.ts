import { Request, Response, NextFunction } from 'express';

export function login(req:Request, res:Response, next:NextFunction) {
    res.send('Hello login!');
}   
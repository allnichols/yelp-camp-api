import { Request, Response, NextFunction } from 'express';
import { signupService } from './auth.service';

export async function signup(req:Request, res:Response, next:NextFunction) {
    const { email, password } = req.body;
    try {
        const user = await signupService(email, password);
        console.log(user);
        if(user != null) {
            res.status(201).send({ email: user.email, id: user.id });
        } else if(user.error === 'User already exists') {
            res.status(400).send({ message: user.message });
        }
        
    } catch (error) {
        console.log(error);
    }
    // res.status(201).send({ email, password });
}

export function login(req:Request, res:Response, next:NextFunction) {
    res.send('Hello login!');
}

export function logout(req:Request, res:Response, next:NextFunction) {
    res.send('Hello logout!');
}
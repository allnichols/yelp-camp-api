import { Request, Response, NextFunction } from 'express';
import { signupService, loginService } from './auth.service';

export async function signup(req:Request, res:Response, next:NextFunction) {
    const { email, password } = req.body;
    try {
        const user = await signupService(email, password);
        console.log('Sign up',user.email);
        if(user.success) {
            res.status(201).send({ email: user.email, id: user.id });
        } else if(user.success === false) {
            res.status(400).send({ message: user.error });
        }
        
    } catch (error) {
        console.log(error);
    }
}

export async function login(req:Request, res:Response, next:NextFunction) {
    const { email, password } = req.body;
    try {
       const user = await loginService(email, password);
       if(user.success) {
           res.status(200).send({ email: user.email, id: user.id });
       } else if(user.success === false) {
            res.status(400).send({ message: user.message });
       }
    } catch (error) {
        console.error(error);
    }
}

export function logout(req:Request, res:Response, next:NextFunction) {
    res.json('Hello logout!');
}